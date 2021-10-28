import Head from "next/head";

const Header = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta
				name="viewport"
				content="width=device-width, inital-scale=1"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default Header;
