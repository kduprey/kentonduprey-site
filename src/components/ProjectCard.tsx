import Image from "next/image";
import Link from "next/link";
import { Skill } from "./Skill";
import type { Project } from "@/types";

export const ProjectCard = ({
	projectImage,
	title,
	description,
	link,
	projectSkills,
}: Project) => {
	return (
		<div className="max-w-md rounded-xl bg-white shadow-md ring-2 ring-slate-100 dark:border dark:border-gray-300 dark:bg-black md:max-w-lg">
			<Image
				alt={title}
				height={projectImage.height}
				loading="lazy"
				src={projectImage.url}
				style={{
					maxWidth: "100%",
					height: "auto",
					objectFit: "cover",
				}}
				width={projectImage.width}
			/>
			<div className="flex flex-col justify-between gap-3 space-y-3 p-3">
				<h3 className="text-xl font-medium leading-tight text-black hover:underline dark:text-white md:text-2xl">
					{title}
				</h3>
				<p className="text-gray-500 dark:text-gray-200 md:text-lg">
					{description}
				</p>
				<div className="flex justify-evenly text-xl md:text-3xl" id="skills">
					{projectSkills.map((skill) => {
						return (
							<Skill
								iconName={skill.iconName}
								key={skill.title + skill.iconName.icon}
								project
								title={skill.title}
							/>
						);
					})}
				</div>
				<button className="mx-auto" type="button">
					<Link href={link}>Explore</Link>
				</button>
			</div>
		</div>
	);
};
