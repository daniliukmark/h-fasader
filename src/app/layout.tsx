import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { dir } from "i18next";
import { TRPCReactProvider } from "~/trpc/react";
import React from "react";
import { languages } from "./i18n/settings";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Neonita - Neon store",
  description: "Neonita - Neon store",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayout {
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
}: RootLayout) {
  return (
    <html lang={lang} dir={dir(lang ?? "en")}>
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
