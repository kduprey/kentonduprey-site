module.exports = {
	images: {
		domains: ["via.placeholder.com"],
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
