"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Rocket,
  X,
  ExternalLink,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import portfolioData from "../../../constants/partfoliyo.json";
import SectionTitle from "../SectionTitle";

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
  const [activeImg, setActiveImg] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const l: Lang = (["en", "uz", "ru"].includes(lang) ? lang : "en") as Lang;

  useEffect(() => {
    setActiveImg(0);
  }, [selected]);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && selected) setSelected(null);
    },
    [selected],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Open modal with full original project data
  const openProject = (project: any) => {
    const baseId = String(project.id).replace(/-extra-\d+$/, "");
    const original = portfolioData.portfolio.find((p: any) => p.id === baseId);
    setSelected(
      original ? { ...original, title_display: original.title[l] } : project,
    );
  };

  // Map and expand to ~8 cards
  const PROJECTS = portfolioData.portfolio
    .flatMap((p: any) => {
      const gallery = p.images && p.images.length > 0 ? p.images : [p.image];
      return gallery.map((img: string, idx: number) => ({
        ...p,
        id: idx === 0 ? p.id : `${p.id}-extra-${idx}`,
        title_display: p.title[l],
        category_display: p.category,
        image_display: img,
      }));
    })
    .slice(0, 8);

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
    <>
      <section
        id="portfolio"
        ref={sectionRef}
        className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden"
      >
        {/* Header with SectionTitle */}
        <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
          <SectionTitle
            title1={dict.title1}
            title2={dict.title2}
            description={dict.description}
          />
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center h-full mt-20 px-[10vw] gap-[10vw] will-change-transform"
          style={{ width: "max-content" }}
        >
          {PROJECTS.map((project: any) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="relative w-[70vw] md:w-[50vw] h-[50vh] flex-shrink-0 group mt-36 cursor-pointer"
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
                  <div className="w-14 h-14 rounded-full bg-[#27DFE9] text-black flex items-center justify-center shadow-2xl">
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
          <div className="w-[85vw] md:w-[60vw] flex-shrink-0 flex flex-col items-start justify-center px-4 sm:px-12 md:px-20 mt-36">
            <h3 className="text-5xl sm:text-7xl md:text-[8rem] font-black text-white uppercase italic leading-none mb-6 md:mb-10 tracking-tighter">
              {dict.ctaTitle1} <br />{" "}
              <span className="text-[#27DFE9]">{dict.ctaTitle2}</span>
            </h3>
            <Button
              variant="brand"
              size="xl"
              className="w-full sm:w-auto"
            >
              {dict.btn} <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-12 right-12 z-30">
          <div className="w-full h-[2px] bg-white/5 relative">
            <div className="portfolio-progress absolute top-0 left-0 h-full w-full bg-[#27DFE9] scale-x-0 origin-left" />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <div 
            className="fixed inset-0 z-[10000] flex items-center justify-center p-0 md:p-8"
            data-lenis-prevent
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
            />

            <motion.div
              className="relative w-full max-w-4xl h-full md:max-h-[90vh] bg-[#0a0a0a] rounded-none md:rounded-2xl border-x border-b border-white/10 md:border overflow-hidden shadow-2xl z-10 flex flex-col"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Image Panel */}
              <div className="relative w-full h-[35vh] md:h-[45vh] shrink-0 overflow-hidden bg-[#111]">
                <Image
                  src={selected.images?.[activeImg] || selected.image}
                  alt={selected.title_display}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent md:hidden" />

                {/* Gallery Navigation */}
                {selected.images?.length > 1 && (
                  <>
                    {/* Arrow buttons */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImg((prev: number) =>
                          prev === 0 ? selected.images.length - 1 : prev - 1,
                        );
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors border border-white/10"
                    >
                      <ChevronLeft size={18} className="text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImg((prev: number) =>
                          prev === selected.images.length - 1 ? 0 : prev + 1,
                        );
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors border border-white/10"
                    >
                      <ChevronRight size={18} className="text-white" />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                      {selected.images.map((_: string, i: number) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImg(i);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === activeImg
                              ? "bg-[#27DFE9] w-6 shadow-[0_0_8px_#27DFE9]"
                              : "bg-white/30 w-2 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content Panel */}
              <div 
                className="w-full flex-1 overflow-y-auto p-6 md:p-10 [&::-webkit-scrollbar]:hidden md:[&::-webkit-scrollbar]:block"
                data-lenis-prevent
              >
                <div className="w-full">
                  {/* Category */}
                  <span className="text-[#27DFE9] font-mono text-xs uppercase tracking-widest">
                    {selected.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mt-3 mb-2 leading-[0.9]">
                    {selected.title_display}
                  </h2>

                  {/* Client & Year */}
                  <div className="flex items-center gap-4 mb-8 mt-4">
                    {selected.details?.client && (
                      <span className="text-gray-500 text-sm font-medium">
                        {selected.details.client}
                      </span>
                    )}
                    {selected.year && (
                      <>
                        <span className="text-white/10">|</span>
                        <span className="text-gray-500 text-sm font-medium">
                          {selected.year}
                        </span>
                      </>
                    )}
                    {selected.details?.industry?.[l] && (
                      <>
                        <span className="text-white/10">|</span>
                        <span className="text-gray-500 text-sm font-medium">
                          {selected.details.industry[l]}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="space-y-8">
                    {/* Overview */}
                    <section>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#27DFE9]/60 mb-3">
                        {dict.modalOverview}
                      </h4>
                      <p className="text-base text-gray-400 leading-relaxed">
                        {selected.details?.description?.[l] ||
                          selected.short_desc?.[l]}
                      </p>
                    </section>

                    {/* Services */}
                    {selected.details?.services?.[l] && (
                      <section>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#27DFE9]/60 mb-3">
                          {dict.modalServices}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selected.details.services[l].map((s: string) => (
                            <span
                              key={s}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Features */}
                    {selected.details?.features?.[l] && (
                      <section>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#27DFE9]/60 mb-3">
                          {dict.modalFeatures}
                        </h4>
                        <ul className="space-y-2">
                          {selected.details.features[l].map((f: string) => (
                            <li
                              key={f}
                              className="flex items-start gap-3 text-sm text-gray-400"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#27DFE9] mt-1.5 shrink-0 shadow-[0_0_6px_#27DFE9]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* Results */}
                    {selected.details?.results?.[l] && (
                      <section className="bg-[#27DFE9]/5 border border-[#27DFE9]/20 rounded-xl p-5">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#27DFE9] mb-3">
                          {dict.modalResults}
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {selected.details.results[l]}
                        </p>
                      </section>
                    )}

                    {/* Stack & Year */}
                    <div className="grid grid-cols-2 gap-6">
                      {selected.details?.stack && (
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#27DFE9]/60 mb-3">
                            {dict.modalStack}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selected.details.stack.map((s: string) => (
                              <span
                                key={s}
                                className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-gray-500"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#27DFE9]/60 mb-3">
                          {dict.modalYear}
                        </h4>
                        <p className="text-lg font-bold text-white">
                          {selected.year || "2024"}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="brandOutline" 
                      size="lg" 
                      className="w-full"
                    >
                      {dict.modalLaunch} <ExternalLink size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
