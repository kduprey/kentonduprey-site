// @ts-check

/** @type {import("next").NextConfig} */

module.exports = {
	images: {
		remotePatterns: [
			{ hostname: "via.placeholder.com" },
			{ hostname: "api-us-east-1.graphcms.com" },
			{ hostname: "media.graphassets.com" },
		],
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	async redirects() {
		return [
			{
				source: "/resume",
				destination: "/Kenton-Duprey.pdf",
				permanent: true,
			},
		];
	},
};
