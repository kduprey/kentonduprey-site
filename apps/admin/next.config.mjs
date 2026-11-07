import bundleAnalyzer from "@next/bundle-analyzer";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import { withSentryConfig } from "@sentry/nextjs/config";

const isProduction = process.env.VERCEL_ENV === "production";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  allowedDevOrigins: ["kd-admin.hausofweb.dev"],
  experimental: {
    optimizePackageImports: ["@kduprey/ui"],
  },
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(new PrismaPlugin());
    } else {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});

export default withSentryConfig(nextConfig, {
  org: "haus-of-web",
  project: "kentonduprey-admin",
  release: {
    create: isProduction,
    name: process.env.SENTRY_RELEASE,
    // `vercel deploy` builds remotely without a .git dir, so the deploying
    // workflow passes the commit SHA in explicitly.
    ...(process.env.SENTRY_COMMIT_SHA
      ? {
          setCommits: {
            commit: process.env.SENTRY_COMMIT_SHA,
            repo: "hausofweb/kentonduprey-site",
          },
        }
      : {}),
  },
  sentryUrl: "https://sentry.hausofweb.com",
  silent: !process.env.CI,
  sourcemaps: {
    disable: !isProduction,
  },
  tunnelRoute: "/monitoring",
  webpack: {
    automaticVercelMonitors: true,
    treeshake: {
      removeDebugLogging: false,
    },
  },
  widenClientFileUpload: true,
});
