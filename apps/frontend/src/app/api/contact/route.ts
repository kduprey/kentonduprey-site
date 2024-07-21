import type { NextRequest } from "next/server";

import { prisma } from "@kduprey/db";
import { NextResponse } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export const POST = async (req: NextRequest) => {
  try {
    const { age, email, message, name } = z
      .object({
        age: z.string().optional(),
        email: z.string().email(),
        message: z.string(),
        name: z.string(),
      })
      .parse(await req.json());

    // Honeypot Detection
    if (age && age.length > 0)
      return new Response("Not allowed", { status: 400 });

    const res = await prisma.contactSubmission.create({
      data: {
        email,
        message,
        name,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    if (error instanceof z.ZodError)
      return new Response(`Invalid Request - ${fromZodError(error).message}`, {
        status: 400,
      });
    console.error(error);
    return new Response("Error - see logs", { status: 500 });
  }
};
