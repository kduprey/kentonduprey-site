import axios from "axios";
import type { NextPage } from "next";
import { About } from "@/components/Sections/About";
import { Contact } from "@/components/Sections/Contact";
import { Hero } from "@/components/Sections/Hero";
import { Navbar } from "@/components/Sections/Navbar";
import { Projects } from "@/components/Sections/Projects";
import { Skills } from "@/components/Sections/Skills";
import type { Bio, Project, SkillIcon } from "@/types";

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

	if (!bioInfo || !projects || !skills) {
		return <h1>Something went wrong</h1>;
	}

	return (
		<main className="flex h-full w-full flex-col items-center gap-10 p-6 font-display dark:bg-black dark:text-white">
			<Navbar />
			<Hero />
			<Projects projectsData={projects} />

			<About bioPic={bioInfo.bioPic} biographyBlurb={bioInfo.biographyBlurb} />
			<Skills skillData={skills} />
			<Contact />
		</main>
	);
};

export default Home;

const getContent = async (): Promise<{
	bioInfo?: Bio;
	projects?: Project[];
	skills?: SkillIcon[];
	error?: unknown;
}> => {
	try {
		const { data } = await axios.get<{
			data: {
				bios: Bio[];
				projects: Project[];
				skills: SkillIcon[];
			};
		}>(`${process.env.GRAPH_CMS_API}`, {
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
