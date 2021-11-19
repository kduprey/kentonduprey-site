import Button from "./Button";

const Navbar = (props) => {
	// return (
	// 	<div id="header" className="text-gray-600 body-font">
	// 		<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
	// 			<a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
	// 				<svg
	// 					xmlns="http://www.w3.org/2000/svg"
	// 					fill="none"
	// 					stroke="currentColor"
	// 					strokeLinecap="round"
	// 					strokeLinejoin="round"
	// 					strokeWidth="2"
	// 					className="w-10 h-10 text-white p-2 bg-teal-400 rounded-full"
	// 					viewBox="0 0 24 24"
	// 				>
	// 					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
	// 				</svg>
	// 				<span className="ml-3 text-xl text-black">
	// 					Kenton Duprey.
	// 				</span>
	// 			</a>
	// 			<nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
	// 				<a className="mr-5 hover:text-gray-900">First Link</a>
	// 				<a className="mr-5 hover:text-gray-900">Second Link</a>
	// 				<a className="mr-5 hover:text-gray-900">Third Link</a>
	// 				<a className="hover:text-gray-900">Fourth Link</a>
	// 			</nav>

	// 			<div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
	// 				<Button text="Button">
	// 					<svg
	// 						xmlns="http://www.w3.org/2000/svg"
	// 						fill="none"
	// 						stroke="currentColor"
	// 						strokeLinecap="round"
	// 						strokeLinejoin="round"
	// 						strokeWidth="2"
	// 						className="w-4 h-4 ml-1"
	// 						viewBox="0 0 24 24"
	// 					>
	// 						<path d="M5 12h14M12 5l7 7-7 7"></path>
	// 					</svg>
	// 				</Button>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	return (
		<nav className="flex flex-col md:flex-row justify-between py-3 items-center mx-6">
			<h1 className="text-4xl font-semibold font-display text-center">
				Kenton Duprey.
			</h1>
			<div className="flex justify-evenly">
				<Button text="About" />
				<Button text="Projects" />
				<Button text="Contact" />
			</div>
		</nav>
	);
};

export default Navbar;
