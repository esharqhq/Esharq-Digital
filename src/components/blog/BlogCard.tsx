import Link from "next/link";

export function BlogCard({
  href,
  title,
  excerpt,
  date,
  readingMinutes,
  minuteReadLabel,
  readArticleLabel,
  englishBadge,
}: {
  href: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  minuteReadLabel: string;
  readArticleLabel: string;
  englishBadge?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#27DFE9]/30 transition-all"
    >
      <div className="flex items-center justify-between gap-4 mb-6 font-mono text-[11px] uppercase tracking-wider text-white/40">
        <div className="flex items-center gap-3">
          <span>{date}</span>
          <span className="text-white/20">·</span>
          <span>
            {readingMinutes} {minuteReadLabel}
          </span>
        </div>
        {englishBadge && (
          <span className="px-2 py-0.5 border border-[#27DFE9]/20 text-[#27DFE9] rounded-sm text-[10px]">
            {englishBadge}
          </span>
        )}
      </div>

      <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight leading-tight text-[#C8ECED] mb-4 group-hover:text-[#27DFE9] transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-white/55 leading-relaxed mb-8 max-w-2xl">
        {excerpt}
      </p>

      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#27DFE9]">
        <span>{readArticleLabel}</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>

      <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#27DFE9]/0 group-hover:border-[#27DFE9]/40 transition-colors" />
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#27DFE9]/0 group-hover:border-[#27DFE9]/40 transition-colors" />
    </Link>
  );
}
