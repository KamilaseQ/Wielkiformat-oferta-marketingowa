import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const prodHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = prodHost ? `https://${prodHost}` : "http://localhost:3000";

const ogTitle = "Oferta — Wielki Format";
const ogDescription = "Pełna widoczność online i marka osobista Króla Artura.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Oferta — Wielki Format | Pełna widoczność online",
  description:
    "Oferta współpracy przygotowana dla Wielkiego Formatu. Trzy poziomy ekspansji widoczności w internecie i budowy marki osobistej.",
  robots: { index: false, follow: false },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
