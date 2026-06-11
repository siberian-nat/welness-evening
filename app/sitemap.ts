import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://wellness-evening.vercel.app";

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
