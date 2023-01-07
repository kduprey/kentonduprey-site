import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

import { AppProps } from "next/app";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			ga.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return <Component {...pageProps} />;
}

export default MyApp;
