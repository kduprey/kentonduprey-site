import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";

export const metadata: Metadata = {
  title: "Kenton Duprey - Web Developer",
  description: "Building elegant web solutions for clients and companies",
};

const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-raleway",
});

const rootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html className={inter.variable} lang="en">
      <head>
        <link href="/favicon.svg" rel="shortcut icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </head>
      <body>
        {children}
        {draftMode().isEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  );
};

export default rootLayout;
