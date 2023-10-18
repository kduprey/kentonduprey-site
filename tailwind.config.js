module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			display: ["Inter", "sans-serif"],
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
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
		require("prettier-plugin-tailwindcss"),
	],
};
