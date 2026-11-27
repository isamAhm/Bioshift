import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

// Fonts are loaded via CDN in globals.css as a fallback
// If you have stable internet, you can use next/font/google:
// import { Newsreader, Public_Sans } from "next/font/google";
// const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });
// const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public", display: "swap" });

export const metadata: Metadata = {
  title: "BioShift | Biometric workforce attendance and time management",
  description:
    "BioShift connects ZKTeco fingerprint, face and card terminals to a real-time dashboard so attendance, shifts and leave stay accurate and auditable.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
