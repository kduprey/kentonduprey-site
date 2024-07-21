/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

import { z } from "zod";

const assertValue = <T>(v: T | undefined, errorMessage: string): T => {
  if (v === undefined) throw new Error(errorMessage);

  return v;
};

// This controls what dataset is used when fetching documents
export const dataset =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "production"
    ? "production"
    : "staging";

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

// see https://www.sanity.io/docs/api-versioning for how versioning works

export const apiVersion = new Date().toISOString().split("T")[0];

// This is the document id used for the preview secret that's stored in your dataset.
// The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
export const previewSecretId: `${string}.${string}` = "preview.secret";

// See the app/api/revalidate/route.ts for how this is used
export const revalidateSecret = z
  .string({
    message: "Environment variable SANITY_REVALIDATE_SECRET is required",
  })
  .parse(process.env.SANITY_REVALIDATE_SECRET);
