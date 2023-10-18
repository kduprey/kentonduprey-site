import { ProjectCard } from "../ProjectCard";
import type { Project } from "@/types";

interface ProjectsProps {
	projectsData: Project[];
}

export const Projects = ({ projectsData }: ProjectsProps) => {
	return (
		<div className="w-full space-y-5">
			<h2 className="text-center font-bold">Work</h2>
			<div className="flex flex-col items-center justify-evenly gap-5 md:flex-row">
				{projectsData.map((project) => {
					return (
						<ProjectCard
							description={project.description}
							key={project.title}
							link={project.link}
							projectImage={project.projectImage}
							projectSkills={project.projectSkills}
							title={project.title}
						/>
					);
				})}
			</div>
		</div>
	);
};
