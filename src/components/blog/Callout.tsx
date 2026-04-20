export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 border-l-2 border-[#27DFE9] bg-[#27DFE9]/[0.04] px-7 py-5">
      <p className="text-lg md:text-xl italic leading-relaxed text-[#C8ECED]">
        {children}
      </p>
    </div>
  );
}
