import type { ProjectSectionType } from "@/sanity/data/queries/pageQueries/home.queries";

import { ProjectCard } from "../ProjectCard";

export const Projects = ({ headerText, projects }: ProjectSectionType) => (
  <div className="w-full space-y-5">
    <h2 className="text-center font-bold">{headerText}</h2>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(20rem,100%),1fr))] place-items-center gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
);
