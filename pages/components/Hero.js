import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const Hero = (props) => {
	return (
		<div className="container flex flex-col justify-around items-center pt-5">
			<p className="font-semibold py-3">Hi, I'm Kenton 👋</p>
			<h1 className="text-5xl font-bold text-center p-3 leading-tight">
				Building web applications,
				<br /> user-friendly products,
				<br /> and experiences
			</h1>
			<p className="text-base font-light text-center py-3">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text.
			</p>
			<Button className="uppercase" text="Connect with Me">
				<FaArrowRight className="pl-1" />
			</Button>
		</div>
	);
};

export default Hero;
