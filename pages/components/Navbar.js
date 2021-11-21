import Button from "./Button";

const Navbar = (props) => {
	return (
		<nav className="container flex flex-col md:flex-row justify-between py-3 items-center mx-6">
			<h1 className="text-2xl md:text-4xl font-semibold font-display text-center">
				Kenton Duprey.
			</h1>
			<div className="flex justify-evenly">
				<Button>About</Button>
				<Button>Projects</Button>
				<Button>Contact</Button>
			</div>
		</nav>
	);
};

export default Navbar;
