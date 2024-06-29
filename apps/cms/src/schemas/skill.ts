import { BoltIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: BoltIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "iconSlug",
      title: "Icon Slug",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
