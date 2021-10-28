import Header from ".//components/Header.js";
import Navbar from ".//components/Navbar.js";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Header
				title="Kenton Duprey - Web Developer"
				description="Kenton Duprey - I create web applications"
			/>
			<Navbar />
			<div className="d-flex justify-content-center align-items-center vh-100">
				<h1 className="display-4 text-center">
					Hi, my name is <b>Kenton</b> and<br></br> I develop web
					applications.
				</h1>
			</div>
		</div>
	);
}
