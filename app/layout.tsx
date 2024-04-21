import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HarvestInitiative",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel='icon'
          href='/public/wheat-grain-svgrepo-com.svg'
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body >
        <Layout >
          {children}
        </Layout>
      </body>
    </html>
  );
}
