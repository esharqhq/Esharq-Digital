import type { Language } from "@/lib/dictionaries";
import TheRealCostOfAi from "@/components/blog/posts/TheRealCostOfAi";
import RealtorAiLeadResponse from "@/components/blog/posts/RealtorAiLeadResponse";

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
  {
    slug: "realtor-ai-lead-response",
    date: "2026-04-24",
    readingMinutes: 8,
    languages: ["en", "uz", "ru"],
    i18n: {
      en: {
        title:
          "You're losing deals in your sleep — the realtor's guide to AI lead response",
        excerpt:
          "78% of buyers work with the first agent who responds. The average agent takes 15 hours. Here's how top-producing realtors close 3× more deals — without working 3× harder.",
      },
      uz: {
        title:
          "Siz tinch uxlayotganda mijozlar raqibingizga ketyapti — rieltorlar uchun AI lid javobi bo'yicha qo'llanma",
        excerpt:
          "Xaridorlarning 78%i birinchi javob bergan agent bilan ishlaydi. O'rtacha agent 15 soat ichida javob beradi. Yuqori natijali rieltorlar 3× ko'proq bitim yopadi — 3× ko'p ishlamasdan.",
      },
      ru: {
        title:
          "Вы теряете сделки пока спите — гид риелтора по AI-ответу на лиды",
        excerpt:
          "78% покупателей работают с первым ответившим агентом. Средний агент отвечает 15 часов. Топовые риелторы закрывают в 3× больше сделок — не работая в 3× больше.",
      },
    },
    component: RealtorAiLeadResponse,
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
