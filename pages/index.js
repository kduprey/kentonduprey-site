import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { FaHtml5 } from "react-icons/fa";

const Home = () => {
	return (
		<div>
			{/* Header */}
			<Header title="Kenton Duprey - Web Developer" />

			<main className="font-display vh-full flex flex-col items-center justify-center">
				<Navbar />
				<Hero />
				<section className="container">
					<h1 className="text-4xl font-bold text-center py-3">
						Work
					</h1>
					<div className="flex flex-col md:flex-row justify-evenly items-center">
						<ProjectCard
							image="/projects/worldeyef-proj.jpeg"
							title="World Eye Foundation"
							link="https://dev.worldeyef.org"
						/>
					</div>
					<About />
					<section>
						<h1 className="text-5xl font-bold text-center py-3">
							Skills
						</h1>
						<Skill
							title="HTML5"
							blurb="All of the projects that I have created are using the current version of HTML, and all semantics and proper tags for the creation of the page."
						>
							<FaHtml5 />
						</Skill>
					</section>
					<Contact />
				</section>
			</main>
		</div>
	);
};

export default Home;
