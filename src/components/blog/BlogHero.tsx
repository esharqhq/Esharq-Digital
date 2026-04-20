export function BlogHero({
  eyebrow,
  title,
  subtitle,
  meta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  meta?: React.ReactNode;
}) {
  return (
    <div className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-white/10">
      <div className="flex items-center gap-2.5 mb-7 text-[#27DFE9]">
        <div className="w-6 h-[1px] bg-[#27DFE9]" />
        <span className="font-mono text-[11px] uppercase tracking-[0.12em]">
          {eyebrow}
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-[58px] font-black italic leading-[1.05] tracking-tight mb-7 text-[#C8ECED] uppercase">
        {title}
      </h1>
      <p className="text-base md:text-[17px] text-white/55 max-w-xl leading-[1.75] mb-8">
        {subtitle}
      </p>
      {meta && (
        <div className="flex items-center gap-2.5 text-white/40">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#27DFE9] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#27DFE9]" />
          </span>
          <span className="font-mono text-xs">{meta}</span>
        </div>
      )}
    </div>
  );
}
