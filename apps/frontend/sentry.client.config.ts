// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  dsn: "https://87c4e7e5059c86c8021eb11bdc8cc9c2@o1091546.ingest.us.sentry.io/4506956612632576",

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      blockAllMedia: false,
      // Additional Replay configuration goes in here, for example:
      maskAllText: false,
      networkCaptureBodies: true,
      networkDetailAllowUrls: [
        // Allow all network requests
        /.*/,
      ],
    }),
    Sentry.browserTracingIntegration(),
  ],

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
});
