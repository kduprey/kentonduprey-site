import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-clear border-bottom">
			<div className="container-fluid w-75">
				<a className="navbar-brand" href="#">
					Kenton D. Web Developer
				</a>
				<div className="d-flex flex-column align-items-end">
					<button
						className="navbar-toggler border-0 px-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarLinks"
						aria-controls="navbarLinks"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarLinks">
						<div className="navbar-nav">
							<a
								className="nav-link active text-end"
								aria-current="true"
								href="#"
							>
								Home
							</a>
							<a className="nav-link text-end" href="#">
								See My Work
							</a>
							<a className="nav-link text-primary ml-lg-3 text-end">
								Contact Me
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
