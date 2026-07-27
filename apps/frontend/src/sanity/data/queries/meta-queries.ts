import { groq } from "next-sanity";
import { z } from "zod";

export const settingsQuery = groq`*[_type == "siteSettings"][0] {
  siteTitle,
  description,
	keywords,
  ogImage
}`;

export const settingsSchema = z
  .object({
    description: z.string().nullable().optional(),
    keywords: z.array(z.string()).nullable().optional(),
    ogImage: z
      .object({
        asset: z.object({
          _ref: z.string(),
        }),
      })
      .nullable()
      .optional(),
    siteTitle: z.string().nullable().optional(),
  })
  .nullable()
  .optional();

export type SettingsType = z.infer<typeof settingsSchema>;
