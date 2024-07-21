import { trytm } from "@bdsqqq/try";
import { stripe } from "@kduprey/config";
import { verify } from "jsonwebtoken";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const jwtPayload = z.object({
  event_name: z.string(),
  stripe_customer_id: z.string(),
});

export const POST = async (req: NextRequest) => {
  const authJWT = req.headers.get("Authorization");

  if (!authJWT)
    return new NextResponse("No JWT present in request", {
      status: 401,
    });

  // separate the JWT from the "Bearer " prefix

  const token = z
    .string({
      invalid_type_error: "Invalid JWT",
      required_error: "No JWT present in request",
    })
    .parse(authJWT.split(" ")[1]);

  const payload = verify(
    token,
    z
      .string({
        message: "Environment variable JWT_SECRET is required",
      })
      .parse(process.env.JWT_SECRET),
  );

  const body = jwtPayload.safeParse(payload);

  if (!body.success) {
    return new NextResponse("Invalid request body", {
      status: 400,
    });
  }

  const [stripeRes, stripeErr] = await trytm(
    stripe.billing.meterEvents.create({
      event_name: body.data.event_name,
      payload: {
        stripe_customer_id: body.data.stripe_customer_id,
      },
      timestamp: Math.floor(Date.now() / 1000),
    }),
  );

  if (stripeErr) {
    console.error(stripeErr);
    return new NextResponse("Error sending meter usage", {
      status: 500,
    });
  }

  return NextResponse.json(stripeRes, {
    status: 200,
  });
};
