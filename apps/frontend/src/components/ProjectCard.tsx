import Image from "next/image";
import Link from "next/link";
import { Skill } from "./Skill";
import type { ProjectType } from "@/sanity";

export const ProjectCard = ({
  projectImage,
  title,
  description,
  link,
  projectSkills,
}: ProjectType) => {
  return (
    <div className="max-w-md rounded-xl bg-white shadow-md ring-2 ring-slate-100 md:max-w-lg dark:border dark:border-gray-300 dark:bg-black">
      <Image
        alt={title}
        height={projectImage.dimensions.height}
        loading="lazy"
        src={projectImage.src}
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover",
        }}
        width={projectImage.dimensions.width}
      />
      <div className="flex flex-col justify-between gap-3 space-y-3 p-3">
        <h3 className="text-xl font-medium leading-tight text-black hover:underline md:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-gray-500 md:text-lg dark:text-gray-200">
          {description}
        </p>
        <div className="flex justify-evenly text-xl md:text-3xl" id="skills">
          {projectSkills.map((skill) => {
            return (
              <Skill
                iconName={skill.iconSlug}
                key={skill.iconSlug}
                project
                title={skill.title}
              />
            );
          })}
        </div>
        <button className="mx-auto" type="button">
          <Link href={link}>Explore</Link>
        </button>
      </div>
    </div>
  );
};
