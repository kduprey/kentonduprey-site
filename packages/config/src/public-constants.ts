export const isPublicDev =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.includes("test");

const getSiteUrl = (): string => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case "production":
      return "https://thealexcohen.com";
    case "preview":
      return "https://ac-test.kduprey.dev";
    case "development":
      return process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3200";
    default:
      if (process.env.NODE_ENV === "production") {
        return "https://thealexcohen.com";
      }
      return process.env.CI === "true"
        ? "http://localhost:3200"
        : "https://ac.kduprey.dev";
  }
};

export const PUBLIC_SITE_URL = getSiteUrl();

const getCmsUrl = (): string => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case "production":
      return "https://cms.thealexcohen.com";
    case "preview":
      return "https://ac-cms-test.kduprey.dev";
    case "development":
      return process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3202";
    default:
      if (process.env.NODE_ENV === "production") {
        return "https://cms.thealexcohen.com";
      }
      return process.env.CI === "true"
        ? "http://localhost:3202"
        : "https://ac-cms.kduprey.dev";
  }
};

export const PUBLIC_CMS_URL = getCmsUrl();
