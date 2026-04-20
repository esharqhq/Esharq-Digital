export function Mirror({
  headline,
  children,
}: {
  headline: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-10 bg-white/[0.02] border border-white/10 p-8 md:p-10">
      <h3 className="text-2xl md:text-[26px] italic leading-tight mb-5 text-[#C8ECED]">
        {headline}
      </h3>
      <div className="space-y-4 text-[15px] text-white/55 leading-[1.8]">
        {children}
      </div>
    </div>
  );
}
