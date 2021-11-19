import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Home = () => {
	return (
		<div>
			{/* Header */}
			<Header title="Kenton Duprey - Web Developer" />

			<main className="">
				<Navbar />
			</main>
		</div>
	);
};

export default Home;
