import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Oferta — Wielki Format | Pełna widoczność online",
  description:
    "Oferta współpracy przygotowana dla Wielkiego Formatu. Trzy poziomy ekspansji widoczności w internecie i budowy marki osobistej.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Oferta — Wielki Format",
    description: "Pełna widoczność online i marka osobista Króla Artura.",
    type: "website",
    locale: "pl_PL",
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
