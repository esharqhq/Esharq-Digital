export type TimelineTag = { label: string; tone?: "default" | "bad" | "good" };

export type TimelineItem = {
  when: React.ReactNode;
  title: string;
  desc: string;
  tags: TimelineTag[];
  active?: boolean;
};

const tagTone: Record<"default" | "bad" | "good", string> = {
  default: "border-white/10 text-white/50",
  bad: "border-red-500/30 text-red-400",
  good: "border-[#27DFE9]/30 text-[#27DFE9]",
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="my-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-[90px_1fr] relative"
        >
          <div className="relative py-5 pr-4 text-right border-r border-white/10">
            <span className="font-mono text-[11px] text-white/50">
              {item.when}
            </span>
            <span
              className={`absolute right-[-4px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full ${item.active ? "bg-[#27DFE9] shadow-[0_0_10px_#27DFE9]" : "bg-white/15"}`}
            />
          </div>
          <div
            className={`py-5 pl-6 ${i !== items.length - 1 ? "border-b border-white/10" : ""}`}
          >
            <div className="text-sm md:text-[14px] font-medium text-[#C8ECED] mb-1">
              {item.title}
            </div>
            <div className="text-[13px] text-white/50 leading-relaxed mb-2.5">
              {item.desc}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t, j) => (
                <span
                  key={j}
                  className={`font-mono text-[10px] px-2 py-0.5 border rounded-sm ${tagTone[t.tone ?? "default"]}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
