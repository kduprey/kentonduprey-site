import { SERVER_SITE_URL } from "@kduprey/config";
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const draft = await draftMode();
  draft.disable();
  return NextResponse.redirect(new URL("/", SERVER_SITE_URL));
}
