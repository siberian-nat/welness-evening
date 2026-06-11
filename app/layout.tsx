import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wellness-evening.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wellness Evening · Amsterdam · 27.06",
  description:
    "Стретчинг, сауна с бассейном, карты и подарки — камерный вечер для девушек в Амстердаме.",
  openGraph: {
    title: "Wellness Evening · Amsterdam · 27.06",
    description:
      "Стретчинг, сауна с бассейном, карты и подарки — камерный вечер для девушек в Амстердаме",
    url: siteUrl,
    siteName: "Wellness Evening Amsterdam",
    images: [
      {
        url: "/images/wellness-hero.png",
        width: 1536,
        height: 1024,
        alt: "Wellness Evening Amsterdam: стретчинг, сауна и бассейн",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Evening · Amsterdam · 27.06",
    description:
      "Стретчинг, сауна с бассейном, карты и подарки — камерный вечер для девушек в Амстердаме.",
    images: ["/images/wellness-hero.png"],
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
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
