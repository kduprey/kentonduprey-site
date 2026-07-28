import { Button, Card, CardContent, CardDescription, H3 } from "@kduprey/ui";
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
  <Card className="max-w-md md:max-w-lg">
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
    <CardContent className="flex flex-col justify-between gap-3 space-y-3">
      <H3>{title}</H3>
      <CardDescription>{description}</CardDescription>
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
      <Button asChild className="mx-auto">
        <Link href={link}>Explore</Link>
      </Button>
    </CardContent>
  </Card>
);
