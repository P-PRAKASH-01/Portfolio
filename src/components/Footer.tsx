"use client";

import React from "react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-10 border-t border-white/10 bg-[#090A10] text-[#777984] font-mono text-xs"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF7018] animate-pulse" />
          <span className="text-white">PRAKASH.P // PORTFOLIO V2 [ENGINEERING SPEC]</span>
        </div>

        <div className="flex items-center gap-6">
          <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          <span className="hidden md:inline text-white/20">&bull;</span>
          <span className="hidden md:inline text-[#B5B5BE]">BUILT WITH NEXT.JS + TYPESCRIPT + TAILWIND</span>
        </div>
      </div>
    </motion.footer>
  );
}
