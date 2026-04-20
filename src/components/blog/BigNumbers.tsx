export type BigNumber = {
  value: string;
  label: React.ReactNode;
  accent?: boolean;
};

export function BigNumbers({ items }: { items: BigNumber[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] my-10 border border-white/10 bg-white/10">
      {items.map((n, i) => (
        <div
          key={i}
          className="bg-[#151616] p-7 text-center flex flex-col items-center"
        >
          <span
            className={`font-mono text-3xl md:text-[32px] font-medium leading-none mb-2 ${n.accent ? "text-[#27DFE9]" : "text-red-400"}`}
          >
            {n.value}
          </span>
          <span className="text-xs text-white/50 leading-snug">
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
