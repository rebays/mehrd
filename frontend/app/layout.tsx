import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { IconSprite } from "./components/IconSprite";
import { GovBar } from "./components/GovBar";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ThemeInit } from "./components/ThemeInit";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" data-theme="light" data-accent="blue" className={`${jakarta.variable} ${plexMono.variable}`}>
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
