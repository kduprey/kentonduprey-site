import { defineLive } from "next-sanity/live";
import z from "zod";
import { client } from "@/sanity/config/sanity.client";

export const token = z
  .string({
    message: "Environment variable SANITY_API_READ_TOKEN is required",
  })
  .min(1)
  .parse(process.env.SANITY_API_READ_TOKEN);

export const { SanityLive, sanityFetch } = defineLive({
  browserToken: token,
  client,
  serverToken: token,
});
