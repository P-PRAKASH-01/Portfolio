"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Sun, Compass, Leaf, Disc, BookOpen } from "lucide-react";
import { ProjectBook } from "@/types";

interface ProjectBookItemProps {
  book: ProjectBook;
  onExtract: (book: ProjectBook) => void;
  index: number;
}

interface SpineVisualConfig {
  heightClass: string;
  widthClass: string;
  gradient: string;
  hasRibbon?: boolean;
  borderStyle?: string;
  topBadge: React.ReactNode;
  verticalTitle: string;
  verticalSubtitle?: string;
  bottomMark: React.ReactNode;
  titleStyle: string;
  ribCount?: number;
}

export function ProjectBookItem({ book, onExtract, index }: ProjectBookItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Individual physical spine configurations matching the user reference shelf
  const getSpineConfig = (id: string): SpineVisualConfig => {
    switch (id) {
      case "prephub":
        return {
          heightClass: "h-[310px] sm:h-[350px] md:h-[385px]",
          widthClass: "w-[56px] sm:w-[66px] md:w-[74px]",
          gradient: "linear-gradient(180deg, #8E441D 0%, #6E3211 25%, #4F220A 70%, #331404 100%)",
          hasRibbon: true,
          borderStyle: "border border-amber-400/40",
          topBadge: (
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] font-extrabold text-amber-200 tracking-wider">
                Nº 01
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-0.5" />
            </div>
          ),
          verticalTitle: "PrepHub",
          verticalSubtitle: "CAREER SYS",
          titleStyle: "font-serif text-amber-100 font-bold tracking-wide text-sm sm:text-base md:text-lg",
          bottomMark: (
            <span className="font-mono text-[8px] text-amber-300/80 tracking-widest font-bold">
              MMXXIV
            </span>
          ),
          ribCount: 4,
        };

      case "engine-twin":
        return {
          heightClass: "h-[300px] sm:h-[338px] md:h-[372px]",
          widthClass: "w-[50px] sm:w-[60px] md:w-[68px]",
          gradient: "linear-gradient(180deg, #232833 0%, #181B22 30%, #101217 70%, #090B0E 100%)",
          topBadge: (
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] font-bold text-slate-300">02</span>
              <span className="w-2 h-2 rounded-full border border-amber-400/80 bg-amber-500/20 mt-0.5" />
            </div>
          ),
          verticalTitle: "ENGINE TWIN",
          verticalSubtitle: "AEROSPACE UAV",
          titleStyle: "font-mono text-slate-100 font-extrabold tracking-wider text-xs sm:text-sm md:text-[15px]",
          bottomMark: (
            <span className="font-mono text-[8px] text-slate-400 tracking-wider">
              VOL. XII
            </span>
          ),
          ribCount: 3,
        };

      case "farmer-pest":
        return {
          heightClass: "h-[270px] sm:h-[305px] md:h-[335px]", // Shorter volume (like Verve Maison in ref image)
          widthClass: "w-[48px] sm:w-[56px] md:w-[64px]",
          gradient: "linear-gradient(180deg, #741D29 0%, #52121D 30%, #380A12 70%, #20040A 100%)",
          topBadge: (
            <div className="px-1.5 py-0.5 rounded border border-amber-400/50 bg-black/30 font-mono text-[8px] text-amber-200 font-bold">
              AI-CV
            </div>
          ),
          verticalTitle: "Farmer Pest",
          verticalSubtitle: "AGROTECH",
          titleStyle: "font-serif italic text-amber-200 font-semibold tracking-wide text-xs sm:text-sm md:text-base",
          bottomMark: (
            <Leaf className="w-3.5 h-3.5 text-amber-400/90" />
          ),
          ribCount: 3,
        };

      case "weather-comfort":
        return {
          heightClass: "h-[330px] sm:h-[370px] md:h-[405px]", // Taller grand volume (like Geodesic in ref image)
          widthClass: "w-[58px] sm:w-[68px] md:w-[78px]",
          gradient: "linear-gradient(180deg, #17422A 0%, #102F1E 30%, #0A2014 70%, #05130B 100%)",
          topBadge: (
            <span className="font-mono text-[7px] uppercase tracking-widest text-emerald-200/90 font-bold">
              CARTOGRAPHY
            </span>
          ),
          verticalTitle: "Weather Comfort",
          verticalSubtitle: "PLANETARY VISUALIZER",
          titleStyle: "font-serif text-white font-extrabold tracking-normal text-sm sm:text-base md:text-lg",
          bottomMark: (
            <span className="font-mono text-[8px] text-emerald-300/80 font-bold tracking-wider">
              V.2.4
            </span>
          ),
          ribCount: 4,
        };

      case "garments-ecommerce":
      default:
        return {
          heightClass: "h-[290px] sm:h-[325px] md:h-[358px]",
          widthClass: "w-[50px] sm:w-[60px] md:w-[68px]",
          gradient: "linear-gradient(180deg, #4F3C2C 0%, #3B2B1E 30%, #271C13 70%, #17100B 100%)",
          topBadge: (
            <Sun className="w-3.5 h-3.5 text-amber-300" />
          ),
          verticalTitle: "GARMENTS E-COM",
          verticalSubtitle: "COMMERCE SPEC",
          titleStyle: "font-mono text-amber-100 font-bold tracking-wider text-xs sm:text-sm md:text-[14px]",
          bottomMark: (
            <span className="font-mono text-[8px] text-amber-400/70 font-semibold tracking-wider">
              V.1.0
            </span>
          ),
          ribCount: 3,
        };
    }
  };

  const config = getSpineConfig(book.id);

  return (
    <div className="flex flex-col items-center group relative perspective-1000 flex-shrink-0 select-none">
      {/* 3D Interactive Physical Book Spine */}
      <motion.div
        role="button"
        tabIndex={0}
        aria-label={`Open Volume ${book.volumeNumber}: ${book.name}`}
        onClick={() => onExtract(book)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onExtract(book);
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          y: -22,
          z: 28,
          scale: 1.025,
          transition: { type: "spring", stiffness: 350, damping: 20 },
        }}
        whileTap={{ scale: 0.98 }}
        className="relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-t-sm rounded-b-none transform-gpu"
      >
        {/* Silk Bookmark Ribbon hanging over top of spine (for Book 1) */}
        {config.hasRibbon && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3.5 h-6 bg-[#9E2A2B] shadow-md z-30 rounded-t-xs flex items-end justify-center pointer-events-none">
            <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[5px] border-b-black/30" />
          </div>
        )}

        {/* Physical Vertical Spine Cylinder */}
        <div
          className={`${config.heightClass} ${config.widthClass} rounded-t-sm rounded-b-none relative flex flex-col justify-between py-4 px-1.5 overflow-hidden shadow-2xl transition-all duration-300 ${config.borderStyle || ""}`}
          style={{
            background: config.gradient,
            boxShadow: isHovered
              ? "0 28px 40px -10px rgba(0, 0, 0, 0.85), 0 10px 20px -5px rgba(245, 158, 11, 0.25), inset 3px 0 6px rgba(255, 255, 255, 0.15), inset -3px 0 6px rgba(0, 0, 0, 0.4)"
              : "0 18px 30px -8px rgba(0, 0, 0, 0.7), inset 2px 0 4px rgba(255, 255, 255, 0.1), inset -2px 0 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Cylinder 3D Spine Lighting Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.18) 22%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.4) 100%)",
            }}
          />

          {/* Raised Horizontal Ribs (Spine Bands) */}
          <div className="absolute top-12 left-0 right-0 h-1.5 bg-black/40 border-t border-white/20 border-b border-black/60 shadow-xs pointer-events-none" />
          <div className="absolute top-20 left-0 right-0 h-1.5 bg-black/40 border-t border-white/20 border-b border-black/60 shadow-xs pointer-events-none" />
          <div className="absolute bottom-14 left-0 right-0 h-1.5 bg-black/40 border-t border-white/20 border-b border-black/60 shadow-xs pointer-events-none" />

          {/* Top Section: Emblem / Classification */}
          <div className="relative z-10 flex flex-col items-center pt-1">
            {config.topBadge}
          </div>

          {/* Center Section: Vertical Spine Typography */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center h-full max-h-[60%]">
            <div
              className="flex items-center justify-center transform -rotate-90 origin-center whitespace-nowrap cursor-pointer select-none"
              style={{
                filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8))",
              }}
            >
              <span className={config.titleStyle}>{config.verticalTitle}</span>
              {config.verticalSubtitle && (
                <span className="font-mono text-[7px] sm:text-[8px] text-white/50 uppercase tracking-widest ml-2.5">
                  {config.verticalSubtitle}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Section: Roman Numeral / Edition Monogram */}
          <div className="relative z-10 flex flex-col items-center pb-1">
            {config.bottomMark}
          </div>
        </div>

        {/* Hover Action Pill Tooltip */}
        <div
          className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#18110D] text-amber-200 border border-amber-500/40 text-[9px] font-mono font-bold tracking-wider shadow-2xl flex items-center gap-1.5 transition-all duration-200 pointer-events-none z-40 whitespace-nowrap ${
            isHovered
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-1"
          }`}
        >
          <BookOpen className="w-3 h-3 text-amber-400" />
          <span>OPEN MAGAZINE</span>
        </div>
      </motion.div>

      {/* Book Footnote Title Below Shelf (for mobile accessibility) */}
      <div className="mt-2 text-center md:hidden">
        <p className="text-[10px] font-mono font-bold text-amber-200/90 truncate max-w-[70px]">
          {book.name}
        </p>
      </div>
    </div>
  );
}
