import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wellness-evening.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wellness Evening Amsterdam | Stretch & Sauna Event June 27",
  description:
    "An intimate wellness evening in Amsterdam with guided stretching, private sauna, pool access, and nourishing refreshments. Only 10 places available.",
  openGraph: {
    title: "Wellness Evening Amsterdam",
    description:
      "Guided stretch, private sauna, pool access, and wellness refreshments on June 27 in Amsterdam.",
    url: siteUrl,
    siteName: "Wellness Evening Amsterdam",
    images: [
      {
        url: "/images/wellness-clouds.jpg",
        width: 1680,
        height: 1869,
        alt: "Soft evening clouds for Wellness Evening Amsterdam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Evening Amsterdam",
    description:
      "A restorative stretch and sauna evening in Amsterdam. June 27, 10 places.",
    images: ["/images/wellness-clouds.jpg"],
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
      <body>{children}</body>
    </html>
  );
}
