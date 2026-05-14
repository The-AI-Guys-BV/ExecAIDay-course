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
  title: "ExecAIDay — An AI cockpit, built around your actual work.",
  description:
    "A personal install programme from The AI Guys. In four afternoons we build you a personalized cockpit inside Claude Cowork — tailored to your week, your inbox, your meetings, your decisions.",
  metadataBase: new URL("https://execaiday.com"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "ExecAIDay — An AI cockpit, built around your actual work.",
    description:
      "A personal install programme from The AI Guys. Four afternoons. Your real work. A system built around it.",
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
