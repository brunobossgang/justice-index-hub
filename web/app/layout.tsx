import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justice Index — Racial Bias in American Institutions",
  description:
    "Data-driven investigations exposing racial disparities across American institutions. 25+ million records analyzed.",
  metadataBase: new URL("https://justice-index.org"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Bruno Beckman" }],
  openGraph: {
    title: "Justice Index",
    description:
      "Data-driven investigations exposing racial disparities across American institutions. 25+ million records analyzed.",
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Justice Index",
                url: "https://justice-index.org",
                description:
                  "Data-driven investigations exposing racial disparities across American institutions. 25+ million records analyzed.",
                author: {
                  "@type": "Person",
                  name: "Bruno Beckman",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Justice Index",
                url: "https://justice-index.org",
                logo: "https://justice-index.org/og.png",
                sameAs: [
                  "https://x.com/Justice_Index",
                  "https://instagram.com/justiceindex",
                  "https://github.com/brunobossgang",
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="bg-slate-950 text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
