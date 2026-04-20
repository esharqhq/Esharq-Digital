import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import type { Language } from "@/lib/dictionaries";
import { getAllPosts, getPost, getPostCopy } from "@/lib/blog/posts";

const locales = ["en", "uz", "ru"] as const;

export function generateStaticParams() {
  const posts = getAllPosts();
  return locales.flatMap((lang) =>
    posts.map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const copy = getPostCopy(post, lang as Language);

  return {
    title: copy.title,
    description: copy.excerpt,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/blog/${slug}`]),
      ),
    },
    openGraph: {
      title: copy.title,
      description: copy.excerpt,
      url: `/${lang}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dict = await getDictionary(lang as Language);
  const PostBody = post.component;

  return (
    <main className="min-h-screen bg-[#151616] pt-28 md:pt-32 px-6">
      <div className="max-w-[780px] mx-auto">
        <div className="mb-2 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-white/40">
          <Link
            href={`/${lang}/blog`}
            className="hover:text-[#27DFE9] transition-colors"
          >
            {dict.blog.backToBlog}
          </Link>
          <Link
            href={`/${lang}`}
            className="hover:text-[#27DFE9] transition-colors"
          >
            {dict.blog.backToHome}
          </Link>
        </div>

        <PostBody lang={lang as Language} />
      </div>
    </main>
  );
}
