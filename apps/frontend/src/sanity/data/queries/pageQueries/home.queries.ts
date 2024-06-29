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
      },
      projectSkills[]-> {
        _id,
        title,
        iconSlug
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
  skillsSection {
    headerText,
    skills[]-> {
      _id,
      title,
      iconSlug
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
  dimensions: z.object({ height: z.number(), width: z.number() }),
  alt: z.string(),
  id: z.string(),
  src: z.string(),
  blurData: z.string(),
});

export const SkillSchema = z.object({
  _id: z.string(),
  title: z.string(),
  iconSlug: z.string(),
});

export const ProjectSchema = z.object({
  projectSkills: z.array(SkillSchema),
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  link: z.string(),
  projectImage: ImageSchema,
});

export const ProjectSectionSchema = z.object({
  headerText: z.string(),
  projects: z.array(ProjectSchema),
});

export const AboutSectionSchema = z.object({
  headerText: z.string(),
  content: z.string(),
  bioImage: ImageSchema,
});

export const homeSchema = z.object({
  contactSection: z.null(),
  linksSection: z.object({
    instagramLink: z.string(),
    twitterLink: z.string(),
    githubLink: z.string(),
  }),
  heroSection: z.object({
    headerText: z.string(),
    subHeaderText: z.string(),
    buttonText: z.string(),
  }),
  projectsSection: ProjectSectionSchema,
  aboutSection: AboutSectionSchema,
  skillsSection: z.object({
    headerText: z.string(),
    skills: z.array(SkillSchema),
  }),
});

export type HomeType = z.infer<typeof homeSchema>;
export type ProjectType = z.infer<typeof ProjectSchema>;
export type SkillType = z.infer<typeof SkillSchema>;
export type ImageType = z.infer<typeof ImageSchema>;
export type ProjectSectionType = z.infer<typeof ProjectSectionSchema>;
export type AboutSectionType = z.infer<typeof AboutSectionSchema>;
