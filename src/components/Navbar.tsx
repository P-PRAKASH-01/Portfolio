"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV_ITEMS = [
  { num: "01", label: "Overview", href: "#home" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Certificates", href: "#certificates" },
  { num: "04", label: "Projects", href: "#projects" },
  { num: "05", label: "Skills", href: "#skills" },
  { num: "06", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollPosition = window.scrollY + 140;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id") || "";

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full z-50 top-0 fieldnote-nav transition-colors duration-200"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Engineering Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7018] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-md bg-[#15161D] text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider border border-white/15 transition-transform group-hover:scale-105 group-hover:border-[#FF7018]/50">
              P_
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white">
                Prakash<span className="text-[#FF7018]">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#777984] uppercase">
                CSE &bull; AIML
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            <div className="flex items-center gap-1 text-xs font-mono">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-md transition-all duration-150 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#FF7018]/10 text-[#FF7018] border border-[#FF7018]/30 font-semibold shadow-[0_0_12px_rgba(255,112,24,0.15)]"
                        : "text-[#B5B5BE] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-[10px] text-[#777984]">{item.num}.</span>
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="h-4 w-px bg-white/10" aria-hidden="true" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-md border border-white/10 hover:border-white/25 bg-[#15161D] flex items-center justify-center text-[#B5B5BE] hover:text-white transition-colors"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#FF7018]" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#FF7018] hover:bg-[#EA5E08] text-white font-mono text-xs font-semibold transition-all shadow-[0_0_15px_rgba(255,112,24,0.3)] transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Terminal className="w-3.5 h-3.5 text-white" />
              <span>Initiate Contact</span>
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141D] flex items-center justify-center text-slate-600 dark:text-slate-400"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141D] flex items-center justify-center text-slate-600 dark:text-slate-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#090A10] px-4 pt-3 pb-6 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-1 font-mono text-sm" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-[#B5B5BE] hover:text-white hover:bg-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#777984]">{item.num}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-3 py-3 rounded-md bg-[#FF7018] hover:bg-[#EA5E08] text-white font-mono text-xs font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,112,24,0.35)]"
            >
              <Terminal className="w-4 h-4" />
              <span>Initiate Contact</span>
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
