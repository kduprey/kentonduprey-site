import Head from "next/head";
import Script from "next/script";

const Header = ({ title }) => {
	return (
		<Head>
			<link rel="shortcut icon" href="/64px.png" />
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			></Script>
			<Script
				dangerouslySetInnerHTML={{
					__html: `
  					window.dataLayer = window.dataLayer || [];
  					function gtag(){dataLayer.push(arguments);}
  					gtag('js', new Date());

  					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
						  page_path: window.location.pathname,
						  });
  					`,
				}}
			/>
			<title>{title}</title>
		</Head>
	);
};

export default Header;
