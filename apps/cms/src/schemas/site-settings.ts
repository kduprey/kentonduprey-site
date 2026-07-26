import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  fields: [
    defineField({
      hidden: true,
      initialValue: "Site Settings",
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "keywords",
      of: [{ type: "string" }],
      title: "Site Keywords",
      type: "array",
    }),
    defineField({
      description: "Displayed on social cards and search engine results.",
      name: "ogImage",
      options: {
        hotspot: true,
      },
      title: "Open Graph Image",
      type: "image",
    }),
  ],
  name: "siteSettings",
  preview: {
    prepare: () => ({
      title: "Site Settings",
    }),
    select: {
      title: "title",
    },
  },
  title: "Site Settings",
  type: "document",
});
