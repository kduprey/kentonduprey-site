import React, { useEffect, useState } from "react";
import Time from "./Time";
import unsplash from "../api/unsplash";

const DogImage = () => {
	const [dogPic, setDogPic] = useState("");
	const [author, setAuthor] = useState("");
	const [profile, setProfile] = useState("");
	const [status, setStatus] = useState(0);

	const randomPic = Math.floor(Math.random() * 10);
	const randomPage = Math.floor(Math.random() * 100);

	useEffect(() => {
		const searchDog = async () => {
			const { data, status } = await unsplash.get("search/photos", {
				params: {
					page: randomPage,
					query: "puppy",
				},
			});
			setDogPic(data.results[randomPic].urls.regular);
			setProfile(data.results[randomPic].user.links.html);
			setAuthor(data.results[randomPic].user.name);
			setStatus(status);
		};

		if ("" === dogPic) {
			searchDog();
		}
	}, [dogPic, randomPage, randomPic]);

	if (status !== 200) {
		return (
			<div className="container mx-auto h-auto pt-6 md:h-screen flex items-center justify-center flex-col md:flex-row">
				<div className="flex-shrink text-center px-2 pb-4 flex items-center justify-center flex-col">
					<h1 className="text-4xl text-white pb-2">
						Hi! My name is{" "}
						<span className="light-cyan">Kenton</span>,
						<br /> I make web apps.
					</h1>
					<h3 className="text-2xl text-white">
						My site is <span className="dark-red">not</span>{" "}
						fully ready, <br />
						but here is the time in the meantime: <Time />
					</h3>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container mx-auto h-auto pt-6 md:h-screen flex items-center justify-center flex-col md:flex-row">
				<div className="flex-shrink text-center px-2 pb-4 flex items-center justify-center flex-col">
					<h1 className="text-4xl text-white pb-2">
						Hi! My name is{" "}
						<span className="light-cyan">Kenton</span>,
						<br /> I make web apps.
					</h1>
					<h3 className="text-2xl text-white">
						My site is <span className="dark-red">not</span>{" "}
						fully ready, but enjoy a random picture of a{" "}
						<span className="dark-cyan">puppy</span> in the
						meantime 🐶
					</h3>
				</div>
				<div className="flex-none md:w-1/2 flex flex-col place-items-center">
					<img
						className="rounded-md shadow-xl md:h-auto md:w-auto max-w-60 md:max-w-80 fade-in"
						src={dogPic}
						alt="#"
					/>
					<p className=" text-gray-600 italic text-sm fade-in">
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
	}
};

export default DogImage;
