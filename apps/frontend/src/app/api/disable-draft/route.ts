import { SERVER_SITE_URL } from "@kduprey/config";
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
  draftMode().disable();
  return NextResponse.redirect(new URL("/", SERVER_SITE_URL));
}
