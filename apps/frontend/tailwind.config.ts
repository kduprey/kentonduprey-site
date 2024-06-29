import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const mainConfig: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			display: ["var(--font-inter)", ...fontFamily.sans],
		},
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				black: "#000",
				white: "#fff",
			},
			transitionProperty: {
				objectFit: "object-fit",
			},
		},
	},
	plugins: [formsPlugin, typography],
};

export default mainConfig;
