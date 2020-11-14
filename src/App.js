import "./css/main.css";
import React, { useEffect } from "react";
// import axios from "axios";

const App = () => {
	// const [dogPic, setDogPic] = useState("");
	// const dogs = async () => {
	// 	const randomPic = Math.floor(Math.random() * 10);
	// 	const randomPage = Math.floor(Math.random() * 100);
	// 	const response = await axios.get(
	// 		"https://api.unsplash.com/search/photos",
	// 		{
	// 			headers: {
	// 				"Accept-Version": "v1",
	// 				Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
	// 			},
	// 			params: {
	// 				page: randomPage,
	// 				query: "puppy",
	// 			},
	// 		}
	// 	);

	// 	setDogPic(response.data.results[randomPic].urls.regular);
	// };

	useEffect(() => {
		//dogs();
	}, []);

	return (
		<div className="container mx-auto h-auto pt-8 md:h-screen flex items-center justify-center flex-col md:flex-row">
			<div className="flex-shrink text-center px-2 pb-4 flex items-center justify-center flex-col">
				<h1 className="text-4xl text-white">
					Hi! My name is{" "}
					<span className="light-cyan">Kenton</span>,
					<br /> I make web apps.
				</h1>
				<h3 className="text-2xl text-white">
					My site is <span className="dark-red">not</span> fully
					ready, but enjoy a random picture of a{" "}
					<span className="dark-cyan">puppy</span> in the
					meantime 🐶
				</h3>
			</div>
			<div className="flex-none md:w-1/2">
				<img
					className="rounded-md shadow-xl bg-white"
					src="https://images.unsplash.com/photo-1579180728061-3a0f2d871a31?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzODc3NH0"
					alt="#"
				/>
			</div>
		</div>
	);
};

export default App;
