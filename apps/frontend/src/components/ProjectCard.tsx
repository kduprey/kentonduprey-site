import { Button, Card, CardContent, CardDescription, H3 } from "@kduprey/ui";
import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "@/sanity/data/queries/pageQueries/home.queries";

export const ProjectCard = ({
  description,
  link,
  projectImage,
  title,
}: ProjectType) => (
  <Card className="w-md md:w-lg">
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
      <Button asChild className="mx-auto">
        <Link href={link}>Explore</Link>
      </Button>
    </CardContent>
  </Card>
);
