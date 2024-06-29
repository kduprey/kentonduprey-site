import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  preview: {
    select: {
      title: "title",
    },
    prepare: () => ({
      title: "Site Settings",
    }),
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Site Settings",
      hidden: true,
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
      title: "Site Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Displayed on social cards and search engine results.",
      options: {
        hotspot: true,
      },
    }),
  ],
});
