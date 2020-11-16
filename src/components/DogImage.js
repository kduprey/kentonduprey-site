import React from "react";
import Image from "./Image";
import ImageCaption from "./ImageCaption";

const DogImage = ({ dogPic, profile, author }) => {
	return (
		<div className="flex-none md:w-1/2 flex flex-col place-items-center">
			<Image url={dogPic} />
			<ImageCaption profile={profile} author={author} />
		</div>
	);
};

export default DogImage;
