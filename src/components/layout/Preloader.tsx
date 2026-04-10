"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CodeXml,
  MousePointer2,
  Palette,
  Sparkles,
  Cpu,
  BarChart3,
  Database,
  PenTool,
  Activity,
  Globe,
  ShieldCheck,
  Zap,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Sahifa skrolini to'xtatish
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        // 1. Markaziy kontentni tezda yo'qotish
        gsap.to(".loader-content", {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        // 2. Eshiklarni ochish (Tezroq va silliqroq: 0.8s)
        const doorTl = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
            document.body.style.overflow = "";

            // ScrollTrigger pozitsiyalarni qayta hisoblash
            window.scrollTo(0, 0);
            setTimeout(() => ScrollTrigger.refresh(true), 100);
          },
        });

        doorTl.to(
          ".door-left",
          { xPercent: -101, duration: 0.8, ease: "expo.inOut" },
          0.1,
        );
        doorTl.to(
          ".door-right",
          { xPercent: 101, duration: 0.8, ease: "expo.inOut" },
          0.1,
        );
      },
    });

    // Progress bar animatsiyasi (4 soniyadan 1.5 soniyaga tushirildi)
    tl.to(
      { val: 0 },
      {
        val: 100,
        duration: 1.5,
        ease: "power1.inOut",
        onUpdate: function () {
          setProgress(Math.round(this.targets()[0].val));
        },
      },
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] font-sans select-none overflow-hidden bg-transparent">
      {/* ESHIKLAR */}
      <div className="door-left fixed inset-y-0 left-0 w-1/2 bg-[#050505] border-r border-[#27DFE9]/30 z-40" />
      <div className="door-right fixed inset-y-0 right-0 w-1/2 bg-[#050505] border-l border-[#27DFE9]/30 z-40" />

      {/* ASOSIY KONTENT */}
      <div className="loader-content relative z-50 w-full h-full flex flex-col justify-center items-center">
        <div className="absolute inset-0 flex flex-col justify-center gap-6 rotate-[-4deg] scale-110 pointer-events-none opacity-40">
          <div className="flex gap-4 animate-[marqueeRev_35s_linear_infinite] whitespace-nowrap">
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<BarChart3 size={18} />}
              label="BigData_Sync"
              type="data"
            />
            <OrbCard
              icon={<Cpu size={18} />}
              label="AI_Compute"
              status="98.2%"
            />
            <OrbCard
              icon={<Zap size={18} />}
              label="Fast_Deploy"
              status="Ready"
            />
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<BarChart3 size={18} />}
              label="BigData_Sync"
              type="data"
            />
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<BarChart3 size={18} />}
              label="BigData_Sync"
              type="data"
            />
            <OrbCard
              icon={<Cpu size={18} />}
              label="AI_Compute"
              status="98.2%"
            />
            <OrbCard
              icon={<Zap size={18} />}
              label="Fast_Deploy"
              status="Ready"
            />
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<BarChart3 size={18} />}
              label="BigData_Sync"
              type="data"
            />
            <OrbCard
              icon={<Palette size={18} />}
              label="Vector_Lab"
              type="design"
            />
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<Cpu size={18} />}
              label="AI_Compute"
              status="98.2%"
            />
          </div>

          <div className="flex gap-4 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            <OrbCard
              icon={<ShieldCheck size={18} />}
              label="Auth_Guard"
              status="Verified"
            />
            <OrbCard
              icon={<CodeXml size={18} />}
              label="Neural_Coder"
              type="code"
            />
            <OrbCard
              icon={<Palette size={18} />}
              label="Vector_Lab"
              type="design"
            />

            <OrbCard
              icon={<Globe size={18} />}
              label="Edge_Node"
              status="12ms"
            />
            <OrbCard
              icon={<ShieldCheck size={18} />}
              label="Auth_Guard"
              status="Verified"
            />
            <OrbCard
              icon={<CodeXml size={18} />}
              label="Neural_Coder"
              type="code"
            />
            <OrbCard
              icon={<Palette size={18} />}
              label="Vector_Lab"
              type="design"
            />
          </div>

          <div className="flex gap-4 animate-[marqueeRev_35s_linear_infinite] whitespace-nowrap">
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<BarChart3 size={18} />}
              label="BigData_Sync"
              type="data"
            />
            <OrbCard
              icon={<Cpu size={18} />}
              label="AI_Compute"
              status="98.2%"
            />
            <OrbCard
              icon={<Zap size={18} />}
              label="Fast_Deploy"
              status="Ready"
            />
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<BarChart3 size={18} />}
              label="BigData_Sync"
              type="data"
            />
            <OrbCard
              icon={<Cpu size={18} />}
              label="AI_Compute"
              status="98.2%"
            />
            <OrbCard
              icon={<Zap size={18} />}
              label="Fast_Deploy"
              status="Ready"
            />
            <OrbCard
              icon={<MousePointer2 size={18} />}
              label="UX_Engine"
              type="ui"
            />
            <OrbCard
              icon={<BarChart3 size={18} />}
              label="BigData_Sync"
              type="data"
            />
            <OrbCard
              icon={<Palette size={18} />}
              label="Vector_Lab"
              type="design"
            />
            <OrbCard
              icon={<BarChart3 size={18} />}
              label="BigData_Sync"
              type="data"
            />
            <OrbCard
              icon={<Palette size={18} />}
              label="Vector_Lab"
              type="design"
            />
          </div>
        </div>

        {/* MARKAZIY FOIZ KO'RSATKICHI */}
        <div className="relative z-[60] flex flex-col items-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Glow effekt */}
            <div className="absolute inset-0 rounded-full bg-[#27DFE9]/20 blur-[50px] animate-pulse" />

            <div className="relative w-56 h-56 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center shadow-2xl">
              <div className="flex items-baseline">
                <span className="text-7xl font-black text-white italic tracking-tighter">
                  {progress}
                </span>
                <span className="text-xl font-bold text-[#27DFE9] ml-1">%</span>
              </div>
              <div className="mt-4 px-3 py-1 bg-[#27DFE9]/10 border border-[#27DFE9]/20 rounded-md">
                <span className="text-[9px] font-mono text-[#27DFE9] tracking-[0.2em] uppercase animate-pulse">
                  System Booting...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRev {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

// Yordamchi komponent: Kartalar
const OrbCard = ({ icon, label, status, type }: any) => (
  <div className="min-w-[250px] p-4 rounded-xl bg-[#111] border border-white/10 shadow-lg">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-lg bg-[#27DFE9]/10 text-[#27DFE9]">
        {icon}
      </div>
      <span className="text-[10px] font-mono text-white/90 tracking-wider uppercase font-bold">
        {label}
      </span>
    </div>
    <div className="h-16 flex items-center justify-center bg-black/40 rounded-lg border border-white/5 p-3 overflow-hidden">
      {type === "code" && (
        <div className="w-full font-mono text-[10px] text-[#27DFE9] overflow-hidden whitespace-nowrap animate-[typing_1.5s_steps(20)_infinite]">
          {">"} exec_init_core()
        </div>
      )}
      {type === "ui" && (
        <div className="w-full h-1 bg-[#27DFE9]/20 rounded relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-[#27DFE9] w-1/2 animate-[marquee_1.5s_linear_infinite]" />
        </div>
      )}
      {type === "design" && (
        <PenTool size={16} className="text-[#27DFE9] animate-pulse" />
      )}
      {type === "data" && (
        <div className="flex gap-1 items-end h-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1.5 bg-[#27DFE9]/50 animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                height: `${40 + Math.random() * 60}%`,
              }}
            />
          ))}
        </div>
      )}
      {!type && (
        <span className="text-[#27DFE9]/80 font-mono text-[10px] tracking-widest">
          {status}
        </span>
      )}
    </div>
  </div>
);
