module.exports = {
	images: {
		domains: [
			"via.placeholder.com",
			"api-us-east-1.graphcms.com",
			"media.graphassets.com",
		],
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
