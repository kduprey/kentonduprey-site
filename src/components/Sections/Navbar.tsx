export const Navbar = () => {
	return (
		<nav className="flex flex-col items-center space-y-4 p-3 md:flex-row md:justify-center md:space-y-0 md:space-x-4 lg:w-4/5 lg:justify-between">
			<h1 className="text-center text-4xl font-semibold">
				Kenton Duprey.
			</h1>
			<div className="flex w-full max-w-sm justify-evenly">
				<button>
					<a href="#about">About</a>
				</button>
				<button>
					<a href="#work">Work</a>
				</button>
				<button>
					<a href="#contact">Contact</a>
				</button>
			</div>
		</nav>
	);
};
