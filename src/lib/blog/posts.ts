import type { Language } from "@/lib/dictionaries";
import TheRealCostOfAi from "@/components/blog/posts/TheRealCostOfAi";

export type BlogLocaleCopy = {
  title: string;
  excerpt: string;
};

type PostComponent = (props: {
  lang: Language;
}) => React.ReactNode | Promise<React.ReactNode>;

export type BlogPost = {
  slug: string;
  date: string; // ISO (yyyy-mm-dd)
  readingMinutes: number;
  languages: Language[]; // locales the body is actually translated into
  i18n: {
    en: BlogLocaleCopy;
    uz?: BlogLocaleCopy;
    ru?: BlogLocaleCopy;
  };
  component: PostComponent;
};

export const posts: BlogPost[] = [
  {
    slug: "the-real-cost-of-ai",
    date: "2026-04-20",
    readingMinutes: 9,
    languages: ["en"],
    i18n: {
      en: {
        title: "The Real Cost of AI — You have the tools. That's not the problem.",
        excerpt:
          "Every week we talk to business owners paying for ChatGPT, Canva, Midjourney, and three other tools — and still without consistent content or growth. The tools aren't broken. Something else is.",
      },
    },
    component: TheRealCostOfAi,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostCopy(post: BlogPost, lang: Language): BlogLocaleCopy {
  return post.i18n[lang] ?? post.i18n.en;
}
