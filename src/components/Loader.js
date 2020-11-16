import React from "react";
import "../css/loader.css";

const Loader = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<i className="fas fa-spinner spinner light-cyan text-6xl"></i>;
		</div>
	);
};

export default Loader;
