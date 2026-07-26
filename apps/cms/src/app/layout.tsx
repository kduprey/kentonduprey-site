import type { PropsWithChildren } from "react";

export const metadata = {
  description: "Alex Cohen - NYC based DJ - CMS",
  keywords: "Alex Cohen, DJ, NYC",
  title: "DJ Alex Cohen - CMS",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <head>
      <link href="/favicon.svg" rel="shortcut icon" />
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        name="viewport"
      />
    </head>
    {/* biome-ignore lint/suspicious/noExplicitAny: react-i18next's global JSX augmentation narrows body's children to ReactI18NextChildren, incompatible with a duplicate @types/react instance */}
    <body>{children as any}</body>
  </html>
);

export default RootLayout;
