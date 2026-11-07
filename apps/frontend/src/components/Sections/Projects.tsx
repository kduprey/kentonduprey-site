import { H2 } from "@kduprey/ui";
import type { ProjectSectionType } from "@/sanity/data/queries/pageQueries/home.queries";

import { ProjectCard } from "../ProjectCard";

export const Projects = ({ headerText, projects }: ProjectSectionType) => (
  <div className="w-full space-y-5">
    <H2 className="text-center">{headerText}</H2>
    <div className="flex flex-wrap justify-center gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
);
