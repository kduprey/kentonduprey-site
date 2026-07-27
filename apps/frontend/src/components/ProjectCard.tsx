import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "@/sanity/data/queries/pageQueries/home.queries";

import { Skill } from "./Skill";

export const ProjectCard = ({
  description,
  link,
  projectImage,
  projectSkills,
  title,
}: ProjectType) => (
  <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-2 ring-slate-100 dark:border dark:border-gray-300 dark:bg-black">
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
      <h3 className="font-medium text-black text-xl leading-tight hover:underline md:text-2xl dark:text-white">
        {title}
      </h3>
      <p className="text-gray-500 md:text-lg dark:text-gray-200">
        {description}
      </p>
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
