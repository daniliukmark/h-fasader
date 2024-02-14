import "~/styles/globals.css";

import { IBM_Plex_Sans } from "next/font/google";

const inter = IBM_Plex_Sans({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

import { cookies } from "next/headers";

import { dir } from "i18next";
import { TRPCReactProvider } from "~/trpc/react";
import React from "react";
import { languages } from "./i18n/settings";

export const metadata = {
	title: "H-Fasader",
	description: "H-Fasader nice windows",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		lang: string;
	};
}

export async function generateStaticParams() {
	return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
	children,
	params: { lang },
}: RootLayoutProps) {
	return (
		<html lang={lang} className="scroll-smooth" dir={dir(lang ?? "en")}>
			<body className={`${inter.className} scroll-smooth text-neutral-900`}>
				<TRPCReactProvider cookies={cookies().toString()}>
					{children}
				</TRPCReactProvider>
			</body>
		</html>
	);
}
