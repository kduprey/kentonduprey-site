const getSiteUrl = (): string => {
  switch (process.env.VERCEL_ENV) {
    case "production":
      return "https://kentonduprey.com";
    case "preview":
      return "https://kd-test.kduprey.dev";
    case "development":
      return process.env.VERCEL_URL ?? "http://localhost:3400";
    default:
      if (process.env.NODE_ENV === "production") {
        return "https://kentonduprey.com";
      }
      return process.env.CI === "true"
        ? "http://localhost:3400"
        : "https://kd.kduprey.dev";
  }
};

export const SERVER_SITE_URL = getSiteUrl();

const getCmsUrl = (): string => {
  switch (process.env.VERCEL_ENV) {
    case "production":
      return "https://cms.kentonduprey.com";
    case "preview":
      return "https://kd-cms-test.kduprey.dev";
    case "development":
      return process.env.VERCEL_URL ?? "http://localhost:3402";
    default:
      if (process.env.NODE_ENV === "production") {
        return "https://cms.kentonduprey.com";
      }
      return process.env.CI === "true"
        ? "http://localhost:3402"
        : "https://kd-cms.kduprey.dev";
  }
};

export const SERVER_CMS_URL = getCmsUrl();

export const isDev = process.env.CLERK_SECRET_KEY?.includes("test") ?? false;

export const INTERNAL_API_URL =
  process.env.INTERNAL_API_URL ?? "http://localhost:3400";
