import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { VisualEditing } from "next-sanity/visual-editing";
import type { PropsWithChildren } from "react";

import "./globals.css";
import { cn } from "@kduprey/ui";
import { draftMode } from "next/headers";
import { SanityLive } from "@/sanity/config/sanity.live";

export const metadata: Metadata = {
  description: "Building elegant web solutions for clients and companies",
  title: "Kenton Duprey - Web Developer",
};

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const rootLayout = async ({ children }: PropsWithChildren) => {
  const { isEnabled } = await draftMode();

  return (
    <html className={cn("font-sans", inter.variable)} lang="en">
      <head>
        <link href="/favicon.svg" rel="shortcut icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </head>
      <body>
        {children}
        <SanityLive />
        {isEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  );
};

export default rootLayout;
