"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Download, Terminal, Layers, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 sm:py-28 relative overflow-hidden bg-technical-grid"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Technical Brief (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Live Signal Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-[#FF7018]/30 bg-[#FF7018]/5 text-[#FF7018] font-mono text-xs font-medium tracking-wide mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7018] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7018]" />
              </span>
              <span>SIGNAL // AVAILABLE FOR WORK</span>
            </div>

            {/* Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Engineering web &amp; <br />
              <span className="text-[#FF7018] drop-shadow-[0_0_24px_rgba(255,112,24,0.35)]">
                intelligent systems.
              </span>
            </h1>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-[#B5B5BE] mb-8 max-w-xl leading-relaxed">
              {PERSONAL_INFO.focus}
            </p>

            {/* Actions Row */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FF7018] hover:bg-[#EA5E08] text-white font-mono text-xs font-semibold transition-all shadow-[0_0_20px_rgba(255,112,24,0.35)] transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/15 hover:border-white/30 text-white font-mono text-xs font-semibold hover:bg-white/5 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Prakash_P.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#FF7018]/40 bg-[#FF7018]/10 hover:bg-[#FF7018] hover:text-white text-[#FF7018] font-mono text-xs font-semibold transition-all shadow-sm transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Technical Index Metric Bar */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 max-w-md">
              <div>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  0{PERSONAL_INFO.stats.projects}
                </p>
                <p className="text-xs font-mono text-[#777984] uppercase tracking-wider mt-0.5">
                  {"// Projects"}
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  0{PERSONAL_INFO.stats.hackathons}
                </p>
                <p className="text-xs font-mono text-[#777984] uppercase tracking-wider mt-0.5">
                  {"// Hackathons"}
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-[#FF7018]">
                  {PERSONAL_INFO.stats.focusArea}
                </p>
                <p className="text-xs font-mono text-[#777984] uppercase tracking-wider mt-0.5">
                  {"// Discipline"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Technical Dossier Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md bg-[#15161D] border border-white/10 rounded-xl p-5 shadow-2xl relative group transition-transform duration-300 hover:scale-[1.01]">
              {/* Card Header Coordinate */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-[11px] text-[#777984]">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#FF7018]" />
                  <span>DOSSIER // PRAKASH.P</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#FF7018] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  <span>[ACTIVE]</span>
                </span>
              </div>

              {/* Portrait Image Frame */}
              <div className="relative aspect-[4/4.2] w-full rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </div>

              {/* Technical Signal Tags */}
              <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 p-2 rounded-md bg-[#101116] border border-white/5">
                  <Layers className="w-4 h-4 text-[#FF7018]" />
                  <div>
                    <p className="text-[10px] text-[#777984] uppercase">Primary Stack</p>
                    <p className="font-semibold text-white">React &bull; Next.js</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-md bg-[#101116] border border-white/5">
                  <Cpu className="w-4 h-4 text-[#FF7018]" />
                  <div>
                    <p className="text-[10px] text-[#777984] uppercase">Core Discipline</p>
                    <p className="font-semibold text-white">AIML &bull; Web</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
