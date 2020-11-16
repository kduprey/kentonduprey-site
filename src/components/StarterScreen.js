import React, { useEffect, useState } from "react";

import unsplash from "../api/unsplash";
import WelcomeText from "./WelcomeText";
import Loader from "./Loader";
import DogImage from "./DogImage";

const StarterScreen = () => {
	const [dogPic, setDogPic] = useState("");
	const [author, setAuthor] = useState("");
	const [profile, setProfile] = useState("");
	const [status, setStatus] = useState(0);

	const randomPic = Math.floor(Math.random() * 10);
	const randomPage = Math.floor(Math.random() * 100);

	useEffect(() => {
		const searchDog = async () => {
			await unsplash
				.get("search/photos", {
					params: {
						page: randomPage,
						query: "puppy",
					},
				})
				.then(({ data, status }) => {
					setDogPic(data.results[randomPic].urls.regular);
					setProfile(data.results[randomPic].user.links.html);
					setAuthor(data.results[randomPic].user.name);
					setStatus(status);
				})
				.catch((error) => {
					setStatus(error.response.status);
				});
		};
		if ("" === dogPic) {
			searchDog();
		}
	}, [dogPic, randomPage, randomPic]);

	if (status > 0) {
		return (
			<div className="container mx-auto h-auto pt-6 md:h-screen flex items-center justify-center flex-col md:flex-row fade-in">
				<WelcomeText status={status} />
				{status === 200 && (
					<DogImage
						dogPic={dogPic}
						profile={profile}
						author={author}
					/>
				)}
			</div>
		);
	}
	return <Loader />;
};

export default StarterScreen;
