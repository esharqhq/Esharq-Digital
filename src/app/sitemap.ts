import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://esharq.com";
  const languages = ["en", "uz", "ru"];
  const lastModified = new Date();

  const homeRoutes: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  const blogIndexRoutes: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${baseUrl}/${lang}/blog`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts();
  const postRoutes: MetadataRoute.Sitemap = languages.flatMap((lang) =>
    posts.map((post) => ({
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...homeRoutes,
    ...blogIndexRoutes,
    ...postRoutes,
  ];
}
