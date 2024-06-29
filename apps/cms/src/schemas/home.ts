import { HomeIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const homeSchema = defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: () => ({
      title: "Home Page",
    }),
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Home Page",
      hidden: true,
    }),
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "headerText",
          title: "Header Text",
          type: "string",
          description:
            "This is the text that will be displayed below the navbar.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subHeaderText",
          title: "Subheader Text",
          type: "string",
          description:
            "This is the text that will be displayed below the header text.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",
          description: "This is the text that will be displayed on the button.",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectsSection",
      title: "Projects Section",
      type: "object",
      fields: [
        defineField({
          name: "headerText",
          title: "Header",
          type: "string",
          description:
            "This is the text that will be displayed above the projects.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "projects",
          title: "Projects",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "project" }],
            },
          ],
          description:
            "This is the list of projects that will be displayed on the page.",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        defineField({
          name: "headerText",
          title: "Header",
          type: "string",
          description:
            "This is the text that will be displayed above the bio image.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "content",
          title: "Content",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "bioImage",
          title: "Bio Image",
          type: "image",
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              description:
                "This is the text that will be read by screen readers and search engines.",
              validation: (Rule) => Rule.required(),
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "skillsSection",
      title: "Skills Section",
      type: "object",
      fields: [
        defineField({
          name: "headerText",
          title: "Header",
          type: "string",
          description:
            "This is the text that will be displayed above the skills.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "skills",
          title: "Skills",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "skill" }],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "contactSection",
      title: "Contact Section",
      type: "object",
      fields: [
        defineField({
          name: "headerText",
          title: "Header",
          type: "string",
          description:
            "This is the text that will be used as the header of the footer.",
          validation: (Rule) => Rule.required(),
          initialValue: "Contact",
        }),
      ],
    }),
    defineField({
      name: "linksSection",
      title: "Links Section",
      type: "object",
      fields: [
        defineField({
          name: "instagramLink",
          title: "Instagram Link",
          type: "string",
          description: "This is the link to your Instagram profile.",
          validation: (Rule) =>
            Rule.regex(
              /^(https?:\/\/)?(www\.)?instagram.com\/[a-zA-Z0-9_.]+\/?$/,
            ).required(),
        }),
        defineField({
          name: "twitterLink",
          title: "Twitter Link",
          type: "string",
          description: "This is the link to your Twitter profile.",
          validation: (Rule) =>
            Rule.regex(
              /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9_.]+\/?$/,
            ).required(),
        }),
        defineField({
          name: "githubLink",
          title: "GitHub Link",
          type: "string",
          description: "This is the link to your GitHub profile.",
          validation: (Rule) =>
            Rule.regex(
              /^(https?:\/\/)?(www\.)?github.com\/[a-zA-Z0-9_.]+\/?$/,
            ).required(),
        }),
      ],
    }),
  ],
});
