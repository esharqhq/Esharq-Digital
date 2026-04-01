'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, Zap, TrendingUp, DollarSign, Cpu, User, UserPlus } from 'lucide-react'
import type { ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

const HolographicFrame = ({
  children,
  color = '#27DFE9',
  glow = 'rgba(39, 223, 233, 0.4)',
}: {
  children: ReactNode
  color?: string
  glow?: string
}) => (
  <div className="relative p-[2px] group overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
    <div
      className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"
      style={{ borderColor: color, boxShadow: `0 0 25px ${glow}` }}
    />
    <div
      className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"
      style={{ borderColor: color, boxShadow: `0 0 25px ${glow}` }}
    />
    <div className="relative bg-[#0d0e0e]/95 border border-white/5 backdrop-blur-3xl p-10 rounded-2xl shadow-[inset_0_0_60px_rgba(255,255,255,0.02)]">
      {children}
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#27DFE9]/5 to-transparent h-1/3 pointer-events-none" />
  </div>
)

export const WhyAI = ({ dict }: { dict: any }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const BENTO_ITEMS = [
    { Icon: TrendingUp, t: dict.bento1Title, d: dict.bento1Desc },
    { Icon: Cpu, t: dict.bento2Title, d: dict.bento2Desc },
    { Icon: DollarSign, t: dict.bento3Title, d: dict.bento3Desc },
  ]

  const [matrixLines, setMatrixLines] = useState<{id: number; code: string}[]>([])

  useEffect(() => {
    setMatrixLines(Array.from({ length: 50 }, (_, i) => ({ id: i, code: Math.random().toString(36).substring(7) })))
  }, [])

  useGSAP(
    () => {
      gsap.to('.neural-laser', {
        strokeDashoffset: 0,
        duration: 1,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.bg-glow-ball', {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.from('.ai-expert-section', {
        y: 150,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.ai-expert-section', start: 'top 85%' },
      })
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0a] py-32 px-6 overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:50px_50px] opacity-[0.15] pointer-events-none" />

      <div className="bg-glow-ball absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#27DFE9]/10 blur-[180px] rounded-full" />
      <div className="bg-glow-ball absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-[#026F84]/20 blur-[200px] rounded-full" />

      <div className="absolute inset-0 opacity-[0.04] text-[9px] font-mono text-[#27DFE9] overflow-hidden select-none pointer-events-none">
        {matrixLines.map(({ id, code }) => (
          <p key={id} className="whitespace-nowrap">
            SYSTEM_UPGRADE: SUCCESS // NEURAL_LINK: ACTIVE // SPEED_BOOST: 300% // {code}
          </p>
        ))}
      </div>

      <div className="text-center mb-32 z-10">
        <h2 className="text-6xl md:text-9xl font-black text-[#C8ECED] uppercase tracking-tighter italic drop-shadow-[0_0_30px_#27DFE9]">
          {dict.title1}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#27DFE9] to-[#026F84]">
            {dict.title2}
          </span>
        </h2>
        <div className="h-[2px] w-96 bg-gradient-to-r from-transparent via-[#27DFE9] to-transparent mx-auto mt-6 shadow-[0_0_20px_#27DFE9]" />
      </div>

      <div className="w-full max-w-7xl relative z-10">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1200 800"
        >
          <path className="neural-laser" d="M600 400 L250 250" stroke="#005F7E" strokeWidth="1" fill="none" strokeDasharray="20, 20" strokeDashoffset="1000" opacity="0.3" />
          <path className="neural-laser" d="M600 400 L950 150" stroke="#27DFE9" strokeWidth="2" fill="none" strokeDasharray="30, 30" strokeDashoffset="1000" />
          <path className="neural-laser" d="M600 400 L600 700" stroke="#27DFE9" strokeWidth="1" fill="none" strokeDasharray="15, 15" strokeDashoffset="1000" opacity="0.5" />
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <HolographicFrame color="#005F7E" glow="rgba(0, 95, 126, 0.2)">
              <div className="flex items-center gap-3 mb-8 text-gray-500">
                <User size={20} />
                <span className="font-bold uppercase tracking-[0.3em] text-[10px]">{dict.legacyRole}</span>
              </div>
              <h3 className="text-4xl font-black text-gray-700 uppercase italic mb-8" dangerouslySetInnerHTML={{ __html: dict.legacyTitle.replace(' ', ' <br /> ') }} />
              <div className="space-y-4">
                <div className="h-1 bg-gray-900 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-gray-700" />
                </div>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                  {dict.legacyDesc}
                </p>
              </div>
            </HolographicFrame>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#151616] border-2 border-[#27DFE9] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#27DFE9]/10 rounded-full blur-2xl animate-pulse" />
              <Brain className="text-[#27DFE9] drop-shadow-[0_0_15px_#27DFE9]" size={40} />
            </div>
            <div className="h-32 w-[1px] bg-gradient-to-b from-[#27DFE9] to-transparent mt-6" />
          </div>

          <div className="lg:col-span-5 ai-expert-section -translate-y-16">
            <HolographicFrame color="#27DFE9" glow="rgba(39, 223, 233, 0.6)">
              <div className="flex justify-between items-center mb-10 border-b border-[#27DFE9]/20 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#27DFE9]/20 rounded-lg border border-[#27DFE9]/40">
                    <UserPlus className="text-[#27DFE9]" size={24} />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase italic">{dict.neuralRole}</h3>
                </div>
                <Zap className="text-[#27DFE9] animate-bounce" size={24} />
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
                <div>
                  <div className="text-[9px] sm:text-[10px] text-[#27DFE9]/60 uppercase mb-1 sm:mb-2">{dict.efficiency}</div>
                  <div className="text-5xl xl:text-6xl font-black text-[#27DFE9] drop-shadow-[0_0_20px_#27DFE9]">+300%</div>
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-[#27DFE9]/60 uppercase mb-1 sm:mb-2">{dict.output}</div>
                  <div className="text-5xl xl:text-6xl font-black text-white italic">10x</div>
                </div>
              </div>
            </HolographicFrame>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {BENTO_ITEMS.map(({ Icon, t: bentoTitle, d }) => (
              <div
                key={bentoTitle}
                className="group relative p-[1px] rounded-xl bg-white/5 hover:bg-[#27DFE9]/20 transition-all duration-500"
              >
                <div className="bg-[#0d0e0e] p-8 rounded-xl border border-white/5 group-hover:border-[#27DFE9]/50 transition-all">
                  <div className="text-[#27DFE9] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-3">{bentoTitle}</h4>
                  <p className="text-[10px] text-gray-500 uppercase leading-relaxed tracking-widest">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-28 left-0 w-full text-center opacity-[0.03] pointer-events-none z-0">
          <h3 className="text-[25rem] font-black tracking-tighter uppercase leading-none text-[#27DFE9]">
            Esharq
          </h3>
        </div>
      </div>
    </section>
  )
}
