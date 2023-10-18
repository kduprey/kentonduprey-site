import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { prisma } from "@/libs/prisma";

export const POST = async (req: NextRequest) => {
	try {
		const { name, email, message, age } = z
			.object({
				name: z.string(),
				email: z.string().email(),
				message: z.string(),
				age: z.string().optional(),
			})
			.parse(await req.json());

		// Honeypot Detection
		if (age && age.length > 0)
			return new Response("Not allowed", { status: 400 });

		const res = await prisma.contactSubmission.create({
			data: {
				name,
				email,
				message,
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
