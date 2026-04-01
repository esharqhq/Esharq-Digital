
export const Footer = ({ dict }: { dict: any }) => {
  return (
    <footer className="relative py-40 px-6 bg-[#080808] overflow-hidden border-t border-white/5">
      {/* Background glyphic text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <h2
          className="text-[22vw] font-[1000] uppercase tracking-tighter leading-none italic"
          style={{
            color: '#0a0a0a',
            textShadow: '2px 2px 3px rgba(255,255,255,0.05), -2px -2px 3px rgba(0,0,0,0.9)',
            WebkitTextStroke: '1px rgba(255,255,255,0.03)',
          }}
        >
          ESHARQ
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 flex flex-col items-center">
        <div className="text-center mb-32 space-y-4">
          <div className="flex items-center justify-center gap-3 text-[#27DFE9]/40 mb-2">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#27DFE9]/40" />
            <span className="text-[10px] uppercase tracking-[0.8em] font-black">{dict.tag}</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#27DFE9]/40" />
          </div>
          <p className="text-white/30 text-xs font-mono uppercase tracking-widest max-w-md mx-auto leading-relaxed">
            {dict.desc}
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-10">
            {['Instagram', 'Telegram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[9px] text-gray-700 font-black uppercase tracking-[0.4em] hover:text-[#27DFE9] transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="text-right">
            <p className="text-[#C8ECED]/10 text-[9px] font-bold uppercase tracking-[0.5em] mb-2">
              &copy; {new Date().getFullYear()} {dict.right2}
            </p>
            <p className="text-[#27DFE9]/20 text-[8px] font-black uppercase tracking-[0.4em]">
              {dict.right1}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-10 hidden lg:block">
        <p className="text-[8px] font-mono text-white/40 uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
          ESHARQ_SYSTEM_CORE
        </p>
      </div>
    </footer>
  )
}
