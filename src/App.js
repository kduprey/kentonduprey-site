import "./css/main.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
	const [dogPic, setDogPic] = useState("");
	const [author, setAuthor] = useState("");
	const [profile, setProfile] = useState("");
	const dogs = async () => {
		const randomPic = Math.floor(Math.random() * 10);
		const randomPage = Math.floor(Math.random() * 100);
		const response = await axios.get(
			"https://api.unsplash.com/search/photos",
			{
				headers: {
					"Accept-Version": "v1",
					Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
				},
				params: {
					page: randomPage,
					query: "puppy",
				},
			}
		);
		setAuthor(response.data.results[randomPic].user.name);
		setProfile(response.data.results[randomPic].user.links.html);
		setDogPic(response.data.results[randomPic].urls.regular);
	};

	useEffect(() => {
		dogs();
	}, []);

	return (
		<div className="container mx-auto h-auto pt-6 md:h-screen flex items-center justify-center flex-col md:flex-row">
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
			<div className="flex-none md:w-1/2 flex flex-col place-items-center">
				<img
					className="rounded-md shadow-xl md:h-auto md:w-auto max-w-60"
					src={dogPic}
					alt="#"
				/>
				<p className=" text-gray-600 italic text-sm">
					Photo by{" "}
					<a
						href={`${profile}?utm_source=KentonDuprey-Site&utm_medium=referral`}
						className="underline"
					>
						{author}
					</a>{" "}
					on{" "}
					<a
						href="https://unsplash.com/?utm_source=KentonDuprey-Site&utm_medium=referral"
						className="underline"
					>
						Unsplash
					</a>
				</p>
			</div>
		</div>
	);
};

export default App;
