"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Award, Eye } from "lucide-react";
import { CERTIFICATES } from "@/data/portfolio";
import { Certificate } from "@/types";
import { CertificateModal } from "./CertificateModal";

export function CertificatesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const scroll = (direction: "prev" | "next") => {
    if (!carouselRef.current) return;
    const offset = direction === "next" ? 360 : -360;
    carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-white/10 bg-transparent relative"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="section-tag text-[#FF7018] mb-2">
              <span>{"// 03. VERIFIED CREDENTIALS"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-serif">
              Certificates &amp; Credentials
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#B5B5BE] max-w-xl">
              Accredited certifications across cloud infrastructure, database management, programming paradigms, and national hackathons.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("prev")}
              className="w-10 h-10 rounded-md border border-white/10 hover:border-[#FF7018]/50 bg-[#15161D] flex items-center justify-center text-[#B5B5BE] hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Scroll previous certificates"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-10 h-10 rounded-md border border-[#FF7018] bg-[#FF7018] text-white flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 hover:bg-[#EA5E08] shadow-[0_0_15px_rgba(255,112,24,0.3)] cursor-pointer"
              aria-label="Scroll next certificates"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-5 pb-6 snap-x snap-mandatory hide-scrollbar"
        >
          {CERTIFICATES.map((cert, index) => {
            const certIndex = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={cert.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[360px] snap-start bg-[#15161D] border border-white/10 hover:border-[#FF7018]/50 rounded-xl p-4 flex flex-col justify-between group shadow-technical hover:shadow-technical-elevated cursor-pointer transition-colors duration-200"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div>
                  {/* Card Index Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-[11px] text-[#777984]">
                    <span className="flex items-center gap-1 font-semibold text-[#B5B5BE]">
                      <Award className="w-3.5 h-3.5 text-[#FF7018]" />
                      <span>CERT_{certIndex}</span>
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#101116] border border-white/5 text-[10px] text-[#B5B5BE]">
                      {cert.year}
                    </span>
                  </div>

                  {/* Thumbnail Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3.5 bg-[#101116] border border-white/10">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 280px, 360px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#090A10]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FF7018] text-white font-mono text-xs font-bold shadow-lg">
                        <Eye className="w-3.5 h-3.5" /> Inspect
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-2 mb-1 group-hover:text-[#FF7018] transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Issuer Footer */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#B5B5BE]">
                  <span className="truncate pr-2">{cert.issuer}</span>
                  <span className="text-[10px] text-emerald-400 flex-shrink-0 font-semibold">[VERIFIED]</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Preview Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </motion.section>
  );
}
