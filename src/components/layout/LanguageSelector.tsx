"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "uz", label: "O'zbek" },
  { code: "ru", label: "Русский" },
];

export const LanguageSelector = ({ lang }: { lang: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang: string) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/"));
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
      >
        <Globe
          size={14}
          className="text-[#27DFE9] group-hover:rotate-12 transition-transform"
        />
        <span className="text-[10px] font-black uppercase tracking-widest text-[#C8ECED]/60 group-hover:text-[#27DFE9]">
          {lang}
        </span>
        <ChevronDown
          size={10}
          className={`text-[#27DFE9]/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[110%] right-0 min-w-[120px] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-[9999]"
          >
            <div className="flex flex-col p-1">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => handleLanguageChange(item.code)}
                  className={`px-4 py-2.5 text-[10px] font-bold text-left uppercase tracking-wider transition-all rounded-lg
                    ${
                      lang === item.code
                        ? "bg-[#27DFE9]/10 text-[#27DFE9]"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
