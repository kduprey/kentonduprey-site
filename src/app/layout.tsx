import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: "Kenton Duprey - Web Developer",
	description: "Building elegant web solutions for clients and companies",
};

const rootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default rootLayout;
