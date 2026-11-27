"use client";

import React, { useMemo } from "react";

export function GlobalBackground() {
  // Statically seed 24 subtle ambient particles with diverse positions, sizes, and colors
  // Keeping this deterministic prevents hydration mismatch and avoids continuous React re-renders
  const particles = useMemo(() => [
    { id: 1, left: "12%", top: "8%", size: 2.5, color: "#FF7018", opacity: 0.35, duration: 18, delay: 0 },
    { id: 2, left: "28%", top: "15%", size: 1.5, color: "#EF4444", opacity: 0.25, duration: 22, delay: 3 },
    { id: 3, left: "75%", top: "12%", size: 3.0, color: "#FF7018", opacity: 0.4, duration: 16, delay: 1 },
    { id: 4, left: "88%", top: "22%", size: 2.0, color: "#FF7018", opacity: 0.3, duration: 20, delay: 4 },
    { id: 5, left: "8%", top: "35%", size: 1.8, color: "#EF4444", opacity: 0.25, duration: 24, delay: 2 },
    { id: 6, left: "42%", top: "28%", size: 2.2, color: "#FF7018", opacity: 0.3, duration: 19, delay: 5 },
    { id: 7, left: "62%", top: "38%", size: 1.5, color: "#FF7018", opacity: 0.2, duration: 21, delay: 7 },
    { id: 8, left: "92%", top: "45%", size: 2.5, color: "#EF4444", opacity: 0.25, duration: 25, delay: 1 },
    { id: 9, left: "18%", top: "52%", size: 2.0, color: "#FF7018", opacity: 0.35, duration: 17, delay: 6 },
    { id: 10, left: "34%", top: "62%", size: 2.8, color: "#FF7018", opacity: 0.3, duration: 23, delay: 3 },
    { id: 11, left: "82%", top: "58%", size: 1.8, color: "#EF4444", opacity: 0.25, duration: 20, delay: 8 },
    { id: 12, left: "68%", top: "68%", size: 2.2, color: "#FF7018", opacity: 0.35, duration: 18, delay: 4 },
    { id: 13, left: "14%", top: "78%", size: 2.5, color: "#FF7018", opacity: 0.25, duration: 22, delay: 2 },
    { id: 14, left: "48%", top: "75%", size: 1.5, color: "#EF4444", opacity: 0.2, duration: 26, delay: 5 },
    { id: 15, left: "86%", top: "82%", size: 3.0, color: "#FF7018", opacity: 0.35, duration: 17, delay: 1 },
    { id: 16, left: "24%", top: "90%", size: 2.0, color: "#FF7018", opacity: 0.3, duration: 21, delay: 7 },
    { id: 17, left: "58%", top: "88%", size: 1.8, color: "#EF4444", opacity: 0.25, duration: 24, delay: 3 },
    { id: 18, left: "78%", top: "94%", size: 2.4, color: "#FF7018", opacity: 0.3, duration: 19, delay: 6 },
  ], []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#090A10]"
    >
      {/* =================================================================== */}
      {/* LAYER 1: ULTRA-SUBTLE TECHNICAL ENGINEERING GRID                     */}
      {/* =================================================================== */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)",
        }}
      />

      {/* =================================================================== */}
      {/* LAYER 2: AMBIENT STRATEGIC RADIAL LIGHTING (Orange & Red Glows)     */}
      {/* =================================================================== */}
      {/* Hero Accent: Warm Orange Atmospheric Bloom (Top Right) */}
      <div
        className="absolute -top-[10%] right-[5%] w-[650px] sm:w-[850px] h-[550px] sm:h-[700px] rounded-full blur-[140px] pointer-events-none animate-ambient-breathe"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 112, 24, 0.08) 0%, rgba(255, 112, 24, 0.02) 45%, transparent 70%)",
        }}
      />

      {/* Trajectory Accent: Deep Red Strategic Shadow (Mid Left) */}
      <div
        className="absolute top-[35%] -left-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[160px] pointer-events-none animate-ambient-breathe"
        style={{
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.015) 50%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />

      {/* Lower Section Accent: Controlled Amber/Orange Core (Bottom Right) */}
      <div
        className="absolute -bottom-[10%] right-[15%] w-[600px] sm:w-[800px] h-[500px] sm:h-[700px] rounded-full blur-[150px] pointer-events-none animate-ambient-breathe"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 112, 24, 0.06) 0%, rgba(255, 112, 24, 0.01) 50%, transparent 70%)",
          animationDelay: "-10s",
        }}
      />

      {/* =================================================================== */}
      {/* LAYER 3: RESTRAINED FLOATING AMBIENT PARTICLES                      */}
      {/* =================================================================== */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-particle-drift"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* =================================================================== */}
      {/* LAYER 4: ARCHITECTURAL LIGHT VIGNETTE OVERLAY                       */}
      {/* =================================================================== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(9, 10, 16, 0.6) 100%)",
        }}
      />
    </div>
  );
}
