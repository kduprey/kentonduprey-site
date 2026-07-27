import Image from "next/image";
import Link from "next/link";
import { H3, P } from "@/components/Typography";
import type { ProjectType } from "@/sanity/data/queries/pageQueries/home.queries";

import { Skill } from "./Skill";

export const ProjectCard = ({
  description,
  link,
  projectImage,
  projectSkills,
  title,
}: ProjectType) => (
  <div className="max-w-md rounded-xl bg-white shadow-md ring-2 ring-slate-100 md:max-w-lg dark:border dark:border-gray-300 dark:bg-black">
    <Image
      alt={title}
      height={projectImage.dimensions.height}
      loading="lazy"
      src={projectImage.src}
      style={{
        height: "auto",
        maxWidth: "100%",
        objectFit: "cover",
      }}
      width={projectImage.dimensions.width}
    />
    <div className="flex flex-col justify-between gap-3 space-y-3 p-3">
      <H3 className="text-black hover:underline dark:text-white">{title}</H3>
      <P>{description}</P>
      <div className="flex justify-evenly text-xl md:text-3xl" id="skills">
        {projectSkills.map((skill) => (
          <Skill
            iconName={skill.iconSlug}
            key={skill.iconSlug}
            project
            title={skill.title}
          />
        ))}
      </div>
      <button className="mx-auto" type="button">
        <Link href={link}>Explore</Link>
      </button>
    </div>
  </div>
);
