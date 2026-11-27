"use client";

import React from "react";
import { motion } from "motion/react";
import { Terminal, Cpu, Wrench, Layers } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

export function SkillsSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "code-2":
        return <Terminal className="w-4 h-4 text-brand-500" />;
      case "layers":
        return <Layers className="w-4 h-4 text-cyan-500" />;
      case "wrench":
        return <Wrench className="w-4 h-4 text-amber-500" />;
      default:
        return <Cpu className="w-4 h-4 text-brand-500" />;
    }
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-white/10 bg-transparent"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="section-tag text-[#FF7018] mb-2 font-mono text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF7018]" />
            <span>{"// 05. TECHNICAL TOOLCHAIN"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-serif">
            Arsenal &amp; Technologies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#B5B5BE] max-w-2xl">
            Verified frameworks, languages, and development instruments utilized across web applications and machine learning pipelines.
          </p>
        </div>

        {/* 3 Column Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const catIndex = String(idx + 1).padStart(2, "0");
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-[#15161D] border border-white/10 hover:border-[#FF7018]/50 rounded-xl p-6 shadow-technical hover:shadow-technical-elevated flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-[#101116] border border-white/5 flex items-center justify-center">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#777984]">
                      SEC_{catIndex}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.02 }}
                        className="p-3 rounded-lg bg-[#101116] border border-white/5 flex flex-col justify-between hover:border-[#FF7018]/40 transition-colors"
                      >
                        <span className="font-mono text-xs text-[#FF7018] font-bold mb-1">
                          {skill.name}
                        </span>
                        <span className="text-xs text-[#B5B5BE] font-medium truncate">
                          {skill.tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#777984]">
                  <span>CAPACITY // VERIFIED</span>
                  <span className="text-emerald-400 font-semibold">[READY]</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
