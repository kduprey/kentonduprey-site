import { client, token } from "@/sanity";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

const clientWithToken = client.withConfig({ token });

export const GET = async (request: Request) => {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  );

  if (!isValid) return new Response("Invalid secret", { status: 401 });

  draftMode().enable();

  redirect(redirectTo);
};
