"use client";

import { useRef, useState, useEffect, Fragment } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Zap, User, Network } from "lucide-react";
import type { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const HolographicFrame = ({
  children,
  color = "#27DFE9",
  glow = "rgba(39, 223, 233, 0.4)",
}: {
  children: ReactNode;
  color?: string;
  glow?: string;
}) => (
  <div className="relative p-[2px] group overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
    <div
      className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"
      style={{ borderColor: color, boxShadow: `0 0 25px ${glow}` }}
    />
    <div
      className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"
      style={{ borderColor: color, boxShadow: `0 0 25px ${glow}` }}
    />
    <div className="relative bg-[#0d0e0e]/95 border border-white/5 backdrop-blur-3xl p-10 rounded-2xl">
      {children}
    </div>
  </div>
);

export const WhyAI = ({ dict }: { dict: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [matrixLines, setMatrixLines] = useState<
    { id: number; code: string }[]
  >([]);

  useEffect(() => {
    setMatrixLines(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        code: `PROCESS_EXECUTING_${Math.random().toString(36).substring(7).toUpperCase()}`,
      })),
    );
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".neural-laser-solid",
        {
          strokeDasharray: "0, 1000",
          strokeDashoffset: 0,
        },
        {
          strokeDasharray: "150, 1000",
          strokeDashoffset: -1000,
          duration: 3,
          repeat: -1,
          ease: "linear",
        },
      );

      gsap.to(".bg-glow-ball", {
        x: "random(-150, 150)",
        y: "random(-150, 150)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".comparison-row-old, .comparison-row-new", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#060606] py-32 px-6 overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px] opacity-[0.1] pointer-events-none" />
      <div className="bg-glow-ball absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#27DFE9]/10 blur-[150px] rounded-full" />
      <div className="bg-glow-ball absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#026F84]/20 blur-[180px] rounded-full" />

      <div className="absolute inset-0 opacity-[0.03] text-[10px] font-mono text-[#27DFE9] overflow-hidden select-none pointer-events-none p-4">
        {matrixLines.map(({ id, code }) => (
          <p key={id} className="whitespace-nowrap leading-none mb-1">
            {code} // STABLE_CONNECTION // NEURAL_LINK_V4 // DEPLOYMENT_READY
          </p>
        ))}
      </div>

      <SectionTitle title1={dict.title1} title2={dict.title2} />

      <div className="w-full max-w-7xl relative z-10">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
          viewBox="0 0 1200 800"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            className="neural-laser-solid"
            d="M600 400 L250 250"
            stroke="#005F7E"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />

          <path
            className="neural-laser-solid"
            d="M600 400 L950 200"
            stroke="#27DFE9"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-5 opacity-70 hover:opacity-100 transition-all duration-700">
            <HolographicFrame color="#555" glow="rgba(255,255,255,0.05)">
              <div className="flex items-center gap-3 mb-6 text-gray-400 font-mono text-[10px] tracking-widest">
                <User size={16} className="text-gray-500" />
                <span className="border-b border-gray-700 pb-1 uppercase">
                  {dict.oldWay}
                </span>
              </div>

              <h3 className="text-3xl font-black text-gray-400 uppercase italic mb-6 leading-tight">
                {dict.oldWay.split(" ").slice(0, -1).join(" ")} <br />
                <span className="text-gray-600 font-black">
                  {dict.oldWay.split(" ").pop()}
                </span>
              </h3>

              <div className="space-y-4">
                {dict.comparison.map((item: any, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-gray-600 mt-2 shrink-0" />
                    <p className="text-[13px] text-gray-500 uppercase tracking-widest leading-relaxed">
                      {item.old}
                    </p>
                  </div>
                ))}

                <div className="w-full h-[1px] bg-gray-800 relative mt-4">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-gray-600" />
                </div>

                <div className="flex items-center gap-4 text-[9px] text-gray-600 font-mono">
                  <span>STATUS: LIMITED</span>
                  <span>ERROR_RATE: HIGH</span>
                </div>
              </div>
            </HolographicFrame>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#27DFE9] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="w-20 h-20 rounded-2xl bg-[#0a0a0a] border border-[#27DFE9]/50 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700">
                <Brain
                  className="text-[#27DFE9] -rotate-45 group-hover:-rotate-90 transition-transform duration-700"
                  size={32}
                />
              </div>
            </div>
            <div className="h-24 w-[1px] bg-gradient-to-b from-[#27DFE9] to-transparent mt-8" />
          </div>

          <div className="lg:col-span-5">
            <HolographicFrame color="#27DFE9" glow="rgba(39, 223, 233, 0.5)">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 text-[#27DFE9] font-mono text-[10px] tracking-[0.3em] mb-2 uppercase">
                    <Zap size={14} className="animate-pulse" /> {dict.newWay}
                  </div>
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    {dict.newWay.split(" ").slice(0, -1).join(" ")} <br />
                    <span className="text-[#27DFE9] font-black">
                      {dict.newWay.split(" ").pop()}
                    </span>
                  </h3>
                </div>
                <div className="bg-[#27DFE9]/10 p-2 border border-[#27DFE9]/20 rounded-lg">
                  <Network className="text-[#27DFE9]" size={20} />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {dict.comparison.map((item: any, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <Zap size={12} className="text-[#27DFE9] mt-1 shrink-0" />
                    <p className="text-[13px] text-white uppercase tracking-wider leading-relaxed font-medium">
                      {item.new}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-[#27DFE9]/30 transition-colors">
                  <div className="text-[9px] text-gray-400 uppercase mb-1">
                    Efficiency
                  </div>
                  <div className="text-3xl font-black text-[#27DFE9]">
                    +300%
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-[#27DFE9]/30 transition-colors">
                  <div className="text-[9px] text-gray-400 uppercase mb-1">
                    Scale
                  </div>
                  <div className="text-3xl font-black text-white italic text-right">
                    10x
                  </div>
                </div>
              </div>
            </HolographicFrame>
          </div>
        </div>

        <div className="text-center mt-6 mb-24">
          <p className="text-xl md:text-1xl text-[#C8ECED]/80 font-medium italic">
            <span className="text-[#27DFE9] font-bold not-italic mr-2">
              Supporting line:
            </span>
            {dict.supportingLine}
          </p>
        </div>

        <div className="absolute -bottom-40 left-0 w-full text-center opacity-[0.02] pointer-events-none z-0">
          <h3 className="text-[20rem] font-black tracking-tighter uppercase leading-none text-[#27DFE9]">
            ESHARQ
          </h3>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            left: -30%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
};
