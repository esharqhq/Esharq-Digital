'use client'

import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { Cpu } from 'lucide-react'

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Sahifa yuklanayotganda scrolni qulflash
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false)
        document.body.style.overflow = '' // Scrollni yoqish
      }
    })

    // Progress foizining 0 dan 100 gacha sanashi
    tl.to({ val: 0 }, {
      val: 100,
      duration: 1.8,
      ease: 'power3.inOut',
      onUpdate: function() {
        setProgress(Math.round(this.targets()[0].val))
      }
    })

    // CPU aylanib turishi
    gsap.to('.preloader-icon', {
      rotate: 360,
      duration: 2,
      ease: 'linear',
      repeat: -1
    })

    // --- EXIT ANIMATIONS (YOQ BO'LISHI) ---
    // 1. Text va yozuv markazga qarab tez kattalashib g'oyib bo'ladi
    tl.to('.preloader-content', {
      scale: 1.5,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.in'
    }, '+=0.2')

    // 2. Qora va Gradientli pardalar kinodagidek o'ng va chapga ochiladi
    tl.to(['.curtain-left', '.curtain-right'], {
      width: 0,
      duration: 1,
      ease: 'expo.inOut'
    }, '-=0.3')

    // 3. To'liq yashirinishi
    tl.to(containerRef.current, {
      display: 'none',
      duration: 0
    })

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (!isLoading) return null

  return (
    <div ref={containerRef} className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none">
      
      {/* Asosiy Kinematografik Pardalar (Curtains) */}
      <div className="curtain-left absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-[#020202] to-[#0a0a0a] border-r border-[#27DFE9]/20" />
      <div className="curtain-right absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-[#020202] to-[#0a0a0a] border-l border-[#27DFE9]/20" />
      
      {/* Orqa Fonga Ulkan Glow Gradient (Nuqta)  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#27DFE9]/15 to-[#026F84]/15 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Asosiy Elementlar (Logo va Foiz) */}
      <div className="preloader-content relative z-10 flex flex-col items-center">
        
        {/* LOGO Qismi */}
        <div className="flex items-center gap-4">
          <Cpu className="preloader-icon text-[#27DFE9] w-16 h-16" />
          <h1 className="font-black tracking-tighter text-white uppercase italic text-6xl">
            ESHARQ<span className="text-[#27DFE9] not-italic">.</span>AI
          </h1>
        </div>

        {/* LOADING YOZUVI VA FOIZ */}
        <div className="mt-16 flex flex-col items-center">
          <span className="text-[#27DFE9] font-mono text-lg font-bold tracking-[0.4em] mb-4">
            SYSTEM_BOOTING //
          </span>
          <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
            {progress}%
          </div>
        </div>

      </div>
    </div>
  )
}
