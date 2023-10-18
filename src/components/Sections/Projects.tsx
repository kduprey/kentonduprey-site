import { Project } from "@/types";
import { ProjectCard } from "../ProjectCard";

type Props = {
	projectsData: Project[];
};

export const Projects = ({ projectsData }: Props) => {
	return (
		<div className="w-full space-y-5">
			<h2 className="text-center font-bold">Work</h2>
			<div className="flex flex-col items-center justify-evenly gap-5 md:flex-row">
				{projectsData.map((project, index) => {
					return (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							link={project.link}
							projectImage={project.projectImage}
							projectSkills={project.projectSkills}
						/>
					);
				})}
			</div>
		</div>
	);
};
