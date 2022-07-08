import Head from "next/head";

type Props = {
	title: string;
	description: string;
};

const Header = ({ title, description }: Props) => {
	return (
		<Head>
			<link rel="shortcut icon" href="/64px.png" />
			<meta name="description" content={description} />
			<title>{title}</title>
		</Head>
	);
};

export default Header;
