type BarColor = "red" | "amber" | "green";

export type BarRow = {
  label: string;
  value: string;
  width: number; // 0-100
  color: BarColor;
  caption?: string;
};

const barColor: Record<BarColor, string> = {
  red: "bg-red-500/25 text-red-300",
  amber: "bg-orange-500/20 text-orange-300",
  green: "bg-[#27DFE9]/20 text-[#27DFE9]",
};

export function BarChart({ rows }: { rows: BarRow[] }) {
  return (
    <div className="my-8 space-y-3">
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-[100px_1fr_70px] md:grid-cols-[160px_1fr_80px] items-center gap-3"
        >
          <div className="text-[11px] md:text-xs text-white/50 text-right">
            {r.label}
          </div>
          <div className="h-7 bg-white/[0.04] rounded-sm overflow-hidden relative">
            <div
              className={`h-full rounded-sm flex items-center pl-2.5 font-mono text-[11px] ${barColor[r.color]}`}
              style={{ width: `${r.width}%` }}
            >
              <span className="truncate">{r.caption}</span>
            </div>
          </div>
          <div className="font-mono text-xs md:text-[13px] text-[#C8ECED] text-right">
            {r.value}
          </div>
        </div>
      ))}
    </div>
  );
}
