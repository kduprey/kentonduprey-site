import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			{/* Header */}
			<Header title="Kenton Duprey - Web Developer" />

			<main className="vh-100 flex flex-col">
				<Navbar />
			</main>
		</div>
	);
};

export default Home;
