import bundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs/config";

const isProduction = process.env.VERCEL_ENV === "production";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  allowedDevOrigins: ["kd-cms.hausofweb.dev"],
  experimental: {
    optimizePackageImports: ["@kduprey/config"],
  },
  reactStrictMode: false,
});

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
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
  sentryUrl: process.env.SENTRY_URL,
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
