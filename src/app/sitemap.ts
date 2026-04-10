import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://esharq.com";
  const languages = ["en", "uz", "ru"];
  const lastModified = new Date();

  const routes = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...routes,
  ];
}
