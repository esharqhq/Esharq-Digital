export default function SectionTitle({
  title1,
  title2,
  description,
}: {
  title1: string;
  title2: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center mb-32 select-none">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#27DFE9] rotate-45 opacity-20 animate-pulse" />
          <div className="w-2 h-2 bg-[#27DFE9] rotate-45 shadow-[0_0_10px_#27DFE9]" />
        </div>
      </div>

      <h2 className="flex flex-col items-center mb-8">
        <span className="text-6xl md:text-[110px] font-black text-white uppercase italic tracking-tighter leading-[0.85] drop-shadow-2xl text-center">
          {title1}{" "}
          <span className="text-[#27DFE9]">{title2.split(" ")[0]}</span>
        </span>

        <span className="text-6xl md:text-[110px] font-black uppercase italic tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#1DAEB6] to-[#0D5B60] block text-center">
          {title2.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      {description && (
        <div className="max-w-2xl text-center relative px-6">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide font-medium uppercase italic opacity-80">
            {description}
          </p>
          <div className="h-[1px] w-24 bg-[#27DFE9]/30 mx-auto mt-6 shadow-[0_0_8px_#27DFE9]" />
        </div>
      )}

      {!description && (
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#27DFE9]/50 to-transparent mt-4" />
      )}
    </div>
  );
}
