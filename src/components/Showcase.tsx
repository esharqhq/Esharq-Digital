import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NeuralBackground } from "./NeuralBackground";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Showcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 2,
          anticipatePin: 1,
        },
      });

      tl.to(
        contentRef.current,
        {
          scale: 6,
          opacity: 0,
          z: 100, // 3D chuqurlik qo'shildi
          rotateZ: 0.01, // Brauzer sub-pixel renderingni yaxshilashi uchun kichik aylanish
          force3D: true,
          ease: "power2.inOut", // 'in' ga qaraganda silliqroq 'inOut'
        },
        0,
      );

      tl.to(
        bgRef.current,
        {
          scale: 1.5,
          opacity: 0,
          force3D: true,
          ease: "power2.inOut",
        },
        0,
      );
    },
    { scope: showcaseRef },
  );

  return (
    <section
      ref={showcaseRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#080808]"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-0 will-change-transform"
      >
        <NeuralBackground />
      </div>

      {/* Main Content - will-change va hardware acceleration */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-6xl pointer-events-auto will-change-transform"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-6">
          <span
            className="text-[#C8ECED] block"
            style={{
              textShadow: "0 0 30px rgba(39, 223, 233, 0.4)",
            }}
          >
            Future <br />
            Accelerated <br />
            By AI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#C8ECED]/60 font-medium tracking-wide mb-10 max-w-2xl mx-auto italic">
          AI-Powered Solutions:{" "}
          <span className="text-[#27DFE9] font-black underline decoration-1 underline-offset-8">
            3x Faster
          </span>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#27DFE9] text-black hover:bg-white transition-all duration-500 h-16 px-12 text-xl font-black rounded-none group shadow-[0_0_30px_rgba(39,223,233,0.3)]"
          >
            START JOURNEY
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-16 px-12 text-xl font-bold rounded-none border-[#27DFE9]/50 text-[#27DFE9] hover:bg-[#27DFE9]/10"
          >
            CASE STUDIES
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#27DFE9] via-[#27DFE9]/50 to-transparent animate-bounce" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#27DFE9] font-bold">
          Initiate_Scroll
        </span>
      </div>
    </section>
  );
};
