import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { FaApple } from "react-icons/fa";

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
						<ProjectCard />
						<ProjectCard />
					</div>
					<About />
					<section>
						<h1 className="text-5xl font-bold text-center py-3">
							Skills
						</h1>
						<Skill>
							<FaApple />
						</Skill>
					</section>
					<Contact />
				</section>
			</main>
		</div>
	);
};

export default Home;
