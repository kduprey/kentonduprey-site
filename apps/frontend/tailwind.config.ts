import formsPlugin from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const mainConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [formsPlugin, typography],
  theme: {
    extend: {
      colors: {
        black: "#000",
        current: "currentColor",
        transparent: "transparent",
        white: "#fff",
      },
      transitionProperty: {
        objectFit: "object-fit",
      },
    },
    fontFamily: {
      display: ["var(--font-inter)", ...fontFamily.sans],
    },
  },
};

export default mainConfig;
