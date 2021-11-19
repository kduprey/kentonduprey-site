import Header from "./components/Header";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			{/* Header */}
			<Header title="Kenton Duprey - Web Developer" />

			<main>
				<h1 className="text-6xl font-bold">
					Hello, this is a Next Tailwind Template! :)
				</h1>
			</main>
		</div>
	);
};

export default Home;
