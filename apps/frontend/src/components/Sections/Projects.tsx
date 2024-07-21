import type { ProjectSectionType } from "@/sanity";

import { ProjectCard } from "../ProjectCard";

export const Projects = ({ headerText, projects }: ProjectSectionType) => {
  return (
    <div className="w-full space-y-5">
      <h2 className="text-center font-bold">{headerText}</h2>
      <div className="flex flex-col items-center justify-evenly gap-5 md:flex-row">
        {projects.map((project) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
};
