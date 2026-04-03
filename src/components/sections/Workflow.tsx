"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export const Workflow = ({ dict }: { dict: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".laser-line", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      const steps = gsap.utils.toArray(".workflow-step");
      steps.forEach((step: any) => {
        gsap.to(step, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(step.querySelector(".step-node"), {
          backgroundColor: "#27DFE9",
          boxShadow: "0 0 20px rgba(39, 223, 233, 0.8)",
          scale: 1.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: step,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#050505] overflow-hidden flex flex-col items-center"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#026F84]/10 blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#27DFE9]/5 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-5xl px-6 relative z-10">
        <div className="text-center mb-24">
          <SectionTitle title1={dict.title1} title2={dict.title2} />
        </div>

        <div className="relative w-full max-w-4xl mx-auto pl-2 md:pl-0">
          <div className="absolute left-4 sm:left-8 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/5 rounded-full" />
          <div className="laser-line absolute left-4 sm:left-8 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#27DFE9] via-[#026F84] to-[#27DFE9] shadow-[0_0_15px_#27DFE9] origin-top transform scale-y-0 rounded-full" />

          <div className="space-y-12 sm:space-y-16 md:space-y-32 mt-8 md:mt-0">
            {dict.steps.map((step: any, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`workflow-step relative w-full flex items-start md:items-center justify-start md:justify-between opacity-0 group ${isEven ? "md:translate-x-[-50px] translate-x-[-15px]" : "md:translate-x-[50px] translate-x-[15px]"}`}
                >
                  {/* DESKTOP — chap tomon (faqat juft indexlar) */}
                  <div
                    className={`hidden md:block w-[45%] ${isEven ? "text-right pr-12" : ""}`}
                  >
                    {isEven && (
                      <div className="flex flex-col items-end">
                        <span
                          className="text-7xl font-black uppercase italic tracking-tighter block leading-none mb-[-20px]"
                          style={{
                            WebkitTextStroke: "1.5px rgba(39, 223, 233, 0.35)",
                            color: "transparent",
                          }}
                        >
                          {step.id}
                        </span>
                        <h3 className="text-3xl font-black text-white uppercase italic tracking-tight group-hover:text-[#27DFE9] transition-colors duration-500 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed max-w-[300px]">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Markaziy tugun */}
                  <div className="absolute left-[6px] sm:left-[21px] md:static md:w-[10%] flex justify-center shrink-0 mt-3 sm:mt-5 md:mt-0 z-10">
                    <div className="step-node w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#111] border-2 border-white/20 transition-all duration-500 relative flex items-center justify-center cursor-pointer group-hover:border-[#27DFE9]">
                      <div className="absolute inset-[-10px] md:inset-[-12px] rounded-full border border-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 animate-[spin_3s_linear_infinite]" />
                    </div>
                  </div>

                  {/* O'ng tomon + barcha mobil */}
                  <div
                    className={`w-full pl-12 sm:pl-20 pt-1 md:pt-0 md:pl-0 md:w-[45%] ${isEven ? "md:hidden" : "md:text-left md:pl-12"}`}
                  >
                    <div className="flex flex-col items-start">
                      <span
                        className="text-4xl sm:text-6xl md:text-7xl font-black uppercase italic tracking-tighter block leading-none mb-[-8px] sm:mb-[-15px] md:mb-[-20px]"
                        style={{
                          WebkitTextStroke: "1.5px rgba(39, 223, 233, 0.35)",
                          color: "transparent",
                        }}
                      >
                        {step.id}
                      </span>
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight group-hover:text-[#27DFE9] transition-colors duration-500 mb-1 sm:mb-2 md:mb-4">
                        {step.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 sm:text-gray-500 uppercase tracking-widest leading-relaxed pr-2 sm:pr-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
