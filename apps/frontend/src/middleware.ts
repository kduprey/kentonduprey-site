import {
  NextResponse,
  type MiddlewareConfig,
  type NextRequest,
} from "next/server";
import { verify } from "jsonwebtoken";
import { SERVER_SITE_URL } from "@kduprey/config";
import { z } from "zod";
import { JwksClient } from "jwks-rsa";
import { decodeProtectedHeader } from "jose";

export const config: MiddlewareConfig = {
  matcher: ["/api/stripe/billing/meter_events/(.*)", "/api/sms/(.*)"],
};

const allowedOrigins = [SERVER_SITE_URL];

const corsOptions = {
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export async function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = request.headers.get("origin") ?? "";
  const isAllowedOrigin = allowedOrigins.includes(origin);
  console.info("origin", origin, "isAllowedOrigin", isAllowedOrigin);

  // Handle preflighted requests
  const isPreflight = request.method === "OPTIONS";

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  // Handle simple requests
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  } else {
    response.headers.set("Access-Control-Allow-Origin", "null");
    // Block the request
    return new NextResponse(null, {
      headers: {
        "Access-Control-Allow-Origin": allowedOrigins.join(", "),
        ...corsOptions,
      },
      status: 403,
      statusText: "Forbidden",
    });
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Check if the request has a header with the JWT
  const authJWT = request.headers.get("Authorization");

  // If the JWT is not present, return 401 with an error message
  if (!authJWT) {
    console.error("No JWT present in request");
    return new NextResponse(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  try {
    // If the cookie is present, verify the JWT
    await checkJWT(authJWT);
  } catch (error) {
    // If the JWT is invalid, return 401 with an error message
    return Response.json(error, { status: 401, statusText: "Unauthorized" });
  }

  return NextResponse.next();
}

const checkJWT = async (authJWT: string) => {
  const jwksUri = `https://${z
    .string({
      message: "Missing AUTH0_DOMAIN environment variable",
    })
    .parse(process.env.AUTH0_DOMAIN)}/.well-known/jwks.json`;

  const jwksClient = new JwksClient({
    jwksUri,
    requestHeaders: {},
    jwksRequestsPerMinute: 5,
    rateLimit: true,
    cache: true,
    timeout: 30000,
  });

  const secret = await jwksClient.getSigningKey(
    decodeProtectedHeader(authJWT).kid,
  );

  verify(
    authJWT,
    secret.getPublicKey,
    {
      audience: z
        .string({
          message: "Missing AUTH0_AUDIENCE environment variable",
        })
        .parse(process.env.AUTH0_AUDIENCE),
      issuer: `https://${z
        .string({
          message: "Missing AUTH0_DOMAIN environment variable",
        })
        .parse(process.env.AUTH0_DOMAIN)}/`,
      algorithms: ["RS256"],
    },
    (err) => {
      if (err) {
        return { error: err };
      }
      return true;
    },
  );
};
