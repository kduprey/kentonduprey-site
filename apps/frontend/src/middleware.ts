import { NextResponse, type NextRequest } from "next/server";
import { verify } from "jsonwebtoken";
import { z } from "zod";

export const config = {
  matcher: "/api/stripe/billing/meter_events/(.*)",
};

export function middleware(request: NextRequest) {
  const secret = z.string().parse(process.env.JWT_SECRET);
  // Check if the request has a cookie with the name "session"
  const authJWT = request.headers.get("Authorization");

  // If the cookie is not present, return false
  if (!authJWT) {
    console.error("No JWT present in request");
    return false;
  }

  try {
    // If the cookie is present, verify the JWT
    verify(authJWT, secret);
  } catch (error) {
    // If the JWT is invalid, return 401 with an error message
    return Response.json(error, { status: 401, statusText: "Unauthorized" });
  }

  return NextResponse.next();
}
