import type { PortableTextBlock } from "@portabletext/react";
import { groq } from "next-sanity";
import { z } from "zod";

export const homeQuery = groq`
*[_type == "home"][0] {
  heroSection {
    headerText,
    subHeaderText,
    buttonText
  },
  projectsSection {
    headerText,
    projects[]-> {
      _id,
      title,
      description,
      link,
      projectImage {
        alt,
        ...(asset-> {
          "id": _id,
          "src": url,
          "blurData": metadata.lqip,
          "dimensions": metadata.dimensions {
            height,
            width
          }
        })
      }
    }
  },
  aboutSection {
    headerText,
    content,
    bioImage {
      alt,
      ...(asset-> {
        "id": _id,
        "src": url,
        "blurData": metadata.lqip,
        "dimensions": metadata.dimensions {
          height,
          width
        }
      })
    }
  },
  contactSection {
    headerText
  },
  linksSection {
    instagramLink,
    twitterLink,
    githubLink
  }
}
`;

export const ImageSchema = z.object({
  alt: z.string(),
  blurData: z.string(),
  dimensions: z.object({ height: z.number(), width: z.number() }),
  id: z.string(),
  src: z.string(),
});

export const ProjectSchema = z.object({
  _id: z.string(),
  description: z.string(),
  link: z.string(),
  projectImage: ImageSchema,
  title: z.string(),
});

export const ProjectSectionSchema = z.object({
  headerText: z.string(),
  projects: z.array(ProjectSchema),
});

export const AboutSectionSchema = z.object({
  bioImage: ImageSchema,
  content: z.custom<PortableTextBlock[]>(),
  headerText: z.string(),
});

export const ContactSectionSchema = z.object({
  headerText: z.string(),
});

export const heroSectionSchema = z.object({
  buttonText: z.string(),
  headerText: z.string().nullable().optional(),
  subHeaderText: z.string(),
});

export const linksSectionSchema = z.object({
  githubLink: z.string(),
  instagramLink: z.string(),
  twitterLink: z.string(),
});

export const homeSchema = z.object({
  aboutSection: AboutSectionSchema,
  contactSection: ContactSectionSchema,
  heroSection: heroSectionSchema,
  linksSection: linksSectionSchema,
  projectsSection: ProjectSectionSchema,
});

export type HeroSectionType = z.infer<typeof heroSectionSchema>;
export type LinksSectionType = z.infer<typeof linksSectionSchema>;
export type HomeType = z.infer<typeof homeSchema>;
export type ProjectType = z.infer<typeof ProjectSchema>;
export type ImageType = z.infer<typeof ImageSchema>;
export type ProjectSectionType = z.infer<typeof ProjectSectionSchema>;
export type AboutSectionType = z.infer<typeof AboutSectionSchema>;
export type ContactSectionType = z.infer<typeof ContactSectionSchema>;
