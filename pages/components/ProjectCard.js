import Link from "next/link";
import Button from "./Button";

const ProjectCard = ({ image, title, blurb, link, skills }) => {
	if (!link) link = "#";
	if (!image) image = "https://via.placeholder.com/300x200";
	if (!title) title = "Project Title";
	if (!blurb)
		blurb =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo ipsum quas tenetur libero repellat, quos dignissimos consectetur harum a.";

	return (
		<div className="flex flex-col justify-center p-3">
			<div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
				<div className="w-full md:w-1/3 bg-white grid place-items-center">
					<img src={image} alt={title} className="rounded-xl" />
				</div>
				<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
					<h3 className="font-black md:text-2xl text-xl">{title}</h3>
					<p className="md:text-lg text-gray-500 leading-tight font-light">
						{blurb}
					</p>
					<div
						id="skills"
						className="flex text-xl justify-evenly p-3"
					>
						{skills}
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
