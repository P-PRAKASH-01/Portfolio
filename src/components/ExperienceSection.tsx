"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  useMotionValue,
} from "motion/react";
import { Compass } from "lucide-react";
import { TIMELINE_MILESTONES } from "@/data/timeline";
import { TimelineMilestone } from "@/types";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const staticProgress = useMotionValue(1);

  // Scroll synchronization with balanced offset for smooth entry and completion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    restDelta: 0.001,
  });

  // Effective progress considering reduced motion accessibility
  const activeProgress = shouldReduceMotion ? staticProgress : smoothProgress;

  // =========================================================================
  // MATHEMATICAL GEOMETRY FOR DESKTOP S-CURVE (viewBox: 0 0 1000 880)
  // Perfectly calibrated cubic Bézier curve with zero text collision zones
  // =========================================================================
  const desktopSvgPath =
    "M 60,350 C 110,350 160,350 220,350 C 400,340 600,340 780,350 C 950,360 950,560 780,570 C 600,580 400,580 220,570 C 70,560 60,760 170,810";

  // Coordinates strictly mapped to the 1000 x 880 viewBox
  const desktopNodes: Record<
    string,
    {
      x: number;
      y: number;
      connectY: number;
      side: "above" | "below";
      threshold: number;
    }
  > = {
    "milestone-2024": { x: 220, y: 350, connectY: 215, side: "above", threshold: 0.12 },
    "milestone-2025": { x: 780, y: 350, connectY: 215, side: "above", threshold: 0.42 },
    "milestone-2026": { x: 780, y: 570, connectY: 670, side: "below", threshold: 0.68 },
    "milestone-2027": { x: 220, y: 570, connectY: 670, side: "below", threshold: 0.90 },
  };

  // =========================================================================
  // MATHEMATICAL GEOMETRY FOR MOBILE VERTICAL SERPENTINE WAVE (0 0 80 820)
  // =========================================================================
  const mobileSvgPath =
    "M 30,30 C 30,65 30,85 30,110 C 30,155 58,165 58,210 C 58,255 30,265 30,310 C 30,355 58,365 58,410 C 58,455 30,465 30,510 C 30,555 58,565 58,610 C 58,655 30,665 30,710 C 30,750 30,775 30,800";

  const mobileNodes: Record<string, { x: number; y: number; threshold: number }> = {
    "milestone-2024": { x: 30, y: 110, threshold: 0.12 },
    "milestone-2025": { x: 30, y: 310, threshold: 0.38 },
    "milestone-2026": { x: 30, y: 510, threshold: 0.65 },
    "milestone-2027": { x: 30, y: 710, threshold: 0.88 },
  };

  return (
    <motion.section
      id="experience"
      ref={containerRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 sm:py-32 bg-transparent text-white relative overflow-hidden border-t border-white/10"
      aria-label="Experience and Career Milestones Timeline"
    >
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7018]/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Generous Separation to Prevent Any Card Overlap */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-24 lg:mb-28 gap-6">
          <div>
            <div className="section-tag text-[#FF7018] mb-2 font-mono flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF7018] animate-pulse" />
              <span>{"// 02. CURVED JOURNEY // TRAJECTORY"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
              Experience &amp; Milestones
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#B5B5BE] max-w-2xl leading-relaxed">
              A continuous trajectory charting academic foundations, systems development, competitive hackathons, and forward professional horizons.
            </p>
          </div>

          {/* Quick Guide Telemetry Pill */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15161D] border border-white/10 text-xs font-mono text-[#B5B5BE] w-fit select-none">
            <Compass className="w-3.5 h-3.5 text-[#FF7018] flex-shrink-0" />
            <span>Interactive Scroll Timeline &bull; Select Nodes</span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* DESKTOP & TABLET S-CURVE VIEW (>= 768px)                          */}
        {/* Proportional aspect ratio container locks SVG to HTML coordinates */}
        {/* ================================================================= */}
        <div className="hidden md:block relative w-full aspect-[1000/880] max-h-[880px] mx-auto select-none pt-2">
          {/* SVG Canvas with Glowing Bézier Path */}
          <svg
            viewBox="0 0 1000 880"
            className="w-full h-full absolute inset-0 overflow-visible pointer-events-none z-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Subtle Precision Glow Filter (No blown-out bloom) */}
              <filter id="curve-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Luminous Node Halo Filter */}
              <filter id="node-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Faint Architectural Guide Path */}
            <path
              d={desktopSvgPath}
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Progressively Drawn Glowing White S-Curve */}
            <motion.path
              d={desktopSvgPath}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#curve-glow)"
              style={{
                pathLength: activeProgress,
              }}
            />

            {/* SVG Interactive Milestone Nodes & Connectors */}
            {TIMELINE_MILESTONES.map((milestone) => {
              const node = desktopNodes[milestone.id];
              if (!node) return null;

              return (
                <DesktopSvgNode
                  key={milestone.id}
                  milestone={milestone}
                  node={node}
                  progress={activeProgress}
                  isHovered={hoveredMilestone === milestone.id}
                  onHover={() => setHoveredMilestone(milestone.id)}
                  onLeave={() => setHoveredMilestone(null)}
                />
              );
            })}
          </svg>

          {/* =============================================================== */}
          {/* 4 QUADRANT MILESTONE CONTENT CARDS (Zero Overlay, Clean Layers) */}
          {/* =============================================================== */}

          {/* Quadrant 1: Milestone 2024 (Upper-Left, Above Curve) */}
          <div
            className="absolute top-[3%] left-[6%] lg:left-[8%] xl:left-[10%] w-[310px] lg:w-[350px] z-10"
            onMouseEnter={() => setHoveredMilestone("milestone-2024")}
            onMouseLeave={() => setHoveredMilestone(null)}
          >
            <DesktopMilestoneCard
              milestone={TIMELINE_MILESTONES[0]}
              isHovered={hoveredMilestone === "milestone-2024"}
              side="above"
              align="left"
              threshold={desktopNodes["milestone-2024"].threshold}
              progress={activeProgress}
              onSelect={() => setHoveredMilestone("milestone-2024")}
            />
          </div>

          {/* Quadrant 2: Milestone 2025 (Upper-Right, Above Curve) */}
          <div
            className="absolute top-[3%] right-[6%] lg:right-[8%] xl:right-[10%] w-[310px] lg:w-[350px] z-10"
            onMouseEnter={() => setHoveredMilestone("milestone-2025")}
            onMouseLeave={() => setHoveredMilestone(null)}
          >
            <DesktopMilestoneCard
              milestone={TIMELINE_MILESTONES[1]}
              isHovered={hoveredMilestone === "milestone-2025"}
              side="above"
              align="right"
              threshold={desktopNodes["milestone-2025"].threshold}
              progress={activeProgress}
              onSelect={() => setHoveredMilestone("milestone-2025")}
            />
          </div>

          {/* Quadrant 3: Milestone 2026 (Lower-Right, Below Curve) */}
          <div
            className="absolute top-[77%] right-[6%] lg:right-[8%] xl:right-[10%] w-[310px] lg:w-[350px] z-10"
            onMouseEnter={() => setHoveredMilestone("milestone-2026")}
            onMouseLeave={() => setHoveredMilestone(null)}
          >
            <DesktopMilestoneCard
              milestone={TIMELINE_MILESTONES[2]}
              isHovered={hoveredMilestone === "milestone-2026"}
              side="below"
              align="right"
              threshold={desktopNodes["milestone-2026"].threshold}
              progress={activeProgress}
              onSelect={() => setHoveredMilestone("milestone-2026")}
            />
          </div>

          {/* Quadrant 4: Milestone 2027 (Lower-Left, Below Curve) */}
          <div
            className="absolute top-[77%] left-[6%] lg:left-[8%] xl:left-[10%] w-[310px] lg:w-[350px] z-10"
            onMouseEnter={() => setHoveredMilestone("milestone-2027")}
            onMouseLeave={() => setHoveredMilestone(null)}
          >
            <DesktopMilestoneCard
              milestone={TIMELINE_MILESTONES[3]}
              isHovered={hoveredMilestone === "milestone-2027"}
              side="below"
              align="left"
              threshold={desktopNodes["milestone-2027"].threshold}
              progress={activeProgress}
              onSelect={() => setHoveredMilestone("milestone-2027")}
            />
          </div>
        </div>

        {/* ================================================================= */}
        {/* MOBILE VERTICAL SERPENTINE WAVE TIMELINE (< 768px)               */}
        {/* ================================================================= */}
        <div className="block md:hidden relative pl-2 pr-1 py-4">
          <div className="relative flex">
            {/* Left Vertical SVG Serpentine Wave Spine */}
            <div className="w-14 flex-shrink-0 relative">
              <svg
                viewBox="0 0 60 820"
                className="w-full h-full overflow-visible pointer-events-none"
                preserveAspectRatio="none"
              >
                {/* Guide Background Path */}
                <path
                  d={mobileSvgPath}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Progressively Drawn Wave */}
                <motion.path
                  d={mobileSvgPath}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#curve-glow)"
                  style={{
                    pathLength: activeProgress,
                  }}
                />

                {/* Mobile Nodes */}
                {TIMELINE_MILESTONES.map((m) => {
                  const n = mobileNodes[m.id];
                  if (!n) return null;

                  return (
                    <g key={m.id}>
                      {/* Node Outer Ring */}
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r="7"
                        fill="#040508"
                        stroke="rgba(255, 255, 255, 0.8)"
                        strokeWidth="2"
                      />
                      {/* Inner Dot */}
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r="3.5"
                        fill="#ffffff"
                        filter="url(#curve-glow)"
                      />
                      {/* Horizontal Connector Branch */}
                      <line
                        x1={n.x + 8}
                        y1={n.y}
                        x2={56}
                        y2={n.y}
                        stroke="rgba(255, 255, 255, 0.35)"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Mobile Milestones Content Column */}
            <div className="flex-1 flex flex-col justify-between py-2 space-y-12">
              {TIMELINE_MILESTONES.map((milestone) => (
                <article
                  key={milestone.id}
                  className="pl-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-lg p-2 transition-colors"
                  tabIndex={0}
                  aria-label={`${milestone.year} milestone: ${milestone.title}`}
                >
                  {/* Year & Badge Header */}
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="font-mono text-2xl font-extrabold text-white tracking-wider">
                      {milestone.year}
                    </span>
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded font-bold ${
                        milestone.isUpcoming
                          ? "border border-amber-400/40 text-amber-300 bg-amber-400/10 shadow-[0_0_8px_rgba(245,158,11,0.2)]"
                          : "border border-white/20 text-stone-300 bg-white/5"
                      }`}
                    >
                      {milestone.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-white tracking-tight leading-snug mb-2 font-sans">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-400 leading-relaxed mb-3 font-sans">
                    {milestone.description}
                  </p>

                  {/* Highlight Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {milestone.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-stone-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Section Footer Ledger */}
        <div className="mt-16 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>CONTINUOUS LEARNING CHRONOLOGY &bull; 2024 &rarr; 2027</span>
          </div>
          <div className="text-[11px] text-stone-400">
            <span>DISCIPLINE: COMPUTER SCIENCE ENGINEERING (AIML)</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ===========================================================================
// SUB-COMPONENT: Desktop SVG Node with Scroll & Hover Integration
// ===========================================================================
function DesktopSvgNode({
  milestone,
  node,
  progress,
  isHovered,
  onHover,
  onLeave,
}: {
  milestone: TimelineMilestone;
  node: { x: number; y: number; connectY: number; side: "above" | "below"; threshold: number };
  progress: any;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const lineOpacity = useTransform(
    progress,
    [node.threshold - 0.05, node.threshold],
    [0.2, 0.65]
  );
  const nodeScale = useTransform(
    progress,
    [node.threshold - 0.05, node.threshold],
    [0.75, 1]
  );
  const innerDotFill = useTransform(
    progress,
    [node.threshold - 0.05, node.threshold],
    ["#71717a", "#ffffff"]
  );

  return (
    <g
      className="transition-all duration-300 pointer-events-auto cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onHover}
      role="button"
      tabIndex={0}
      aria-label={`Milestone Node ${milestone.year}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onHover();
        }
      }}
    >
      {/* Precision Vertical Connector Line */}
      <motion.line
        x1={node.x}
        y1={node.y}
        x2={node.x}
        y2={node.connectY}
        stroke={isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.45)"}
        strokeWidth={isHovered ? "2" : "1.5"}
        strokeDasharray={isHovered ? "none" : "3 3"}
        filter={isHovered ? "url(#curve-glow)" : undefined}
        style={{
          opacity: isHovered ? 1 : lineOpacity,
        }}
        className="transition-all duration-200"
      />

      {/* Terminal Dot at the content connection anchor */}
      <circle
        cx={node.x}
        cy={node.connectY}
        r={isHovered ? "3.5" : "2.5"}
        fill={isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.5)"}
        className="transition-all duration-200"
      />

      {/* Outer Glow Halo on Hover */}
      {isHovered && (
        <circle
          cx={node.x}
          cy={node.y}
          r="18"
          fill="rgba(255, 255, 255, 0.16)"
          filter="url(#node-glow)"
        />
      )}

      {/* Node Outer Ring */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={isHovered ? "9" : "7"}
        fill="#040508"
        stroke={isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.8)"}
        strokeWidth="2"
        style={{ scale: isHovered ? 1.25 : nodeScale }}
        className="transition-all duration-200 origin-center"
      />

      {/* Inner Radiant Dot */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={isHovered ? "5.5" : "3.5"}
        filter="url(#curve-glow)"
        style={{
          fill: isHovered ? "#ffffff" : innerDotFill,
        }}
        className="transition-all duration-200"
      />
    </g>
  );
}

// ===========================================================================
// SUB-COMPONENT: Desktop Milestone Card with Refined Editorial Typography
// ===========================================================================
function DesktopMilestoneCard({
  milestone,
  isHovered,
  side,
  align,
  threshold,
  progress,
  onSelect,
}: {
  milestone: TimelineMilestone;
  isHovered: boolean;
  side: "above" | "below";
  align: "left" | "right";
  threshold: number;
  progress: any;
  onSelect: () => void;
}) {
  const scrollOpacity = useTransform(progress, [threshold - 0.06, threshold], [0.35, 1]);
  const scrollY = useTransform(
    progress,
    [threshold - 0.06, threshold],
    [side === "above" ? 10 : -10, 0]
  );

  return (
    <motion.article
      tabIndex={0}
      role="button"
      aria-label={`Milestone ${milestone.year}: ${milestone.title}`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      style={{
        opacity: isHovered ? 1 : scrollOpacity,
        y: scrollY,
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-lg p-2 ${
        align === "right" ? "text-right md:items-end" : "text-left md:items-start"
      } flex flex-col`}
    >
      {/* Year & Badge Row */}
      <div
        className={`flex items-center gap-2.5 mb-1.5 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <span
          className={`font-mono text-3xl lg:text-4xl font-extrabold tracking-wider transition-colors duration-200 ${
            isHovered
              ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
              : "text-stone-200"
          }`}
        >
          {milestone.year}
        </span>

        <span
          className={`text-[9px] lg:text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded transition-all duration-200 ${
            milestone.isUpcoming
              ? "border border-amber-400/50 text-amber-300 bg-amber-400/10 font-bold shadow-[0_0_10px_rgba(245,158,11,0.2)]"
              : isHovered
              ? "border border-white/40 text-white bg-white/10"
              : "border border-white/20 text-stone-400 bg-white/5"
          }`}
        >
          {milestone.badge}
        </span>
      </div>

      {/* Headline Title */}
      <h3
        className={`text-sm lg:text-[15px] font-bold tracking-tight leading-snug mb-1.5 transition-colors duration-200 font-sans ${
          isHovered ? "text-white drop-shadow-sm" : "text-stone-100"
        }`}
      >
        {milestone.title}
      </h3>

      {/* Description Body */}
      <p className="text-xs text-stone-400 leading-relaxed font-sans font-normal">
        {milestone.description}
      </p>

      {/* Highlight Tags */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0.85,
        }}
        className={`mt-2.5 flex flex-wrap gap-1.5 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {milestone.highlights.map((highlight, idx) => (
          <span
            key={idx}
            className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wide transition-all duration-200 ${
              isHovered
                ? "bg-white/15 border border-white/30 text-white shadow-xs"
                : "bg-white/5 border border-white/10 text-stone-400"
            }`}
          >
            {highlight}
          </span>
        ))}
      </motion.div>
    </motion.article>
  );
}
