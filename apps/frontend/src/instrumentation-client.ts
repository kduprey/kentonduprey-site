// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import {
  browserTracingIntegration,
  captureRouterTransitionStart,
  init,
  replayIntegration,
} from "@sentry/nextjs";

const NETWORK_CAPTURE_ALL_URLS = /.*/;

init({
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    replayIntegration({
      blockAllMedia: false,
      // Additional Replay configuration goes in here, for example:
      maskAllText: false,
      networkCaptureBodies: true,
      networkDetailAllowUrls: [NETWORK_CAPTURE_ALL_URLS],
    }),
    browserTracingIntegration(),
  ],

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
});

export const onRouterTransitionStart = captureRouterTransitionStart;
