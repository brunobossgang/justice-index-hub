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
