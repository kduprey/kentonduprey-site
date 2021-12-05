import Socials from "./Socials";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";

const Contact = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [age, setAge] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [usrMsg, setUsrMsg] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "name":
				setName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "message":
				setMessage(value);
				break;
			default:
				break;
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			name,
			email,
			message,
			age,
		};
		axios
			.post("/api/contact", data)
			.then((res) => {
				if (res.status === 200) {
					setUsrMsg("Your message has been sent!");
				} else {
					setUsrMsg("Something went wrong!");
				}
				setSuccess(true);
				setName("");
				setEmail("");
				setMessage("");
				setAge("");
				setLoading(false);
				setTimeout(() => {
					document
						.getElementById("usr-msg")
						.classList.remove("opacity-100");
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div
			className="container flex flex-col items-center justify-center"
			id="contact"
		>
			<h1 className="text-5xl font-bold text-center py-3">Contact</h1>
			<form
				className="flex flex-col items-center container"
				id="contact-form"
				onSubmit={onSubmit}
			>
				<div className="container flex flex-col md:flex-row items-center justify-center">
					<Input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={handleChange}
						disabled={loading}
						required
					/>
					<Input
						type="email"
						placeholder="Email"
						name="email"
						value={email}
						onChange={handleChange}
						disabled={loading}
						required
					/>
				</div>

				<Input
					textArea={true}
					placeholder="Message"
					name="message"
					value={message}
					onChange={handleChange}
					disabled={loading}
					required
				/>
				<Input
					type="text"
					placeholder="Age"
					name="age"
					classes="hidden"
					value={age}
					onChange={handleChange}
				/>
				<Button
					type="submit"
					className="m-2"
					id="btn-submit"
					disabled={loading}
				>
					<CgSpinner
						className={
							"h-6 w-6 text-gray mr-1 animate-spin " +
							(!loading ? "hidden" : "")
						}
					/>
					{loading ? "Sending..." : "Send"}
				</Button>
				<p
					className={
						"font-light opacity-0 transition-opacity ease-in " +
						(success ? "opacity-100" : "")
					}
					id="usr-msg"
				>
					{usrMsg}
				</p>
			</form>
			<Socials />
		</div>
	);
};

export default Contact;
