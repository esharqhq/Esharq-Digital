export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10 text-[#27DFE9]">
      <div className="w-6 h-[1px] bg-[#27DFE9]" />
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-[1px] bg-white/10" />
    </div>
  );
}
