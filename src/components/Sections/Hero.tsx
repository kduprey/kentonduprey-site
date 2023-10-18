import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
	return (
		<div className="flex flex-col items-center justify-around">
			<p className="py-3 font-semibold text-black dark:text-white">
				Hi, I&apos;m Kenton 👋
			</p>
			<h2 className="py-3 text-center font-bold leading-tight">
				Building elegant web solutions <br /> for clients and companies
			</h2>

			<button
				className="flex flex-row items-center justify-evenly"
				type="button"
			>
				<a href="#contact">Connect with Me</a>
				<FaArrowRight className="pl-1" />
			</button>
		</div>
	);
};
