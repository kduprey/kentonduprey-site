import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiAzurefunctions, SiMongodb } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
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
  }
  `;

const Home = ({ bioInfo }) => {
	console.log(bioInfo);
	return (
		<div>
			{/* Header */}
			<Header title="Kenton Duprey - Web Developer" />

			<main className="font-display vh-full flex flex-col items-center justify-center">
				<Navbar />
				<Hero blurb="" />
				<section className="container md:w-4/5" id="work">
					<h1 className="text-5xl font-bold text-center py-3">
						Work
					</h1>
					<div className="flex flex-col justify-center items-center ">
						<ProjectCard
							image="/projects/worldeyef-proj.jpeg"
							title="World Eye Foundation"
							blurb="World Eye Foundation is a non-profit organization that provides education and awareness to children in need of eye care."
							link="https://dev.worldeyef.org"
							skills={[
								<SiNextdotjs key={1} />,
								<SiAzurefunctions key={2} />,
								<SiMongodb key={3} />,
								<GrGraphQl key={4} />,
							]}
						/>
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
							<Skill title="HTML 5">
								<FaHtml5 />
							</Skill>
							<Skill title="CSS 3">
								<FaCss3Alt />
							</Skill>
							<Skill title="React">
								<FaReact />
							</Skill>
							<Skill title="Next.js">
								<SiNextdotjs />
							</Skill>
							<Skill title="GraphQL">
								<GrGraphQl />
							</Skill>
							<Skill title="Serverless Functions">
								<SiAzurefunctions />
							</Skill>
							<Skill title="MongoDB">
								<SiMongodb />
							</Skill>
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
