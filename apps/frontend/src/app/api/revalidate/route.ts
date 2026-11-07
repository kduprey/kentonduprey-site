import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { revalidateSecret } from "@/sanity/config/sanity.api";

interface WebhookPayload {
  _type: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const { body, isValidSignature } = await parseBody<WebhookPayload>(
      req,
      revalidateSecret
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      return Response.json(
        { body, isValidSignature, message },
        { status: 401 }
      );
    }

    if (!body?._type) {
      const message = "Bad Request";
      return Response.json({ body, message }, { status: 400 });
    }

    // If the `_type` is `page`, then all `client.fetch` calls with
    // `{next: {tags: ['page']}}` will be revalidated
    revalidateTag(body._type, "max");

    return NextResponse.json({ body });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
