import Image from "next/image";
import type { Bio } from "@/types";

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
						alt="Kenton Duprey"
						className="rounded-full dark:border dark:border-white"
						height={bioPic.height}
						src={bioPic.url}
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
						width={bioPic.width}
					/>
				</div>
				<p className="max-w-md p-3">{biographyBlurb.text}</p>
			</div>
		</div>
	);
};
