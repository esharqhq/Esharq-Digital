type Tone = "money" | "time" | "energy";

export type JourneyCost = { tone: Tone; label: string };
export type JourneyTotal = { label: string; value: string; danger?: boolean };

const toneClass: Record<Tone, string> = {
  money:
    "bg-red-500/10 text-red-300 border-red-500/20",
  time: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  energy: "bg-white/5 text-white/50 border-white/10",
};

export function JourneyStep({
  label,
  title,
  desc,
  costs,
  totals,
}: {
  label: string;
  title: string;
  desc: string;
  costs: JourneyCost[];
  totals: JourneyTotal[];
}) {
  return (
    <div className="grid grid-cols-[56px_1fr] mb-[2px]">
      <div className="flex items-center justify-center border-r border-white/10 bg-white/[0.02]">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40"
          style={{ writingMode: "vertical-lr" }}
        >
          {label}
        </span>
      </div>
      <div className="p-6 md:p-7 border border-l-0 border-white/10 bg-white/[0.02]">
        <h3 className="text-[15px] font-semibold text-[#C8ECED] mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {costs.map((c, i) => (
            <span
              key={i}
              className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${toneClass[c.tone]}`}
            >
              {c.label}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-white/50">
          {totals.map((t, i) => (
            <span key={i}>
              {t.label}:{" "}
              <strong
                className={
                  t.danger ? "text-red-400" : "text-[#27DFE9]"
                }
              >
                {t.value}
              </strong>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
