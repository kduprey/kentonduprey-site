import Socials from "./Socials";
import Button from "./Button";
import Input from "./Input";

const Contact = (props) => {
	return (
		<div
			className="container flex flex-col items-center justify-center"
			id="contact"
		>
			<h1 className="text-5xl font-bold text-center py-3">Contact</h1>
			<form className="flex flex-col items-center container">
				<div className="container flex flex-col md:flex-row items-center justify-center">
					<Input type="text" placeholder="Name" />
					<Input type="email" placeholder="Email" />
				</div>

				<Input textArea={true} placeholder="Message" />
				<Button type="submit" className="w-1/6 m-2">
					Send
				</Button>
			</form>
			<Socials />
		</div>
	);
};

export default Contact;
