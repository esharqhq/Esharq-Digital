'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: '01',
    title: 'Project Nexus',
    category: 'AI Infrastructure',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600',
  },
  {
    id: '02',
    title: 'Quantum Ledger',
    category: 'FinTech Security',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600',
  },
  {
    id: '03',
    title: 'Aether OS',
    category: 'Operating System',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600',
  },
  {
    id: '04',
    title: 'Solaris Grid',
    category: 'Energy Optimization',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600',
  },
]

export const Portfolio = ({ dict }: { dict: any }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const scrollContainer = scrollContainerRef.current
      if (!scrollContainer) return

      const getScrollAmount = () => -(scrollContainer.scrollWidth - window.innerWidth)

      gsap.to(scrollContainer, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollContainer.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })

      gsap.to('.portfolio-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollContainer.scrollWidth}`,
          scrub: true,
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="network" ref={sectionRef} className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
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
        style={{ width: 'max-content' }}
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="relative w-[70vw] md:w-[50vw] h-[50vh] flex-shrink-0 group mt-24"
          >
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#111]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000"
                sizes="(max-width: 768px) 70vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 z-10">
                <span className="text-[#27DFE9] font-mono text-xs">{project.id}</span>
                <h3 className="text-4xl font-black text-white uppercase italic">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="w-[85vw] md:w-[60vw] flex-shrink-0 flex flex-col items-start justify-center px-4 sm:px-12 md:px-20 mt-24">
          <h3 className="text-5xl sm:text-7xl md:text-[8rem] font-black text-white uppercase italic leading-none mb-6 md:mb-10 tracking-tighter">
            {dict.ctaTitle1} <br /> <span className="text-[#27DFE9]">{dict.ctaTitle2}</span>
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
    </section>
  )
}
