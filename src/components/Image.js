import React from "react";

const Image = ({ url }) => {
	return (
		<img
			className="rounded-md shadow-xl md:h-auto md:w-auto max-w-60 md:max-w-80"
			src={url}
			alt="#"
		/>
	);
};

export default Image;
