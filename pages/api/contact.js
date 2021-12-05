import axios from "axios";

export default async function handler(req, res) {
	// Honeypot Detection
	if (req.body.age !== "") {
		res.status(400).send("Bad Request");
		return;
	}

	await axios
		.post(
			"https://api.airtable.com/v0/appSgR129I1JxJptE/Contact%20Form",
			{
				records: [
					{
						fields: {
							Name: req.body.name,
							Email: req.body.email,
							Message: req.body.message,
						},
					},
				],
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
				},
			}
		)
		.then((response) => {
			res.status(response.status).send(response.data);
		});
	res.status(200).send("OK");
}
