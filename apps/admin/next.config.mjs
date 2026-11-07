import bundleAnalyzer from "@next/bundle-analyzer";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import { withSentryConfig } from "@sentry/nextjs";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  allowedDevOrigins: ["kd-admin.hausofweb.dev"],
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  sentryUrl: "https://sentry.hausofweb.com",
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
