export type ToolCell = {
  name: string;
  price: string;
  reality: React.ReactNode;
};

export function ToolGrid({ items }: { items: ToolCell[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] my-8 border border-white/10 bg-white/10">
      {items.map((t, i) => (
        <div key={i} className="bg-[#151616] p-5 md:p-6">
          <div className="font-mono text-xs text-[#27DFE9] uppercase tracking-wider mb-2">
            {t.name}
          </div>
          <div className="text-xl md:text-[22px] font-semibold text-[#C8ECED] mb-2">
            {t.price}
          </div>
          <div className="text-xs text-white/50 leading-relaxed">
            {t.reality}
          </div>
        </div>
      ))}
    </div>
  );
}
