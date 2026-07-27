import { BoltIcon } from "@sanity/icons/Bolt";
import { defineField, defineType } from "sanity";

export const skill = defineType({
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
  icon: BoltIcon,
  name: "skill",
  title: "Skill",
  type: "document",
});
