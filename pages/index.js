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

const Home = () => {
	return (
		<div>
			{/* Header */}
			<Header title="Kenton Duprey - Web Developer" />

			<main className="font-display vh-full flex flex-col items-center justify-center">
				<Navbar />
				<Hero />
				<section className="container" id="work">
					<h1 className="text-4xl font-bold text-center py-3">
						Work
					</h1>
					<div className="flex flex-col md:flex-row justify-evenly items-center">
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
					<About blurb="Hi, my name is Kenton and I am a student at the University of Westmnster persuing a degree in BSc in Computer Science. I am very passionate about web applications and security along with creating elegant designs with the latest web technlogies. I am currently in my final year of studies and looking forward to taking my knowledge to my field and being able to grow more and learn more as a developer in my field." />
					<section>
						<h1 className="text-5xl font-bold text-center py-3 flex justify-center items-center">
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
