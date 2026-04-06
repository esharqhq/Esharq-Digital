"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Globe, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "../ContactForm";
import { NeuralPulseBackground } from "../NeuralPulseBackground";

gsap.registerPlugin(ScrollTrigger);

export const Contact = ({ dict }: { dict: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 px-6 bg-[#080808] flex items-center justify-center overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[#080808] z-0" />
      <NeuralPulseBackground />
      
      {/* Supplemental glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#27DFE9]/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#27DFE9]/3 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10 bg-white/5 border border-white/10 backdrop-blur-sm">
        {/* Left */}
        <div className="lg:col-span-5 flex flex-col border-r border-white/10">
          <div className="contact-card p-12 border-b border-white/10 overflow-hidden relative">
            <div className="flex items-center gap-2 mb-6">
              <Zap size={14} className="text-[#27DFE9] fill-[#27DFE9]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#27DFE9] font-black">
                {dict.tag}
              </span>
            </div>
            <h2 className="text-5xl font-black text-white leading-[0.9] uppercase italic tracking-tighter">
              {dict.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27DFE9] to-white/20">
                {dict.title2}
              </span>
            </h2>
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
               <Zap size={200} className="text-[#27DFE9]" />
            </div>
          </div>

          <div className="contact-card p-12 flex-grow space-y-10 bg-white/[0.01]">
            <div className="group cursor-pointer">
              <p className="text-[9px] uppercase tracking-[0.4em] text-gray-600 mb-2">
                {dict.protocol}
              </p>
              <div className="flex items-center gap-4">
                <Mail size={16} className="text-[#27DFE9]" />
                <span className="text-lg font-bold text-white group-hover:text-[#27DFE9] transition-colors uppercase tracking-widest">
                  hello@esharq.ai
                </span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <p className="text-[9px] uppercase tracking-[0.4em] text-gray-600 mb-2">
                {dict.location}
              </p>
              <div className="flex items-center gap-4">
                <Globe size={16} className="text-[#27DFE9]" />
                <span className="text-lg font-bold text-white group-hover:text-[#27DFE9] transition-colors uppercase tracking-widest">
                  Tashkent, UZ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-7 contact-card p-12 bg-[#0a0a0a]/80 backdrop-blur-3xl relative overflow-hidden">
          <ContactForm dict={dict} />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
