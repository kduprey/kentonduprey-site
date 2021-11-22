import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = (props) => {
	return (
		<div
			className="container flex flex-col items-center justify-center"
			id="contact"
		>
			<h1 className="text-5xl font-bold text-center py-3">Contact</h1>
			<div>
				<p className="font-light text-xl">
					Email:
					<a
						href="mailto:kentonduprey@icloud.com"
						className="text-xl font-bold text-center underline px-2 hover:text-gray-700 transition-colors ease-in"
					>
						kentonduprey@icloud.com
					</a>
				</p>
			</div>
			<div className="flex justify-center items-center py-3">
				<a href="https://github.com/kentond18" className="p-2">
					<FaGithub className="text-4xl hover:text-gray-700 transition-colors ease-in" />
				</a>
				<a href="https://www.instagram.com/kentond18/" className="p-2">
					<FaInstagram className="text-4xl hover:text-gray-700 transition-colors ease-in" />
				</a>
				<a href="https://twitter.com/kentond18" className="p-2">
					<FaTwitter className="text-4xl hover:text-gray-700 transition-colors ease-in" />
				</a>
			</div>
		</div>
	);
};

export default Contact;
