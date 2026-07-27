import { RocketIcon } from "@sanity/icons/Rocket";
import { defineField, defineType } from "sanity";

export const project = defineType({
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
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
      name: "projectImage",
      title: "Project Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectSkills",
      of: [
        {
          to: [{ type: "skill" }],
          type: "reference",
        },
      ],
      title: "Project Skills",
      type: "array",
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: RocketIcon,
  name: "project",
  title: "Project",
  type: "document",
});
