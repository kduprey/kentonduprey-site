import bundleAnalyzer from "@next/bundle-analyzer";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import { withSentryConfig } from "@sentry/nextjs";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    instrumentationHook: true,
    optimizePackageImports: ["@mantine/core", "@mantine/hooks", "@kduprey/ui"],
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
  automaticVercelMonitors: true,
  disableLogger: false,
  org: "haus-of-web",
  project: "kentonduprey-admin",
  sentryUrl: "https://sentry.hausofweb.com",
  silent: !process.env.CI,
  tunnelRoute: "/monitoring",
  widenClientFileUpload: true,
});
