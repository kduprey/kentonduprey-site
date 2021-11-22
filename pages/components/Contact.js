import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = (props) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-5xl font-bold text-center py-3">Contact</h1>
			<div>
				<p className="font-light text-xl">
					Email:
					<a
						href="mailto:kentonduprey@icloud.com"
						className="text-xl font-bold text-center underline px-2"
					>
						kentonduprey@icloud.com
					</a>
				</p>
			</div>
			<div className="flex justify-center items-center py-3">
				<a href="https://github.com/kentond18" className="p-2">
					<FaGithub className="text-4xl" />
				</a>
				<a href="https://www.instagram.com/kentond18/" className="p-2">
					<FaInstagram className="text-4xl" />
				</a>
				<a href="https://twitter.com/kentond18" className="p-2">
					<FaTwitter className="text-4xl" />
				</a>
			</div>
		</div>
	);
};

export default Contact;
