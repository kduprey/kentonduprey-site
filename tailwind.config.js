module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
		},
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
		require("@tailwindcss/forms"),
	],
};
