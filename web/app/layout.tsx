import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justice Index — Racial Bias in American Institutions",
  description:
    "Three data investigations exposing racial bias in American institutions. From the traffic stop to the courtroom to the bank. All public data. All open source.",
  openGraph: {
    title: "Justice Index",
    description:
      "Three data investigations exposing racial bias in American institutions.",
    url: "https://justice-index.org",
    siteName: "Justice Index",
    type: "website",
    images: [
      {
        url: "https://justice-index.org/og.png",
        width: 1200,
        height: 630,
        alt: "Justice Index — Same System. Different Outcomes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justice Index — Same System. Different Outcomes.",
    description:
      "Three data investigations exposing racial bias in American institutions. 15.3M loans, 7.9M stops, 1.3M cases analyzed.",
    images: ["https://justice-index.org/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
