import Image from "next/image";
import Link from "next/link";
import { Project } from "../types";
import Button from "./Button";
import Skill from "./Skill";

type Props = {
	project: Project;
};

const ProjectCard = ({
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
		<div className="max-w-md mx-auto bg-white dark:bg-black dark:border dark:border-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div className="">
				<div className="">
					<Image
						className="h-48 w-full"
						src={projectImage.url}
						alt={title}
						objectFit="cover"
						height={projectImage.height}
						width={projectImage.width}
						loading="lazy"
					/>
				</div>
				<div className="p-8">
					<h3 className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">
						{title}
					</h3>
					<p className="mt-2 text-gray-500 dark:text-gray-200">
						{description}
					</p>
					<div
						id="skills"
						className="flex text-xl justify-evenly p-3"
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
					<Button className="m-auto uppercase bg-black text-white hover:bg-gray-700 transition ease-in">
						<Link href={link}>Explore</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
