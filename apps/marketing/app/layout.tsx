import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExecAIDay — Do more in less time.",
  description:
    "A personal AI-powered cockpit for C-level executives. In four afternoons we build you a tailor-made cockpit inside Claude Cowork — the capabilities of a chief of staff who knows your business, and four to eight hours back per week.",
  metadataBase: new URL("https://execaiday.com"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "ExecAIDay — Do more in less time.",
    description:
      "A personal AI-powered cockpit for C-level executives. Four afternoons. Tailor-made. The capabilities of a chief of staff.",
    type: "website",
    locale: "en_US",
    siteName: "ExecAIDay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
