import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const Hero = ({ blurb }) => {
	if (!blurb) {
		blurb =
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.";
	}
	return (
		<div className="container flex flex-col justify-around items-center pt-5">
			<p className="font-semibold py-3">Hi, I'm Kenton 👋</p>
			<h2 className="font-bold text-center py-3 leading-tight">
				Building web applications,
				<br /> user-friendly products,
				<br /> and experiences
			</h2>

			<Button className="uppercase bg-black text-white hover:bg-gray-700 transition ease-in">
				<a href="#contact">Connect with Me</a>
				<FaArrowRight className="pl-1" />
			</Button>
		</div>
	);
};

export default Hero;
