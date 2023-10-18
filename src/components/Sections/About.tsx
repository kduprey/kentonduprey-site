import Image from "next/image";
import { Bio } from "@/types";

export const About = ({ biographyBlurb, bioPic }: Bio) => {
	return (
		<div
			className="flex w-full flex-col items-center justify-center gap-5"
			id="about"
		>
			<h2 className="text-center font-bold">About</h2>
			<div className="flex flex-col items-center justify-evenly gap-8 text-justify md:flex-row md:text-left">
				<div className="max-w-[18rem]">
					<Image
						src={bioPic.url}
						height={bioPic.height}
						width={bioPic.width}
						alt="Kenton Duprey"
						className="rounded-full dark:border dark:border-white"
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</div>
				<p className="max-w-md p-3">{biographyBlurb.text}</p>
			</div>
		</div>
	);
};
