import Stripe from "stripe";
import { z } from "zod";
import { SERVER_SITE_URL } from "./serverConstants";

export const stripe = new Stripe(
  z.string().parse(process.env.STRIPE_SECRET_KEY),
  {
    apiVersion: "2024-06-20",
    typescript: true,
    appInfo: {
      name: "Haus of Web, LLC - kentonduprey.com",
      url: SERVER_SITE_URL,
    },
    maxNetworkRetries: 2,
  },
);

export const stripeAmountToString = (amount: number) =>
  `$${amount.toString().slice(0, -2)}.${amount.toString().slice(-2)}`;

export * from "stripe";
