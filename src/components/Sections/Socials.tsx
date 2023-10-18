import { NextComponentType } from "next";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export const Socials: NextComponentType = () => {
	return (
		<div className="flex items-center justify-center py-3">
			<a href="https://github.com/kentond18" className="p-2">
				<FaGithub className="text-4xl transition-colors ease-in hover:text-gray-700" />
			</a>
			<a href="https://www.instagram.com/kentond18/" className="p-2">
				<FaInstagram className="text-4xl transition-colors ease-in hover:text-gray-700" />
			</a>
			<a href="https://twitter.com/kentond18" className="p-2">
				<FaTwitter className="text-4xl transition-colors ease-in hover:text-gray-700" />
			</a>
		</div>
	);
};
