import axios from "axios";
import { NextPage } from "next";
import Script from "next/script";
import Header from "../components/Header";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Hero from "../components/Sections/Hero";
import Navbar from "../components/Sections/Navbar";
import { Bio, Project, SkillIcon } from "../types";
import Projects from "./../components/Sections/Projects";
import Skills from "./../components/Sections/Skills";

const QUERY = `{
	bios(where: {createdBy: {name: "Kenton Duprey"}}) {
	  biographyBlurb {
		text
	  }
	  bioPic {
		url
		width
		height
	  }
	}
	projects {
	  title
	  description
	  link
	  projectImage {
		url
		width
		height
	  }
	  projectSkills {
		... on Skill {
		  iconName
		}
	  }
	}
	skills {
	  title
	  iconName
	}
  }
  `;

type Props = {
	bioInfo: Bio;
	projects: Project[];
	skills: SkillIcon[];
};

const Home: NextPage = ({ bioInfo, projects, skills }: Props) => {
	return (
		<div>
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			></Script>
			<Script
				id="ga-script"
				dangerouslySetInnerHTML={{
					__html: `
  					window.dataLayer = window.dataLayer || [];
  					function gtag(){dataLayer.push(arguments);}
  					gtag('js', new Date());

  					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
						  page_path: window.location.pathname,
						  });
  					`,
				}}
			/>
			{/* Header */}
			<Header
				title="Kenton Duprey - Web Developer"
				description="Building elegant web solutions for clients and companies"
			/>

			<main className="flex h-full w-full flex-col items-center gap-10 p-6 font-display dark:bg-black dark:text-white">
				<Navbar />
				<Hero blurb="" />
				<Projects projectsData={projects} />

				<About
					biographyBlurb={bioInfo.biographyBlurb}
					bioPic={bioInfo.bioPic}
				/>
				<Skills skillData={skills} />
				<Contact />
			</main>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	try {
		const { data } = await axios.get(process.env.GRAPH_CMS_API, {
			params: {
				query: QUERY,
			},
		});
		return {
			props: {
				bioInfo: data.data.bios[0],
				projects: data.data.projects,
				skills: data.data.skills,
			},
		};
	} catch (error) {
		console.error(error);
		return {
			props: {
				error: "Error retreiving data from CMS",
			},
		};
	}
}
