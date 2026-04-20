export function BlogProse({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg leading-[1.8] text-[#C8ECED] mb-5">
      {children}
    </p>
  );
}

export function BlogStrong({ children }: { children: React.ReactNode }) {
  return <strong className="text-[#27DFE9] font-semibold">{children}</strong>;
}

export function BlogEm({ children }: { children: React.ReactNode }) {
  return <em className="italic text-[#C8ECED]">{children}</em>;
}
