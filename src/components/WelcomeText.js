import React from "react";
import Time from "./Time";

const WelcomeText = () => {
	// if (status === 200) {
	// 	return (
	// 		<div className="flex-shrink text-center px-2 pb-4 flex-center flex-col width-50">
	// 			<h1 className="text-4xl white pb-2">
	// 				Hi! My name is{" "}
	// 				<span className="light-cyan">Kenton</span>,
	// 				<br /> I make web apps.
	// 			</h1>
	// 			<h3 className="text-2xl white">
	// 				My site is <span className="dark-red">not</span> fully
	// 				ready, but enjoy <br />a random picture of a{" "}
	// 				<span className="dark-cyan">puppy</span> in the
	// 				meantime 🐶
	// 			</h3>
	// 		</div>
	// 	);
	// } else {
	// }

	return (
		<div className="text-center flex-center height-screen flex-col">
			<h1 className="text-4xl white pb-2">
				Hi! My name is <span className="light-cyan">Kenton</span>,
				<br /> I make web apps.
			</h1>
			<h3 className="text-2xl white">
				My site is <span className="dark-red">not</span> fully
				ready, <br />
				but here is the time in the meantime: <Time />
			</h3>
		</div>
	);
};

export default WelcomeText;
