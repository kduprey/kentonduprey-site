import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export const POST = async (req: NextRequest) => {
	// Honeypot Detection
	if ((await req.json()).age !== "") {
		return new Response("Honeypot Detected", { status: 400 });
	}
	try {
		const { name, email, message } = z
			.object({
				name: z.string(),
				email: z.string().email(),
				message: z.string(),
			})
			.parse(await req.json());

		const res = await axios.post(
			"https://api.airtable.com/v0/appSgR129I1JxJptE/Contact%20Form",
			{
				records: [
					{
						fields: {
							Name: name,
							Email: email,
							Message: message,
						},
					},
				],
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
				},
			}
		);
		return NextResponse.json(res.data);
	} catch (error) {
		if (error instanceof z.ZodError)
			return new Response(`Invalid Request - ${fromZodError(error)}`, {
				status: 400,
			});
		console.log(error);
		return new Response("Error - see logs", { status: 500 });
	}
};
