"use client";

import "./globals.css";
import "./loading.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Head from "next/head";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/assets/logo.png" />
        <title>Sedekahku</title>
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
