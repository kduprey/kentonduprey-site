import React from "react";

const ImageCaption = ({ profile, author }) => {
	return (
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
	);
};

export default ImageCaption;
