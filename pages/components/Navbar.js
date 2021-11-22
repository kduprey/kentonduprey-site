import Button from "./Button";

const Navbar = (props) => {
	return (
		<nav className="container flex flex-col md:flex-row justify-between py-3 items-center mx-6">
			<h1 className="text-2xl md:text-4xl font-semibold font-display text-center">
				Kenton Duprey.
			</h1>
			<div className="flex justify-evenly">
				<Button className="uppercase bg-black text-white hover:bg-gray-700 transition ease-in">
					<a href="#about">About</a>
				</Button>
				<Button className="uppercase bg-black text-white hover:bg-gray-700 transition ease-in">
					<a href="#work">Work</a>
				</Button>
				<Button className="uppercase bg-black text-white hover:bg-gray-700 transition ease-in">
					<a href="#contact">Contact</a>
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
