import bundleAnalyzer from "@next/bundle-analyzer";

const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(new PrismaPlugin());
    } else {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks", "@kduprey/ui"],
  },
});
