import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "dClaude TradePilot | Multi-Asset Trading Bot",
  description:
    "dClaude TradePilot is a premium multi-asset trading bot for Crypto, Forex, Nasdaq, and global indices with disciplined risk controls."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}



