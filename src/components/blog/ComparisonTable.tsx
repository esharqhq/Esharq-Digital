type CellTone = "default" | "bad" | "warn" | "good";

export type CompareRow = {
  label: string;
  left: { text: string; tone?: CellTone };
  right: { text: string; tone?: CellTone };
};

const cellTone: Record<CellTone, string> = {
  default: "text-white/55",
  bad: "text-red-400",
  warn: "text-orange-300",
  good: "text-[#27DFE9] font-medium",
};

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: CompareRow[];
}) {
  return (
    <div className="my-8 border border-white/10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white/[0.03] border-b border-white/10">
        {headers.map((h, i) => (
          <div
            key={i}
            className={`px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider ${i === 2 ? "text-[#27DFE9]" : "text-white/50"} ${i < 2 ? "md:border-r border-white/10" : ""} border-b md:border-b-0 border-white/10 last:border-b-0`}
          >
            {h}
          </div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-3 border-b last:border-b-0 border-white/10 hover:bg-white/[0.02] transition-colors"
        >
          <div className="px-5 py-3.5 text-[13px] text-[#C8ECED] border-b md:border-b-0 md:border-r border-white/10">
            {row.label}
          </div>
          <div
            className={`px-5 py-3.5 text-[13px] leading-snug border-b md:border-b-0 md:border-r border-white/10 ${cellTone[row.left.tone ?? "default"]}`}
          >
            {row.left.text}
          </div>
          <div
            className={`px-5 py-3.5 text-[13px] leading-snug ${cellTone[row.right.tone ?? "good"]}`}
          >
            {row.right.text}
          </div>
        </div>
      ))}
    </div>
  );
}
