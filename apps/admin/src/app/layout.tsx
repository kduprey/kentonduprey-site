import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { ComponentProps, PropsWithChildren } from "react";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "./global.css";
import { resolver, theme } from "../theme";

export const metadata = {
  description: "Haus of Web - Admin",
  keywords: "Haus of Web, Kenton Duprey, developer, software engineer, NYC",
  title: "Haus of Web - Admin",
};

// @clerk/themes' `dark` export types its own `theme` field as `X | undefined`,
// which trips exactOptionalPropertyTypes against @clerk/nextjs's stricter
// `Appearance<Theme>` type. The value itself is a valid appearance object.
type ClerkAppearance = NonNullable<
  ComponentProps<typeof ClerkProvider>["appearance"]
>;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <ClerkProvider appearance={dark as ClerkAppearance}>
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link href="/favicon.svg" rel="shortcut icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          name="viewport"
        />
      </head>
      <body>
        <MantineProvider
          cssVariablesResolver={resolver}
          defaultColorScheme="auto"
          theme={theme}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  </ClerkProvider>
);

export default RootLayout;
