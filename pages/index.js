import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Home = () => {
	return (
		<div>
			{/* Header */}
			<Header title="Kenton Duprey - Web Developer" />

			<main className="font-display vh-full flex flex-col items-center">
				<Navbar />
				<Hero />
			</main>
		</div>
	);
};

export default Home;
