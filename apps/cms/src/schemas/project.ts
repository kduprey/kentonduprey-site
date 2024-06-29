import { RocketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: RocketIcon,
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
      name: "projectImage",
      title: "Project Image",
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
    defineField({
      name: "projectSkills",
      title: "Project Skills",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skill" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
