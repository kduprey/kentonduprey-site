import Stripe from "stripe";
import { z } from "zod";
import { SERVER_SITE_URL } from "./serverConstants";

export const stripe = new Stripe(
  z
    .string({
      message: "Environment variable STRIPE_SECRET_KEY is required",
    })
    .parse(process.env.STRIPE_SECRET_KEY),
  {
    apiVersion: "2024-09-30.acacia",
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
