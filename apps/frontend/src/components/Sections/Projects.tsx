import type { ProjectSectionType } from "@/sanity/data/queries/pageQueries/home.queries";

import { ProjectCard } from "../ProjectCard";

export const Projects = ({ headerText, projects }: ProjectSectionType) => (
  <div className="w-full space-y-5">
    <h2 className="text-center font-bold">{headerText}</h2>
    <div className="flex flex-col items-center justify-evenly gap-5 md:flex-row">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
);
