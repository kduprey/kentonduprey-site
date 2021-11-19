const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			gray: colors.coolGray,
			// Brand Colors - Ammend as needed per project
			brand: {
				primary: "#00bcd4",
				secondary: "#ff9800",
				tertiary: "#ff5722",
				quaternary: "#9c27b0",
				quinary: "#3f51b5",
				senary: "#2196f3",
				septenary: "#009688",
				octonary: "#607d8b",
				nonary: "#f44336",
				denary: "#e91e63",
			},
		},
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
		},
		// Font Families - Ammend as needed per project
		fontFamily: {
			// sans: [
			// 	"ui-sans-serif",
			// 	"system-ui",
			// 	"-apple-system",
			// 	"BlinkMacSystemFont",
			// 	"Segoe UI",
			// 	"Roboto",
			// 	"Helvetica Neue",
			// 	"Arial",
			// 	"Noto Sans",
			// 	"sans-serif",
			// 	"Apple Color Emoji",
			// 	"Segoe UI Emoji",
			// 	"Segoe UI Symbol",
			// 	"Noto Color Emoji",
			// ],
			// serif: [
			// 	"ui-serif",
			// 	"Georgia",
			// 	"Cambria",
			// 	"Times New Roman",
			// 	"Times",
			// 	"serif",
			// ],
			// mono: [
			// 	"ui-monospace",
			// 	"SFMono-Regular",
			// 	"Menlo",
			// 	"Monaco",
			// 	"Consolas",
			// 	"Liberation Mono",
			// 	"Courier New",
			// 	"monospace",
			// ],
		},
		extend: {},
	},
	variants: {
		extend: {
			stroke: ["hover", "focus"],
			strokeWidth: ["hover", "focus"],
			backgroundColor: ["active"],
			borderColor: ["active"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};
