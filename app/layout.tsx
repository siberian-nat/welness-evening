import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wellness-evening.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wellness Evening · Amsterdam · 11.07",
  description:
    "Stretching, a sauna with a pool, cards and gifts — an intimate evening for women in Amsterdam.",
  openGraph: {
    title: "Wellness Evening · Amsterdam · 11.07",
    description:
      "Stretching, a sauna with a pool, cards and gifts — an intimate evening for women in Amsterdam",
    url: siteUrl,
    siteName: "Wellness Evening Amsterdam",
    images: [
      {
        url: "/images/wellness-hero.jpg",
        width: 1536,
        height: 1024,
        alt: "Wellness Evening Amsterdam: stretching, sauna and pool",
      },
    ],
    locale: "en_US",
    alternateLocale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Evening · Amsterdam · 11.07",
    description:
      "Stretching, a sauna with a pool, cards and gifts — an intimate evening for women in Amsterdam.",
    images: ["/images/wellness-hero.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
