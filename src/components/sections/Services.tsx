"use client";

import { useState } from "react";
import {
  Target,
  Zap,
  Share2,
  Palette,
  Layers,
  Code,
  Smartphone,
  Shield,
  Cpu,
  Database,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "../SectionTitle";

const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  Zap,
  Share2,
  Palette,
  Layers,
  Code,
  Smartphone,
  Shield,
  Cpu,
  Database,
  Globe,
};

export const Services = ({ dict }: { dict: any }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="solutions"
      className="relative py-32 px-6 bg-[#030303] overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl w-full z-10">
        <SectionTitle
          title1={dict.title1}
          title2={dict.title2}
          description={dict.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {dict.items.map(({ id, title, icon, size, desc }: any, i: number) => {
            const isHovered = hoveredIndex === i;
            const IconComponent = ICON_MAP[icon] || Target;

            return (
              <div
                key={id}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${size} relative group p-[1px] overflow-hidden rounded-3xl bg-transparent transition-all duration-500`}
              >
                <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] opacity-10 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,#27DFE9_180deg,transparent_270deg,transparent_360deg)]" />

                <div className="relative h-full w-full bg-[#0a0a0a] rounded-[23px] p-10 z-10 flex flex-col justify-between overflow-hidden border border-white/5 group-hover:border-[#27DFE9]/30 transition-colors duration-500">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#27DFE9]/10 blur-[100px] rounded-full pointer-events-none" />

                  <div className="flex justify-between items-start relative z-20">
                    <div
                      className={`p-4 transition-all duration-500 rounded-2xl border ${
                        isHovered
                          ? "bg-[#27DFE9] text-black border-[#27DFE9] scale-110 shadow-[0_0_20px_#27DFE9]"
                          : "bg-white/5 text-[#27DFE9] border-white/10"
                      }`}
                    >
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-700 tracking-[0.2em]">
                      [{id}]
                    </span>
                  </div>

                  <div className="mt-12 relative z-20">
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter transition-all duration-500 group-hover:text-[#27DFE9]">
                      {title}
                    </h3>
                    <p className="text-[13px] text-gray-500 mt-4 leading-relaxed tracking-wide font-medium group-hover:text-gray-300 transition-colors duration-500">
                      {desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-all duration-500 relative z-20">
                    <span className="text-[8px] font-black text-[#27DFE9] uppercase tracking-[0.3em]">
                      {dict.activeTag}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className={`text-[#27DFE9] transition-transform ${isHovered ? "translate-x-1 -translate-y-1" : ""}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
