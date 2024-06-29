import "server-only";

import type { QueryParams, ResponseQueryOptions } from "next-sanity";
import { z } from "zod";
import { draftMode } from "next/headers";
import { client } from "../config/sanity.client";
import {
  homeQuery,
  type HomeType,
  settingsQuery,
  type SettingsType,
} from "../data";
import { queryStore } from "./createQueryStore";

export const token = z.string().min(1).parse(process.env.SANITY_API_READ_TOKEN);

const DEFAULT_PARAMS = {} as QueryParams;

const serverClient = client.withConfig({
  // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
  stega: process.env.VERCEL_ENV === "preview",
  token,
});
queryStore.setServerClient(serverClient);
const usingCdn = serverClient.config().useCdn;

export const loadQuery = (<T>(
  query: string,
  params: QueryParams = DEFAULT_PARAMS,
  options: Pick<
    ResponseQueryOptions,
    "cache" | "next" | "perspective" | "stega" | "useCdn"
  > = {},
) => {
  const {
    perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  } = options;
  // Don't cache by default
  let revalidate: NextFetchRequestConfig["revalidate"] = 0;
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) revalidate = false;
  else if (usingCdn) revalidate = 3600;

  return queryStore.loadQuery<T>(query, params, {
    ...options,
    cache: "force-cache",
    next: {
      revalidate,
      ...(options.next ?? {}),
    },
    perspective,
    // Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
    stega: draftMode().isEnabled,
  });
}) satisfies typeof queryStore.loadQuery;

export const loadHomePage = () =>
  loadQuery<HomeType>(
    homeQuery,
    {},
    {
      next: {
        tags: ["home"],
      },
    },
  );

export const loadSettings = () =>
  loadQuery<SettingsType>(
    settingsQuery,
    {},
    {
      next: {
        tags: ["siteSettings"],
      },
    },
  );
