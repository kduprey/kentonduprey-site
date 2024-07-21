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
  alt: z.string(),
  blurData: z.string(),
  dimensions: z.object({ height: z.number(), width: z.number() }),
  id: z.string(),
  src: z.string(),
});

export const SkillSchema = z.object({
  _id: z.string(),
  iconSlug: z.string(),
  title: z.string(),
});

export const ProjectSchema = z.object({
  _id: z.string(),
  description: z.string(),
  link: z.string(),
  projectImage: ImageSchema,
  projectSkills: z.array(SkillSchema),
  title: z.string(),
});

export const ProjectSectionSchema = z.object({
  headerText: z.string(),
  projects: z.array(ProjectSchema),
});

export const AboutSectionSchema = z.object({
  bioImage: ImageSchema,
  content: z.string(),
  headerText: z.string(),
});

export const homeSchema = z.object({
  aboutSection: AboutSectionSchema,
  contactSection: z.null(),
  heroSection: z.object({
    buttonText: z.string(),
    headerText: z.string(),
    subHeaderText: z.string(),
  }),
  linksSection: z.object({
    githubLink: z.string(),
    instagramLink: z.string(),
    twitterLink: z.string(),
  }),
  projectsSection: ProjectSectionSchema,
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
