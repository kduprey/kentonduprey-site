/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

const assertValue = <T>(v: T | undefined, errorMessage: string): T => {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
};

// This controls what dataset is used when fetching documents
export const dataset =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "staging" ||
  process.env.VERCEL_ENV === "production"
    ? "production"
    : "staging";

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

// see https://www.sanity.io/docs/api-versioning for how versioning works

const [isoDate] = new Date().toISOString().split("T");
export const apiVersion = isoDate;
