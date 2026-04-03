"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Rocket, X, ExternalLink, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../../../constants/partfoliyo.json";

gsap.registerPlugin(ScrollTrigger);

type Lang = "en" | "uz" | "ru";

export const Portfolio = ({
  dict,
  lang = "en",
}: {
  dict: any;
  lang?: string;
}) => {
  const [selected, setSelected] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const l: Lang = (["en", "uz", "ru"].includes(lang) ? lang : "en") as Lang;

  // Modal opens/closes
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selected]);

  // Map and fix image paths + expand to reach ~8 cards
  const PROJECTS = portfolioData.portfolio
    .flatMap((p: any) => {
      // Use "images" array if available, otherwise just "image"
      const gallery = p.images && p.images.length > 0 ? p.images : [p.image];

      return gallery.map((img: string, idx: number) => ({
        ...p,
        id: idx === 0 ? p.id : `${p.id}-extra-${idx}`,
        title_display: p.title[l],
        category_display: idx === 0 ? p.category : `${p.category} (Gallery)`,
        image_display: img, // Raw path from JSON is correct: /images/portfolio/...
      }));
    })
    .slice(0, 8); // Ensure exactly 8 cards if possible

  useGSAP(
    () => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const getScrollAmount = () =>
        -(scrollContainer.scrollWidth - window.innerWidth);

      gsap.to(scrollContainer, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollContainer.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.to(".portfolio-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollContainer.scrollWidth}`,
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 w-full pt-20 px-12 md:px-24 z-30 pointer-events-none">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-[1px] bg-[#27DFE9]" />
          <span className="text-[#27DFE9] text-[10px] font-black uppercase tracking-[0.5em]">
            {dict.tag}
          </span>
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter">
          {dict.title1} <span className="text-[#27DFE9]/50">{dict.title2}</span>
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center h-full px-[10vw] gap-[10vw] will-change-transform"
        style={{ width: "max-content" }}
      >
        {PROJECTS.map((project: any) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="relative w-[70vw] md:w-[50vw] h-[50vh] flex-shrink-0 group mt-24 cursor-pointer"
          >
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#111]">
              <Image
                src={project.image_display}
                alt={project.title_display}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                sizes="(max-width: 768px) 70vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                  <Plus size={24} />
                </div>
              </div>

              <div className="absolute bottom-10 left-10 z-10">
                <span className="text-[#27DFE9] font-mono text-xs uppercase tracking-widest mb-2 block">
                  {project.category_display}
                </span>
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                  {project.title_display}
                </h3>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="w-[85vw] md:w-[60vw] flex-shrink-0 flex flex-col items-start justify-center px-4 sm:px-12 md:px-20 mt-24">
          <h3 className="text-5xl sm:text-7xl md:text-[8rem] font-black text-white uppercase italic leading-none mb-6 md:mb-10 tracking-tighter">
            {dict.ctaTitle1} <br />{" "}
            <span className="text-[#27DFE9]">{dict.ctaTitle2}</span>
          </h3>
          <button className="group w-full sm:w-auto relative px-6 py-4 md:px-12 md:py-6 border-2 border-[#27DFE9] text-[#27DFE9] overflow-hidden">
            <div className="absolute inset-0 bg-[#27DFE9] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 font-black text-sm sm:text-base md:text-xl uppercase italic flex items-center justify-center gap-3 group-hover:text-black transition-colors">
              {dict.btn} <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-10 left-12 right-12 z-30">
        <div className="w-full h-[2px] bg-white/5 relative">
          <div className="portfolio-progress absolute top-0 left-0 h-full w-full bg-[#27DFE9] scale-x-0 origin-left" />
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
            />

            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#F5F5F7] rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
              >
                <X size={20} className="text-black" />
              </button>

              <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <Image
                  src={selected.image_display}
                  alt="Detail"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="w-full md:w-1/2 h-full overflow-y-auto p-10 md:p-20 text-[#1D1D1F]">
                <div className="max-w-md">
                  <span className="text-[#0066CC] font-bold text-sm uppercase tracking-widest">
                    {selected.category_display}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-8 leading-[0.9] uppercase italic">
                    {selected.title_display}
                  </h2>

                  <div className="space-y-12">
                    <section>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-4">
                        The Overview
                      </h4>
                      <p className="text-xl font-medium leading-relaxed text-black/70">
                        {selected.details?.description[l] ||
                          selected.short_desc[l]}
                      </p>
                    </section>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-4">
                          Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selected.details?.stack?.map((s: any) => (
                            <span
                              key={s}
                              className="px-3 py-1 bg-black/5 rounded-lg text-xs font-bold"
                            >
                              {s}
                            </span>
                          )) || (
                            <span className="text-xs">Proprietary Tech</span>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-4">
                          Year
                        </h4>
                        <p className="text-lg font-bold">
                          {selected.year || "2024"}
                        </p>
                      </div>
                    </div>

                    <button className="w-full py-6 bg-[#27DFE9] text-black rounded-2xl font-black text-lg hover:bg-[#1fb8c1] transition-all flex items-center justify-center gap-3 uppercase italic">
                      Launch Experience <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
