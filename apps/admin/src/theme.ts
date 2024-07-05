"use client";

import {
  type CSSVariablesResolver,
  Card,
  createTheme,
  type MantineThemeOverride,
  type VariantColorsResolver,
  defaultVariantColorsResolver,
  rem,
  DEFAULT_THEME,
  mergeMantineTheme,
  rgba,
} from "@mantine/core";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  display: "swap",
  subsets: ["latin"],
});

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  if (input.variant === "danger") {
    return {
      ...defaultResolvedColors,
      background: "none",
      hover: rgba(theme.colors.red[6], 0.2),
      color: "var(--mantine-color-red-6)",
      border: `${rem(1)} solid var(--mantine-color-red-6)`,
    };
  }

  return defaultResolvedColors;
};

const themeOverride: MantineThemeOverride = createTheme({
  black: "#000000",
  components: {
    Card: Card.extend({
      styles: {
        root: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      },
    }),
  },
  fontFamily: `${raleway.style.fontFamily}, sans-serif`,
  headings: {
    fontFamily: `${raleway.style.fontFamily}, sans-serif`,
  },
  primaryColor: "violet",
  primaryShade: { dark: 4, light: 4 },
  variantColorResolver,
});

export const resolver: CSSVariablesResolver = () => ({
  variables: {
    "--mantine-color-default-border": "#fff",
  },
  light: {
    "--mantine-color-default-border": "#fff",
  },
  dark: {
    "--mantine-color-default-border": "#fff",
    "--mantine-color-text": "#fff",
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
