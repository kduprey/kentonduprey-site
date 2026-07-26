import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/config/sanity.client";
import { token } from "@/sanity/config/sanity.live";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
});
