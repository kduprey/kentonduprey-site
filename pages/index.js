import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import axios from "axios";

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

const Home = ({ bioInfo, projects, skills }) => {
	return (
		<div>
			{/* Header */}
			<Header title="Kenton Duprey - Web Developer" />

			<main className="font-display vh-full flex flex-col items-center justify-center dark:bg-black dark:text-white">
				<Navbar />
				<Hero blurb="" />
				<section className="container md:w-4/5" id="work">
					<h1 className="text-5xl font-bold text-center py-3">
						Work
					</h1>
					<div className="flex flex-col justify-center items-center ">
						{projects.map((project, index) => {
							return (
								<ProjectCard
									key={index}
									title={project.title}
									description={project.description}
									link={project.link}
									image={project.projectImage.url}
									skills={project.projectSkills}
								/>
							);
						})}
					</div>
					<About
						blurb={bioInfo.biographyBlurb.text}
						imageUrl={bioInfo.bioPic.url}
						imageHeight={bioInfo.bioPic.height}
						imageWidth={bioInfo.bioPic.width}
					/>
					<section className="mx-auto md:w-4/5 lg:w-auto">
						<h1 className="text-5xl font-bold text-center py-3">
							Skills
						</h1>
						<div className="flex justify-evenly items-center flex-wrap">
							{skills.map((skill, index) => {
								return (
									<Skill
										key={index}
										title={skill.title}
										iconName={skill.iconName.icon}
									/>
								);
							})}
						</div>
					</section>
					<Contact />
				</section>
			</main>
		</div>
	);
};

export default Home;

export async function getStaticProps(context) {
	try {
		const { data } = await axios.get(
			process.env.NEXT_PUBLIC_GRAPH_CMS_API,
			{
				params: {
					query: QUERY,
				},
			}
		);
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
