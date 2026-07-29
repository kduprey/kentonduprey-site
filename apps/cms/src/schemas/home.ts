import { HomeIcon } from "@sanity/icons/Home";
import { defineField, defineType } from "sanity";

const INSTAGRAM_URL_PATTERN =
  /^(https?:\/\/)?(www\.)?instagram.com\/[a-zA-Z0-9_.]+\/?$/;
const TWITTER_URL_PATTERN =
  /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9_.]+\/?$/;
const GITHUB_URL_PATTERN =
  /^(https?:\/\/)?(www\.)?github.com\/[a-zA-Z0-9_.]+\/?$/;

export const homeSchema = defineType({
  fields: [
    defineField({
      hidden: true,
      initialValue: "Home Page",
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      fields: [
        defineField({
          description:
            "This is the text that will be displayed below the navbar.",
          name: "headerText",
          title: "Header Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          description:
            "This is the text that will be displayed below the header text.",
          name: "subHeaderText",
          title: "Subheader Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          description: "This is the text that will be displayed on the button.",
          name: "buttonText",
          title: "Button Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      fields: [
        defineField({
          description:
            "This is the text that will be displayed above the projects.",
          name: "headerText",
          title: "Header",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          description:
            "This is the list of projects that will be displayed on the page.",
          name: "projects",
          of: [
            {
              to: [{ type: "project" }],
              type: "reference",
            },
          ],
          title: "Projects",
          type: "array",
          validation: (Rule) => Rule.required(),
        }),
      ],
      name: "projectsSection",
      title: "Projects Section",
      type: "object",
    }),
    defineField({
      fields: [
        defineField({
          description:
            "This is the text that will be displayed above the bio image.",
          name: "headerText",
          title: "Header",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "content",
          of: [
            {
              marks: {
                annotations: [
                  {
                    fields: [
                      defineField({
                        name: "href",
                        title: "URL",
                        type: "url",
                        validation: (Rule) => Rule.required(),
                      }),
                    ],
                    name: "link",
                    title: "Link",
                    type: "object",
                  },
                ],
              },
              styles: [],
              type: "block",
            },
          ],
          title: "Content",
          type: "array",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          fields: [
            defineField({
              description:
                "This is the text that will be read by screen readers and search engines.",
              name: "alt",
              title: "Alternative Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          name: "bioImage",
          title: "Bio Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
      ],
      name: "aboutSection",
      title: "About Section",
      type: "object",
    }),
    defineField({
      fields: [
        defineField({
          description:
            "This is the text that will be used as the header of the footer.",
          initialValue: "Contact",
          name: "headerText",
          title: "Header",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      name: "contactSection",
      title: "Contact Section",
      type: "object",
    }),
    defineField({
      fields: [
        defineField({
          description: "This is the link to your Instagram profile.",
          name: "instagramLink",
          title: "Instagram Link",
          type: "string",
          validation: (Rule) => Rule.regex(INSTAGRAM_URL_PATTERN).required(),
        }),
        defineField({
          description: "This is the link to your Twitter profile.",
          name: "twitterLink",
          title: "Twitter Link",
          type: "string",
          validation: (Rule) => Rule.regex(TWITTER_URL_PATTERN).required(),
        }),
        defineField({
          description: "This is the link to your GitHub profile.",
          name: "githubLink",
          title: "GitHub Link",
          type: "string",
          validation: (Rule) => Rule.regex(GITHUB_URL_PATTERN).required(),
        }),
      ],
      name: "linksSection",
      title: "Links Section",
      type: "object",
    }),
  ],
  icon: HomeIcon,
  name: "home",
  preview: {
    prepare: () => ({
      title: "Home Page",
    }),
    select: {
      title: "title",
    },
  },
  title: "Home Page",
  type: "document",
});
