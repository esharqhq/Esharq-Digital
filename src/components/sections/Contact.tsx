'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Globe, ArrowRight, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface FormState {
  name: string
  email: string
  message: string
}

export const Contact = ({ dict }: { dict: any }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useGSAP(
    () => {
      gsap.from('.contact-card', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      })
    },
    { scope: containerRef },
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending || sent) return
    setSending(true)
    // TODO: replace with real email service (Resend, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
  }

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value })),
  })

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-none py-5 px-6 text-white outline-none focus:border-[#27DFE9] transition-all font-mono text-xs placeholder:text-white/10'

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 px-6 bg-[#080808] flex items-center justify-center overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#27DFE9]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10 bg-white/5 border border-white/10">
        {/* Left */}
        <div className="lg:col-span-5 flex flex-col border-r border-white/10">
          <div className="contact-card p-12 border-b border-white/10">
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
          </div>

          <div className="contact-card p-12 flex-grow space-y-10 bg-white/[0.01]">
            <div className="group cursor-pointer">
              <p className="text-[9px] uppercase tracking-[0.4em] text-gray-600 mb-2">{dict.protocol}</p>
              <div className="flex items-center gap-4">
                <Mail size={16} className="text-[#27DFE9]" />
                <span className="text-lg font-bold text-white group-hover:text-[#27DFE9] transition-colors uppercase tracking-widest">
                  hello@esharq.ai
                </span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <p className="text-[9px] uppercase tracking-[0.4em] text-gray-600 mb-2">{dict.location}</p>
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
          {sent ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center gap-6">
              <div className="text-[#27DFE9] text-6xl font-black">✓</div>
              <p className="text-white font-black uppercase tracking-[0.3em]">{dict.received}</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                {dict.receivedDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#27DFE9] font-bold block mb-4">
                    {dict.identLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={dict.identPlaceholder}
                    className={inputClass}
                    {...field('name')}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#27DFE9] font-bold block mb-4">
                    {dict.freqLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={dict.freqPlaceholder}
                    className={inputClass}
                    {...field('email')}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#27DFE9] font-bold block mb-4">
                  {dict.msgLabel}
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder={dict.msgPlaceholder}
                  className={inputClass}
                  {...field('message')}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group relative w-full h-20 bg-[#27DFE9] text-black font-black uppercase tracking-[0.5em] text-xs transition-all flex items-center justify-center gap-4 hover:bg-white active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? dict.btnSending : dict.btnDefault}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-3 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black/50" />
              </button>
            </form>
          )}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
