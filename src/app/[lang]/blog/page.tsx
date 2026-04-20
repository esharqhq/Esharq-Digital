import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import type { Language } from "@/lib/dictionaries";
import SectionTitle from "@/components/SectionTitle";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts, getPostCopy } from "@/lib/blog/posts";

const locales = ["en", "uz", "ru"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Language);
  const title = `${dict.blog.title1} ${dict.blog.title2}`;
  return {
    title,
    description: dict.blog.description,
    alternates: {
      canonical: `/${lang}/blog`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/blog`])),
    },
    openGraph: {
      title,
      description: dict.blog.description,
      url: `/${lang}/blog`,
      type: "website",
    },
  };
}

function formatDate(iso: string, lang: Language) {
  const localeMap: Record<Language, string> = {
    en: "en-US",
    uz: "uz-UZ",
    ru: "ru-RU",
  };
  return new Date(iso).toLocaleDateString(localeMap[lang] ?? "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Language);
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#151616] pt-40 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title1={dict.blog.title1}
          title2={dict.blog.title2}
          description={dict.blog.description}
        />

        {posts.length === 0 ? (
          <p className="text-center text-white/40 font-mono text-xs uppercase tracking-widest">
            {dict.blog.emptyState}
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => {
              const copy = getPostCopy(post, lang as Language);
              const isEnglishOnly =
                !post.languages.includes(lang as Language) && lang !== "en";
              return (
                <BlogCard
                  key={post.slug}
                  href={`/${lang}/blog/${post.slug}`}
                  title={copy.title}
                  excerpt={copy.excerpt}
                  date={formatDate(post.date, lang as Language)}
                  readingMinutes={post.readingMinutes}
                  minuteReadLabel={dict.blog.minuteRead}
                  readArticleLabel={dict.blog.readArticle}
                  englishBadge={isEnglishOnly ? dict.blog.englishBadge : undefined}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
