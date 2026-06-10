import type { Metadata } from "next";
import { Merriweather, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { IconSprite } from "@/components/IconSprite";
import { GovBar } from "@/components/GovBar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeInit } from "@/components/ThemeInit";

// Headings — Merriweather (serif)
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// Body / normal text — Source Sans Pro (a.k.a. Source Sans 3)
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MEHRD — Ministry of Education & Human Resources Development",
  description:
    "The Ministry of Education & Human Resources Development supports students, teachers and families across the Solomon Islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" data-accent="blue" className={`${merriweather.variable} ${sourceSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeInit />
      </head>
      <body>
        <IconSprite />
        <a href="#main" className="skip">Skip to main content</a>
        <GovBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
