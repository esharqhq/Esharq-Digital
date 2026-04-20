export type PositionCell = {
  tag: string;
  tone: "bad" | "good";
  items: string[];
};

export function PositionGrid({ cells }: { cells: [PositionCell, PositionCell] }) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-[1px] border border-white/10 bg-white/10">
      {cells.map((cell, i) => {
        const highlight = cell.tone === "good";
        return (
          <div
            key={i}
            className={`p-6 md:p-7 ${highlight ? "bg-[#27DFE9]/[0.04] border border-[#27DFE9]/15 -m-[1px]" : "bg-[#151616]"}`}
          >
            <span
              className={`inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm mb-3 ${highlight ? "bg-[#27DFE9]/15 text-[#27DFE9]" : "bg-red-500/10 text-red-400"}`}
            >
              {cell.tag}
            </span>
            <ul>
              {cell.items.map((item, j) => (
                <li
                  key={j}
                  className={`flex items-start gap-2.5 py-2 text-[13px] leading-snug border-b last:border-b-0 border-white/10 ${highlight ? "text-[#C8ECED]" : "text-white/55"}`}
                >
                  <span
                    className={`mt-0.5 text-[11px] shrink-0 ${highlight ? "text-[#27DFE9]" : "text-red-400"}`}
                  >
                    {highlight ? "✓" : "✕"}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
