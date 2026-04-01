'use client'

import { useState, useEffect } from 'react'
import { Cpu, Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Navbar = ({ dict, lang }: { dict: any, lang: string }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: dict.solutions, href: '#solutions' },
    { label: dict.network, href: '#network' },
    { label: dict.contact, href: '#contact' },
  ]

  const langs = ['en', 'uz', 'ru']
  const nextLang = langs[(langs.indexOf(lang) + 1) % langs.length]
  const nextLangPath = pathname.replace(`/${lang}`, `/${nextLang}`) || `/${nextLang}`

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (lenis) {
      lenis.scrollTo(target)
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none p-4 transition-all duration-500">
      <nav
        className={`
          flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          pointer-events-auto overflow-hidden relative z-50
          ${
            isScrolled
              ? 'w-full md:w-[90%] lg:w-[60%] py-3 px-6 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mt-2'
              : 'w-full py-8 px-6 md:px-12 rounded-none bg-transparent border-b border-white/5 mt-0'
          }
        `}
      >
        <div className="flex items-center gap-2 cursor-pointer shrink-0 z-20" onClick={(e) => handleSmoothScroll(e as any, 'body')}>
          <Cpu
            className={`text-[#27DFE9] transition-all duration-500 ${isScrolled ? 'w-5 h-5' : 'w-7 h-7'}`}
          />
          <span
            className={`font-black tracking-tighter text-white uppercase italic transition-all duration-500 ${isScrolled ? 'text-sm' : 'text-xl'}`}
          >
            ESHARQ<span className="text-[#27DFE9] not-italic">.AI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C8ECED]/40 hover:text-[#27DFE9] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 shrink-0 z-20">
          <Link 
            href={nextLangPath}
            className="flex items-center gap-1 text-[9px] font-black tracking-widest uppercase text-white hover:text-[#27DFE9] transition-colors"
          >
            <Globe size={12} className="text-[#27DFE9]" />
            {lang}
          </Link>

          <Button
            variant="outline"
            className={`
              border-[#27DFE9] text-[#27DFE9] hover:bg-[#27DFE9] hover:text-[#151616] transition-all duration-500 font-black uppercase tracking-widest
              ${isScrolled ? 'h-9 px-4 text-[9px] rounded-full' : 'h-12 px-8 text-[10px] rounded-none'}
            `}
          >
            {dict.connect}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-20">
          <Link 
            href={nextLangPath}
            className="text-[10px] uppercase font-bold text-white flex items-center gap-1"
          >
            <Globe size={12} className="text-[#27DFE9]"/> {lang}
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#27DFE9]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#27DFE9]/5 to-transparent pointer-events-none z-0" />
        )}
      </nav>

      {/* Mobile Menu Dropdown (Moved outside nav to prevent overflow-hidden clipping) */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a0a0a]/98 backdrop-blur-3xl border-b border-white/10 transition-all duration-500 flex flex-col items-center justify-center p-8 ${mobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto z-40' : '-translate-y-full opacity-0 pointer-events-none z-[-1]'}`}>
        <div className="flex flex-col items-center gap-10 mt-16 w-full">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-xl font-black uppercase tracking-[0.4em] text-white hover:text-[#27DFE9] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            className="mt-8 bg-[#27DFE9] text-black hover:bg-white w-[80%] h-14 text-sm font-black rounded-none uppercase tracking-widest"
          >
            {dict.connect}
          </Button>
        </div>
      </div>
    </header>
  )
}
