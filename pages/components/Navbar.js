import Button from "./Button";

const Navbar = (props) => {
	return (
		<nav className="container flex flex-col space-y-4 md:space-y-0 md:flex-row lg:w-4/5 md:justify-center md:space-x-4 lg:justify-between p-3 items-center">
			<h1 className="font-semibold font-display text-center">
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
