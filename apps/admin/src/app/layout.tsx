import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { cn } from "@kduprey/ui";
import { Raleway } from "next/font/google";
import type { ComponentProps, PropsWithChildren } from "react";
import "./global.css";

export const metadata = {
  description: "Haus of Web - Admin",
  keywords: "Haus of Web, Kenton Duprey, developer, software engineer, NYC",
  title: "Haus of Web - Admin",
};

const raleway = Raleway({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

// @clerk/themes' `dark` export types its own `theme` field as `X | undefined`,
// which trips exactOptionalPropertyTypes against @clerk/nextjs's stricter
// `Appearance<Theme>` type. The value itself is a valid appearance object.
type ClerkAppearance = NonNullable<
  ComponentProps<typeof ClerkProvider>["appearance"]
>;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <ClerkProvider appearance={dark as ClerkAppearance}>
    <html className={cn("dark", raleway.variable)} lang="en">
      <head>
        <link href="/favicon.svg" rel="shortcut icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          name="viewport"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  </ClerkProvider>
);

export default RootLayout;
