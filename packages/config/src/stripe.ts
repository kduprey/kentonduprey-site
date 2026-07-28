import Stripe from "stripe";
import { z } from "zod";
import { SERVER_SITE_URL } from "./server-constants";

let stripeClient: Stripe | undefined;

// Lazy singleton: constructing eagerly would require STRIPE_SECRET_KEY in
// every app that imports anything from this package's barrel, even ones
// (like the CMS) that never use Stripe.
export const getStripe = (): Stripe => {
  if (!stripeClient) {
    stripeClient = new Stripe(
      z
        .string({
          message: "Environment variable STRIPE_SECRET_KEY is required",
        })
        .parse(process.env.STRIPE_SECRET_KEY),
      {
        apiVersion: "2026-06-24.dahlia",
        appInfo: {
          name: "Haus of Web, LLC - kentonduprey.com",
          url: SERVER_SITE_URL,
        },
        maxNetworkRetries: 2,
        typescript: true,
      }
    );
  }

  return stripeClient;
};

export const stripeAmountToString = (amount: number) =>
  `$${amount.toString().slice(0, -2)}.${amount.toString().slice(-2)}`;
