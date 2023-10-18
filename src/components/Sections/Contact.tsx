"use client";

import axios from "axios";
import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	FormEventHandler,
	useState,
} from "react";
import { CgSpinner } from "react-icons/cg";
import { Socials } from "./Socials";

export const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [age, setAge] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [usrMsg, setUsrMsg] = useState("");

	const handleChange: ChangeEventHandler = (
		e: ChangeEvent<HTMLInputElement>
	) => {
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

	const onSubmit: FormEventHandler = (e: FormEvent) => {
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
					setSuccess(false);
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="" id="contact">
			<h2 className="py-3 text-center font-bold">Contact</h2>
			<form
				className="mx-auto flex w-full max-w-lg flex-wrap items-center justify-evenly gap-4"
				id="contact-form"
				onSubmit={onSubmit}
			>
				<input
					type="text"
					placeholder="Age"
					name="age"
					className="hidden"
					value={age}
					onChange={handleChange}
				/>
				<input
					className="input form-input"
					type="text"
					placeholder="Name"
					name="name"
					value={name}
					onChange={handleChange}
					disabled={loading}
					required
				/>
				<input
					className="input form-input"
					type="email"
					placeholder="Email"
					name="email"
					value={email}
					onChange={handleChange}
					disabled={loading}
					required
				/>
				<div className="mx-auto flex flex-col items-center gap-4">
					<textarea
						className="input form-textarea"
						placeholder="Message"
						name="message"
						value={message}
						onChange={handleChange}
						disabled={loading}
						required
					/>

					<button
						type="submit"
						className="m-2 flex "
						id="btn-submit"
						disabled={loading}
					>
						{loading ? "Sending..." : "Send"}

						<CgSpinner
							className={
								"text-gray ml-1 h-6 w-6 animate-spin " +
								(loading ? "" : "hidden")
							}
						/>
					</button>
				</div>

				<p
					className={
						"font-light transition-opacity ease-in " +
						(success ? "opacity-100" : "hidden opacity-0")
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
