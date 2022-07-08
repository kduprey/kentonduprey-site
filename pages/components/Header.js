import Head from "next/head";

const Header = ({ title }) => {
	return (
		<Head>
			<link rel="shortcut icon" href="/64px.png" />

			<title>{title}</title>
		</Head>
	);
};

export default Header;
