import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { site } from "@/data/site";
import "./globals.css";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const siteUrl = configuredSiteUrl || (vercelProductionHost ? `https://${vercelProductionHost}` : "http://localhost:3000");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  applicationName: "ROBER.",
  authors: [{ name: "Rober" }],
  creator: "Rober",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: site.title,
    description: site.description,
    siteName: "ROBER.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ROBER. — I make things for the internet." }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#proyectos">Saltar a los proyectos</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
