import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Skill from "./Skill";

const ProjectCard = ({
	image,
	title,
	description,
	link,
	skills,
	imageHeight,
	imageWidth,
}) => {
	if (!link) link = "#";
	if (!image) image = "https://via.placeholder.com/300x200";
	if (!title) title = "Project Title";
	if (!description)
		description =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo ipsum quas tenetur libero repellat, quos dignissimos consectetur harum a.";
	if (!skills) skills = [];

	return (
		<div className="max-w-md mx-auto bg-white dark:bg-black dark:border dark:border-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div className="md:flex">
				<div className="md:shrink-0">
					<Image
						className="h-48 w-full object-cover md:h-full md:w-48"
						src={image}
						alt={title}
						height={imageHeight}
						width={imageWidth}
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
						{skills.map((skill, index) => {
							return (
								<Skill
									project={true}
									key={index}
									iconName={skill.iconName.icon}
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
