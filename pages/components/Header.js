import Head from "next/head";

const Header = ({ title }) => {
	return (
		<Head>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-47RFWE9Y3T"
			></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
  					window.dataLayer = window.dataLayer || [];
  					function gtag(){dataLayer.push(arguments);}
  					gtag('js', new Date());

  					gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}, {
						  page_path: window.location.pathname,
						  });
  					`,
				}}
			/>
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default Header;
