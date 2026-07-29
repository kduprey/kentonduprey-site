export const isPublicDev =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.includes("test");

const getSiteUrl = (): string => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case "production":
      return "https://kentonduprey.com";
    case "preview":
      return "https://kd.hausofwebstage.dev";
    case "development":
      return process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3200";
    default:
      if (process.env.NODE_ENV === "production") {
        return "https://kentonduprey.com";
      }
      return process.env.CI === "true"
        ? "http://localhost:3400"
        : "https://kd.hausofweb.dev";
  }
};

export const PUBLIC_SITE_URL = getSiteUrl();

const getCmsUrl = (): string => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case "production":
      return "https://cms.kentonduprey.com";
    case "preview":
      return "https://kd-cms.hausofwebstage.dev";
    case "development":
      return process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3202";
    default:
      if (process.env.NODE_ENV === "production") {
        return "https://cms.kentonduprey.com";
      }
      return process.env.CI === "true"
        ? "http://localhost:3402"
        : "https://kd-cms.hausofweb.dev";
  }
};

export const PUBLIC_CMS_URL = getCmsUrl();
