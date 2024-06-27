import Stripe from "stripe";
import { z } from "zod";

export const stripe = new Stripe(
	z
		.string({
			required_error: "STRIPE_SECRET_KEY is required",
		})
		.parse(process.env.STRIPE_SECRET_KEY),
	{
		apiVersion: "2024-06-20",
		typescript: true,
		appInfo: {
			name: "Haus of Web, LLC - kentonduprey.com",
		},
		maxNetworkRetries: 2,
	}
);
