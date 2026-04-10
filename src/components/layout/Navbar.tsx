"use client";

import { useState, useEffect } from "react";
import { Cpu, Menu, X, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { ContactForm } from "../ContactForm";
import { VapiCallModal } from "../VapiCallModal";
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = ({
  navDict,
  contactDict,
  lang,
}: {
  navDict: any;
  contactDict: any;
  lang: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVapiOpen, setIsVapiOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const navItems = [
    { label: navDict.solutions, href: "#solutions" },
    { label: navDict.network, href: "#portfolio" },
    { label: navDict.contact, href: "#workflow" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[40] flex justify-center pointer-events-none p-4 transition-all duration-500">
        <nav
          className={`
            flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            pointer-events-auto relative z-50
            ${
              isScrolled
                ? "w-full md:w-[90%] lg:w-[60%] py-3 px-6 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mt-2"
                : "w-full py-8 px-6 md:px-12 rounded-none bg-transparent border-b border-white/5 mt-0"
            }
          `}
        >
          <div
            className="flex items-center gap-2 cursor-pointer shrink-0 z-20"
            onClick={(e) => handleSmoothScroll(e as any, "body")}
          >
            <Image src={Logo} alt="Logo" width={100} height={100} />
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
            <LanguageSelector lang={lang} />

            <Button
              variant="brandOutline"
              onClick={() => setIsVapiOpen(true)}
              className={
                isScrolled
                  ? "h-9 px-4 text-[9px] rounded-full"
                  : "h-12 px-8 text-[10px] rounded-none"
              }
            >
              {navDict.connect}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4 z-20">
            <LanguageSelector lang={lang} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#27DFE9]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#27DFE9]/5 to-transparent pointer-events-none z-0" />
          )}
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a0a0a]/98 backdrop-blur-3xl border-b border-white/10 transition-all duration-500 flex flex-col items-center justify-center p-8 ${mobileMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto z-40" : "-translate-y-full opacity-0 pointer-events-none z-[-1]"}`}
        >
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
              variant="brand"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsVapiOpen(true);
              }}
              className="mt-8 w-[80%] h-14"
            >
              {navDict.connect}
            </Button>
          </div>
        </div>
      </header>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8"
            data-lenis-prevent
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-none overflow-hidden shadow-2xl z-10"
            >
              {/* Header */}
              <div className="p-8 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[#27DFE9] fill-[#27DFE9]" />
                  <span className="text-[10px] uppercase tracking-[0.5em] text-[#27DFE9] font-black italic">
                    {contactDict.tag || "ESTABLISH CONNECTION"}
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/50 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-4xl font-black text-white leading-[0.9] uppercase italic tracking-tighter">
                    {contactDict.title1 || "READY TO"} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27DFE9] to-white/20">
                      {contactDict.title2 || "START?"}
                    </span>
                  </h2>
                </div>
                <ContactForm
                  dict={contactDict}
                  onSuccess={() => {
                    setTimeout(() => setIsModalOpen(false), 2500);
                  }}
                />
              </div>

              {/* Decorative side line */}
              <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#27DFE9] to-transparent opacity-20" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Vapi Voice Call Modal */}
      <VapiCallModal
        isOpen={isVapiOpen}
        onClose={() => setIsVapiOpen(false)}
        lang={lang}
      />
    </>
  );
};
