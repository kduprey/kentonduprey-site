import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  if (isProtectedRoute(req)) {
    auth().protect(
      () => {
        return userId === process.env.ADMIN_USER_ID;
      },
      {
        unauthorizedUrl: new URL("/unauthorized", req.url).toString(),
      },
    );
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
