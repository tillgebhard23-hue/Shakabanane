import type { Metadata } from "next";
import localFont from "next/font/local";
import { de } from "@/content/de";
import "./globals.css";

/*
 * Fonts are self-hosted rather than linked from Google. Beyond the performance
 * win, embedding Google Fonts on a German site has been treated as a data
 * protection problem, and the briefing asks for freely available typefaces, not
 * for third party requests.
 */
const bricolage = localFont({
  src: "./fonts/bricolage-grotesque.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-bricolage",
});

const sourceSans = localFont({
  src: "./fonts/source-sans-3.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: de.meta.title,
  description: de.meta.description,
  openGraph: {
    title: de.meta.title,
    description: de.meta.description,
    locale: de.meta.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${bricolage.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
