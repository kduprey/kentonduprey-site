import bundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";

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
  sentryUrl: process.env.SENTRY_URL,
  silent: !process.env.CI,
  tunnelRoute: "/monitoring",
  webpack: {
    automaticVercelMonitors: true,
    treeshake: {
      removeDebugLogging: false,
    },
  },
  widenClientFileUpload: true,
});
