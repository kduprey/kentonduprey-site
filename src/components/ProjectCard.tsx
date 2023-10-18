import Image from "next/legacy/image";
import Link from "next/link";
import { Project } from "@/types";
import { Skill } from "./Skill";

export const ProjectCard = ({
	projectImage,
	title,
	description,
	link,
	projectSkills,
}: Project) => {
	if (!link) link = "#";
	if (!projectImage) projectImage.url = "https://via.placeholder.com/300x200";
	if (!title) title = "Project Title";
	if (!description)
		description =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo ipsum quas tenetur libero repellat, quos dignissimos consectetur harum a.";
	if (!projectSkills) projectSkills = [];

	return (
		<div className="max-w-md rounded-xl bg-white shadow-md ring-2 ring-slate-100 dark:border dark:border-gray-300 dark:bg-black md:max-w-lg">
			<Image
				src={projectImage.url}
				alt={title}
				objectFit="cover"
				height={projectImage.height}
				width={projectImage.width}
				loading="lazy"
			/>
			<div className="flex flex-col justify-between space-y-3 p-3 gap-3">
				<h3 className="text-xl font-medium leading-tight text-black hover:underline dark:text-white md:text-2xl">
					{title}
				</h3>
				<p className="text-gray-500 dark:text-gray-200 md:text-lg">
					{description}
				</p>
				<div
					id="skills"
					className="flex justify-evenly text-xl md:text-3xl"
				>
					{projectSkills.map((skill, index) => {
						return (
							<Skill
								project={true}
								title={skill.title}
								key={index}
								iconName={skill.iconName}
							/>
						);
					})}
				</div>
				<button className="mx-auto">
					<Link href={link}>Explore</Link>
				</button>
			</div>
		</div>
	);
};
