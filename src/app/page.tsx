import axios from "axios";
import { NextPage } from "next";
import { About } from "@/components/Sections/About";
import { Contact } from "@/components/Sections/Contact";
import { Hero } from "@/components/Sections/Hero";
import { Navbar } from "@/components/Sections/Navbar";
import { Projects } from "@/components/Sections/Projects";
import { Skills } from "@/components/Sections/Skills";

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

export const dynamic = "force-static";

const Home: NextPage = async () => {
	const { bioInfo, projects, skills } = await getContent();

	return (
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
	);
};

export default Home;

const getContent = async () => {
	try {
		const { data } = await axios.get(process.env.GRAPH_CMS_API!, {
			params: {
				query: QUERY,
			},
		});
		return {
			bioInfo: data.data.bios[0],
			projects: data.data.projects,
			skills: data.data.skills,
		};
	} catch (error) {
		console.error(error);
		return {
			error: "Error retreiving data from CMS",
		};
	}
};
