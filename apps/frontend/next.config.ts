import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@kduprey/config"],
  },
  images: {
    remotePatterns: [
      { hostname: "via.placeholder.com" },
      { hostname: "api-us-east-1.graphcms.com" },
      { hostname: "media.graphassets.com" },
      { hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return [
      {
        destination: "/Kenton-Duprey.pdf",
        permanent: true,
        source: "/resume",
      },
    ];
  },
  transpilePackages: ["@kduprey/db"],
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  org: "haus-of-web",
  project: "kentonduprey-site",
  sentryUrl: "https://sentry.hausofweb.com",
  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: false,
    },
  },

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,
});
