"use client";

import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import dynamic from "next/dynamic";
import {
  Bookmark,
  BookOpen,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Search,
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
} from "lucide-react";
import { ProjectBook } from "@/types";

// Dynamically load HTMLFlipBook to disable SSR
const HTMLFlipBook = dynamic(
  () => import("react-pageflip").then((mod) => (mod.default ? mod.default : mod)),
  {
    ssr: false,
    loading: () => (
      <div className="w-[340px] sm:w-[460px] md:w-[880px] h-[520px] sm:h-[580px] md:h-[620px] rounded-xl bg-[#FBF9F5] border border-stone-300/80 flex flex-col items-center justify-center font-mono text-xs text-stone-600 shadow-xl animate-pulse">
        <BookOpen className="w-8 h-8 text-[#7C4A2D] mb-3 animate-bounce" />
        <span className="font-serif italic text-base text-stone-800">Binding Archival Cold-Pressed Monograph...</span>
        <span className="text-[10px] text-stone-400 mt-1">{"160 GSM ARCHIVAL // COLD PRESSED LINEN"}</span>
      </div>
    ),
  }
) as any;

export interface FlipBookMagazineRef {
  flipNext: () => void;
  flipPrev: () => void;
  flip: (pageIndex: number) => void;
  getCurrentPageIndex: () => number;
}

interface FlipBookMagazineProps {
  book: ProjectBook;
  onPageChange?: (page: number, totalPages: number) => void;
  onNextVolume?: () => void;
  onPrevVolume?: () => void;
}

// Page Wrapper forwarding ref to DOM element for react-pageflip
interface PageProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  density?: "hard" | "soft";
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, className = "", style, density = "soft" }, ref) => {
    return (
      <div
        ref={ref}
        data-density={density}
        className={`page relative w-full h-full select-none overflow-hidden ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);
Page.displayName = "Page";

export const FlipBookMagazine = forwardRef<FlipBookMagazineRef, FlipBookMagazineProps>(
  ({ book, onPageChange, onNextVolume, onPrevVolume }, ref) => {
    const flipBookRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
      width: 450,
      height: 620,
    });

    // Detect mobile/tablet viewport and calculate ideal page dimensions
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const mobile = width < 768;
        setIsMobile(mobile);

        if (mobile) {
          const calculatedWidth = Math.min(width - 24, 380);
          const calculatedHeight = Math.min(height - 40, 590);
          setDimensions({
            width: Math.max(calculatedWidth, 300),
            height: Math.max(calculatedHeight, 480),
          });
        } else {
          // Available height within viewport
          const availableHeight = height - 40;
          const calculatedHeight = Math.min(availableHeight, 630);
          const calculatedWidth = Math.min(Math.round(calculatedHeight * 0.72), 460);
          setDimensions({
            width: Math.max(calculatedWidth, 380),
            height: Math.max(calculatedHeight, 520),
          });
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Expose flip controls to parent component
    useImperativeHandle(ref, () => ({
      flipNext: () => {
        try {
          flipBookRef.current?.pageFlip()?.flipNext();
        } catch (e) {
          console.warn("flipNext warning:", e);
        }
      },
      flipPrev: () => {
        try {
          flipBookRef.current?.pageFlip()?.flipPrev();
        } catch (e) {
          console.warn("flipPrev warning:", e);
        }
      },
      flip: (pageIndex: number) => {
        try {
          flipBookRef.current?.pageFlip()?.flip(pageIndex);
        } catch (e) {
          console.warn("flip warning:", e);
        }
      },
      getCurrentPageIndex: () => {
        try {
          return flipBookRef.current?.pageFlip()?.getCurrentPageIndex() ?? 0;
        } catch {
          return 0;
        }
      },
    }));

    const handleFlip = (e: { data: number }) => {
      setCurrentPage(e.data);
      if (onPageChange) {
        onPageChange(e.data, 8);
      }
    };


    // Specimen data fallback
    const specimen = book.specimen || {
      folioLeft: "FOLIO 08 • SPECIMEN PLATE",
      artifactTitle: `ARTIFACT // ${book.name.toUpperCase()} SPECIMEN`,
      paperType: "160 GSM Archival\nCOLD PRESSED LINEN",
      image: book.image || "/assets/projects/specimen-prephub.jpg",
      figureCaption: `• Fig. 1.1 — ${book.name} Specimen`,
      gamut: "RGB • DCI-P3 Specimen",
      quote: "“Calm achieved not through absence, but through architectural intention.”",
      quoteSource: "— Engineering Fieldnote Codex",
      chromatics: [
        { name: "Umber", hex: "#6F432A" },
        { name: "Terracotta", hex: "#A14C28" },
        { name: "Parchment", hex: "#FBF9F5" },
      ],
      editionStamp: "ED. 01 / 2024",
      badge: "DESIGN DIRECTION",
      badgeBg: "#7C4A2D",
      badgeText: "#FFFFFF",
      folioRight: "FOLIO 09 • MONOGRAPH",
      phase: "CASE STUDY ANALYSIS • PHASE I",
      monographTitle: book.name,
      role: { title: "Lead Engineer", subtitle: "Architecture & Systems" },
      cycle: { duration: "3 Months", subtitle: "Concept to Production" },
      metric: { value: "98/100", label: "Quality Metric" },
      dropCap: book.name.charAt(0) || "M",
      monographParagraphs: [
        book.summary.problem,
        book.summary.solution,
      ],
      tags: book.tech,
      readingDuration: "5 min reading duration",
    };

    return (
      <div className="relative flex items-center justify-center w-full max-w-full overflow-hidden">
        {/* Soft radial backdrop */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

        {/* Floating Left Page Pill Button: < PREV */}
        <button
          onClick={() => flipBookRef.current?.pageFlip()?.flipPrev()}
          disabled={currentPage === 0}
          className="hidden md:flex absolute left-2 lg:left-4 z-40 flex-col items-center justify-center px-3 py-4 rounded-xl bg-white/95 hover:bg-white text-stone-700 hover:text-stone-950 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl border border-stone-200/90 backdrop-blur-md font-mono text-[9px] font-bold tracking-widest cursor-pointer transition-all transform hover:scale-105 active:scale-95"
          title="Previous page (or use Left Arrow key)"
        >
          <ChevronLeft className="w-4 h-4 mb-0.5 text-stone-500" />
          <span>PREV</span>
        </button>

        {/* Floating Right Page Pill Button: NEXT > */}
        <button
          onClick={() => flipBookRef.current?.pageFlip()?.flipNext()}
          disabled={currentPage >= 7}
          className="hidden md:flex absolute right-2 lg:right-4 z-40 flex-col items-center justify-center px-3 py-4 rounded-xl bg-white/95 hover:bg-white text-stone-700 hover:text-stone-950 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl border border-stone-200/90 backdrop-blur-md font-mono text-[9px] font-bold tracking-widest cursor-pointer transition-all transform hover:scale-105 active:scale-95"
          title="Next page (or use Right Arrow key)"
        >
          <ChevronRight className="w-4 h-4 mb-0.5 text-stone-500" />
          <span>NEXT</span>
        </button>

        {/* Main 3D HTMLFlipBook (8 pages total, zero-scroll fixed layout) */}
        <HTMLFlipBook
          ref={flipBookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={300}
          maxWidth={500}
          minHeight={460}
          maxHeight={680}
          drawShadow={true}
          maxShadowOpacity={0.6}
          showCover={true}
          mobileScrollSupport={true}
          usePortrait={isMobile}
          flippingTime={900}
          useMouseEvents={true}
          swipeDistance={25}
          showPageCorners={true}
          disableFlipByClick={false}
          clickEventForward={true}
          onFlip={handleFlip}
          className="shadow-2xl rounded-r-lg"
          style={{ margin: "0 auto" }}
        >
          {/* =================================================================== */}
          {/* PAGE 1 (Index 0): FRONT HARDCOVER (Single page, showCover=true)     */}
          {/* =================================================================== */}
          <Page density="hard" className="rounded-r-xl rounded-l-sm border-t border-r border-b border-white/20 shadow-2xl">
            <div
              className="w-full h-full p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden"
              style={{
                background: book.theme.coverGradient,
                color: book.theme.coverText,
              }}
            >
              {/* Spine Depth Shading */}
              <div className="absolute left-0 top-0 bottom-0 w-6 book-spine-shadow pointer-events-none" />
              <div className="absolute left-6 top-0 bottom-0 w-px bg-white/15 pointer-events-none" />

              {/* Cover Top Header */}
              <div className="pl-4 flex items-center justify-between font-mono text-xs">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-white/15 border border-white/20 text-white">
                  {book.volumeNumber}
                </span>
                <span
                  className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border truncate max-w-[140px]"
                  style={{
                    backgroundColor: book.theme.badgeBg,
                    color: book.theme.badgeText,
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {book.category}
                </span>
              </div>

              {/* Center Typography & Cover Art */}
              <div className="pl-4 my-auto">
                <div
                  className="w-10 h-1 mb-2.5 rounded"
                  style={{ backgroundColor: book.theme.accent }}
                />
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-2 drop-shadow-md">
                  {book.name}
                </h1>
                <p className="font-serif italic text-xs sm:text-sm text-white/85 leading-relaxed max-w-sm mb-3.5">
                  {book.tagline}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {book.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/95 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Cover Invitation */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[10px] font-mono text-white/95 transition-all">
                  <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                  <span>CLICK OR DRAG CORNER TO OPEN →</span>
                </div>
              </div>

              {/* Cover Footer Monogram */}
              <div className="pl-4 pt-3 border-t border-white/20 flex items-center justify-between font-mono text-[10px] text-white/70">
                <div>
                  <span className="block text-[8px] uppercase text-white/50">AUTHOR</span>
                  <span className="font-bold text-white">Prakash P.</span>
                </div>
                <div className="text-right">
                  <span className="block text-[8px] uppercase text-white/50">CLASSIFICATION</span>
                  <span className="text-white/90">{book.edition.split("//")[0].trim()}</span>
                </div>
              </div>

              {/* Right Page Edge Texture */}
              <div className="absolute right-0 top-1 bottom-1 w-2.5 rounded-r book-page-edges pointer-events-none" />
            </div>
          </Page>

          {/* =================================================================== */}
          {/* PAGE 2 (Index 1): FOLIO XX • SPECIMEN PLATE (Left Page of Spread 1) */}
          {/* Strictly fixed height, overflow-hidden, no scrolling               */}
          {/* =================================================================== */}
          <Page density="soft" className="archival-paper archival-gutter-left border-r border-stone-300/80">
            <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Top Header: Folio & Linen Classification */}
                <div className="flex items-start justify-between pb-2 mb-2.5 border-b border-stone-200/90 font-mono text-[10px]">
                  <div>
                    <span className="text-stone-500 font-semibold tracking-wider block text-[9px]">
                      {specimen.folioLeft}
                    </span>
                    <span className="font-serif text-[12px] sm:text-[13px] font-bold text-stone-800 tracking-wide mt-0.5 block truncate max-w-[210px] sm:max-w-[260px]">
                      {specimen.artifactTitle}
                    </span>
                  </div>
                  <div className="text-right text-[8px] text-stone-400 leading-tight">
                    <span className="block">160 GSM Archival</span>
                    <span className="font-bold text-stone-600 uppercase tracking-wider">
                      COLD PRESSED LINEN
                    </span>
                  </div>
                </div>

                {/* Main Specimen Image Card */}
                <div className="relative rounded-lg overflow-hidden border border-stone-300/80 shadow-md bg-stone-100 group aspect-[16/10] w-full mb-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={specimen.image}
                    alt={specimen.artifactTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Top-Right Inspect Pill Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImage(specimen.image);
                    }}
                    className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 hover:bg-white text-stone-800 text-[9px] font-mono font-semibold border border-white/70 shadow-sm flex items-center gap-1 backdrop-blur-sm transition-all cursor-pointer"
                    title="Click to view full-resolution specimen"
                  >
                    <Search className="w-2.5 h-2.5 text-stone-600" />
                    <span>Inspect</span>
                  </button>

                  {/* Bottom-Left Figure Caption */}
                  <div className="absolute bottom-1.5 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white/95 font-mono text-[8px] max-w-[65%] truncate">
                    {specimen.figureCaption}
                  </div>

                  {/* Bottom-Right Gamut Specimen Tag */}
                  <div className="absolute bottom-1.5 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white/80 font-mono text-[8px] uppercase tracking-wider">
                    {specimen.gamut}
                  </div>
                </div>

                {/* Philosophy Manifesto / Quote Card */}
                <div className="rounded-lg p-2.5 sm:p-3 bg-[#F4EFE6] border border-[#E8E0D2] shadow-2xs mb-2">
                  <p className="font-serif italic text-xs sm:text-[13px] text-[#7C4A2D] leading-snug font-medium line-clamp-2">
                    {specimen.quote}
                  </p>
                  <p className="font-mono text-[9px] text-stone-500 mt-1 truncate">
                    {specimen.quoteSource}
                  </p>
                </div>
              </div>

              {/* Bottom: Chromatics Master Ledger */}
              <div className="pt-2 border-t border-stone-200/90 flex items-center justify-between font-mono text-[9px]">
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
                    CHROMATICS MASTER LEDGER
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {specimen.chromatics.map((swatch, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-stone-200/60 text-stone-700 text-[8px]"
                      >
                        <span
                          className="w-2 h-2 rounded-full border border-black/10 flex-shrink-0"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <span className="font-medium">{swatch.name}</span>
                        <span className="text-stone-400">{swatch.hex}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-stone-500 font-semibold text-[8px] whitespace-nowrap pl-1">
                  <span>⏱ {specimen.editionStamp}</span>
                </div>
              </div>
            </div>
          </Page>

          {/* =================================================================== */}
          {/* PAGE 3 (Index 2): FOLIO XX • MONOGRAPH (Right Page of Spread 1)     */}
          {/* Strictly fixed height, overflow-hidden, no scrolling               */}
          {/* =================================================================== */}
          <Page density="soft" className="archival-paper archival-gutter-right border-l border-stone-300/80">
            <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Header: Design Direction Pill & Folio Monograph */}
                <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-stone-200/90 font-mono text-[10px]">
                  <span
                    className="px-2 py-0.5 rounded-full text-white text-[8px] font-bold tracking-wider uppercase shadow-xs"
                    style={{ backgroundColor: specimen.badgeBg || "#7C4A2D" }}
                  >
                    {specimen.badge}
                  </span>
                  <span className="text-stone-500 font-semibold tracking-wider text-[9px]">
                    {specimen.folioRight}
                  </span>
                </div>

                {/* Phase Tag */}
                <p className="font-mono text-[9px] uppercase font-bold tracking-wider text-[#A14C28] mb-0.5">
                  {specimen.phase}
                </p>

                {/* Monograph Title */}
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 leading-tight mb-2 truncate">
                  {specimen.monographTitle}
                </h2>

                {/* 3-Column Metadata Spec Box */}
                <div className="rounded-lg p-2 sm:p-2.5 bg-[#F6F2EB] border border-[#E9E1D4] grid grid-cols-3 gap-1.5 text-left mb-2.5 shadow-2xs">
                  <div>
                    <span className="block text-[7px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                      ROLE
                    </span>
                    <span className="block text-[10px] font-bold text-stone-800 font-serif leading-tight mt-0.5 truncate">
                      {specimen.role.title}
                    </span>
                    <span className="block text-[8px] text-stone-500 leading-tight mt-0.5 truncate">
                      {specimen.role.subtitle}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[7px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                      CYCLE
                    </span>
                    <span className="block text-[10px] font-bold text-stone-800 font-serif leading-tight mt-0.5 truncate">
                      {specimen.cycle.duration}
                    </span>
                    <span className="block text-[8px] text-stone-500 leading-tight mt-0.5 truncate">
                      {specimen.cycle.subtitle}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[7px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                      METRIC
                    </span>
                    <span className="block text-[10px] font-bold text-[#A14C28] font-serif leading-tight mt-0.5 truncate">
                      {specimen.metric.value}
                    </span>
                    <span className="block text-[8px] text-stone-500 leading-tight mt-0.5 truncate">
                      {specimen.metric.label}
                    </span>
                  </div>
                </div>

                {/* Monograph Prose with Drop Cap - Tailored to fit without scrolling */}
                <div className="font-serif text-[11px] sm:text-[12px] text-stone-800 leading-relaxed space-y-1.5 mb-2.5">
                  <p className="line-clamp-4">
                    <span className="drop-cap-editorial">{specimen.dropCap}</span>
                    {specimen.monographParagraphs[0]}
                  </p>
                  {specimen.monographParagraphs[1] && (
                    <p className="line-clamp-3 hidden sm:block text-stone-700">
                      {specimen.monographParagraphs[1]}
                    </p>
                  )}
                </div>

                {/* Tech & Architecture Tag Pills */}
                <div className="flex flex-wrap gap-1 my-1">
                  {specimen.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded bg-[#EDE7DC] border border-[#DFD6C7] text-stone-700 font-mono text-[8px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Reading Details + SPREAD 02 -> */}
              <div className="pt-2 border-t border-stone-200/90 flex items-center justify-between font-mono text-[9px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-stone-500 font-medium">PROJECT FIELDNOTE</span>
                  <span className="text-stone-400 text-[8px] hidden sm:inline">
                    {specimen.readingDuration}
                  </span>
                </div>

                {/* SPREAD 02 Button */}
                <button
                  onClick={() => flipBookRef.current?.pageFlip()?.flipNext()}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-stone-200/70 hover:bg-stone-300 text-stone-700 font-bold transition-all text-[8px] cursor-pointer"
                >
                  <span>SPREAD 02</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </Page>

          {/* =================================================================== */}
          {/* PAGE 4 (Index 3): FOLIO XX • SYSTEM BLUEPRINT (Left Page of Spread 2)*/}
          {/* Strictly fixed height, overflow-hidden, no scrolling               */}
          {/* =================================================================== */}
          <Page density="soft" className="archival-paper archival-gutter-left border-r border-stone-300/80">
            <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200/90 font-mono text-[10px]">
                  <div>
                    <span className="text-stone-500 font-semibold tracking-wider block text-[9px]">
                      FOLIO 12 • SYSTEM BLUEPRINT
                    </span>
                    <span className="font-serif text-[12px] font-bold text-stone-800 block">
                      {"02 // MODULAR ARCHITECTURE"}
                    </span>
                  </div>
                  <span className="text-stone-400 text-[8px]">SPECIFICATION</span>
                </div>

                <p className="font-mono text-[8px] uppercase tracking-wider text-[#A14C28] font-bold mb-0.5">
                  MODULAR DECOMPOSITION & WORKFLOW
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight mb-2">
                  System Architecture & Pipeline
                </h3>

                {/* Solution Summary */}
                <div className="p-2.5 rounded-lg bg-[#EBF4EE] border-l-3 border-emerald-600 text-stone-800 text-[11px] leading-relaxed mb-2.5">
                  <span className="font-mono font-bold uppercase text-emerald-800 block mb-0.5 text-[8px]">
                    ARCHITECTURAL RESOLUTION:
                  </span>
                  <p className="line-clamp-2">{book.summary.solution}</p>
                </div>

                {/* Architecture Steps Flow */}
                {book.pages[2]?.content?.architectureSteps && (
                  <div className="space-y-1.5 my-1.5">
                    {book.pages[2].content.architectureSteps.slice(0, 3).map((st, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded bg-white/80 border border-stone-200 text-stone-800"
                      >
                        <div className="flex items-center justify-between mb-0.5 font-mono text-[9px]">
                          <span className="font-bold text-stone-900 truncate">{st.step}</span>
                          {st.tag && (
                            <span className="px-1 py-0.2 rounded bg-[#7C4A2D]/10 text-[#7C4A2D] font-bold text-[7px]">
                              {st.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-stone-600 leading-tight line-clamp-2">{st.detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Running Left Footer */}
              <div className="pt-2 border-t border-stone-200/90 flex items-center justify-between font-mono text-[9px] text-stone-400">
                <span>{book.name} {"//"} {book.volumeNumber}</span>
                <span>PRAKASH.PORTFOLIO {"//"} SPEC 02</span>
              </div>
            </div>
          </Page>

          {/* =================================================================== */}
          {/* PAGE 5 (Index 4): FOLIO XX • TECHNICAL TOOLKIT (Right Page of Spread 2) */}
          {/* Strictly fixed height, overflow-hidden, no scrolling               */}
          {/* =================================================================== */}
          <Page density="soft" className="archival-paper archival-gutter-right border-l border-stone-300/80">
            <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200/90 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded-full bg-[#7C4A2D] text-white text-[8px] font-bold uppercase tracking-wider">
                    TECHNICAL TOOLKIT
                  </span>
                  <span className="text-stone-500 font-semibold tracking-wider text-[9px]">
                    FOLIO 13 • BENCHMARKS
                  </span>
                </div>

                <p className="font-mono text-[8px] uppercase font-bold tracking-wider text-[#A14C28] mb-0.5">
                  DEPENDENCIES, RUNTIME & TELEMETRY
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight mb-2">
                  Technical Stack & Performance
                </h3>

                {/* Tech Stack Detailed Grid */}
                {book.pages[3]?.content?.techStackDetailed && (
                  <div className="grid grid-cols-2 gap-1.5 my-1.5">
                    {book.pages[3].content.techStackDetailed.slice(0, 4).map((item, idx) => (
                      <div
                        key={idx}
                        className="p-1.5 rounded bg-white/80 border border-stone-200"
                      >
                        <div className="flex items-center justify-between mb-0.5 font-mono text-[9px]">
                          <span className="font-bold text-stone-900 truncate">{item.name}</span>
                          <span className="text-[7px] text-[#A14C28] uppercase font-semibold">{item.category}</span>
                        </div>
                        <p className="text-[9px] text-stone-600 leading-tight line-clamp-1">
                          {item.role}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Metrics Highlights */}
                {book.pages[3]?.content?.metrics && (
                  <div className="grid grid-cols-3 gap-1.5 my-2">
                    {book.pages[3].content.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-1.5 rounded bg-white/80 border border-stone-200 text-center"
                      >
                        <span className="block font-mono text-sm sm:text-base font-extrabold text-[#7C4A2D]">
                          {metric.value}
                        </span>
                        <span className="block font-mono text-[7px] uppercase font-bold text-stone-800 mt-0.5 truncate">
                          {metric.label}
                        </span>
                        <span className="block text-[7px] text-stone-500 truncate">
                          {metric.context}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom: Nav Controls to Spread 3 */}
              <div className="pt-2 border-t border-stone-200/90 flex items-center justify-between font-mono text-[9px]">
                <button
                  onClick={() => flipBookRef.current?.pageFlip()?.flipPrev()}
                  className="inline-flex items-center gap-1 text-stone-500 hover:text-stone-800 text-[8px] cursor-pointer"
                >
                  <ChevronLeft className="w-2.5 h-2.5" />
                  <span>SPREAD 01</span>
                </button>

                <button
                  onClick={() => flipBookRef.current?.pageFlip()?.flipNext()}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#7C4A2D] text-white font-bold text-[8px] hover:bg-[#683D24] transition-colors cursor-pointer"
                >
                  <span>SPREAD 03</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </Page>

          {/* =================================================================== */}
          {/* PAGE 6 (Index 5): FOLIO XX • EXECUTIVE SUMMARY (Left Page of Spread 3) */}
          {/* Requirement 3: Dedicated page for project summary                   */}
          {/* =================================================================== */}
          <Page density="soft" className="archival-paper archival-gutter-left border-r border-stone-300/80">
            <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200/90 font-mono text-[10px]">
                  <div>
                    <span className="text-stone-500 font-semibold tracking-wider block text-[9px]">
                      FOLIO 14 • EXECUTIVE SUMMARY
                    </span>
                    <span className="font-serif text-[12px] font-bold text-stone-800 block">
                      {"04 // CONTEXT & OBJECTIVES"}
                    </span>
                  </div>
                  <span className="text-stone-400 text-[8px]">CORE SUMMARY</span>
                </div>

                <p className="font-mono text-[8px] uppercase tracking-wider text-[#A14C28] font-bold mb-0.5">
                  PROBLEM FORMULATION & SPECIFICATION
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight mb-2">
                  Project Challenge & Objectives
                </h3>

                {/* Problem Box */}
                <div className="p-2.5 rounded-lg bg-[#FAF0E6] border-l-3 border-[#A14C28] text-stone-800 text-[11px] leading-relaxed mb-2">
                  <span className="font-mono font-bold uppercase text-[#A14C28] block mb-0.5 text-[8px]">
                    THE CORE CHALLENGE:
                  </span>
                  <p className="line-clamp-3">{book.summary.problem}</p>
                </div>

                {/* Key Engineering Objectives List */}
                <div className="space-y-1.5 my-2">
                  <div className="p-2 rounded bg-white/80 border border-stone-200 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono font-bold text-[9px] text-stone-900 block">
                        Architecture Decoupling
                      </span>
                      <p className="text-[10px] text-stone-600 leading-tight">
                        Modular design separating data calculation from reactive rendering.
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-white/80 border border-stone-200 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono font-bold text-[9px] text-stone-900 block">
                        Performance Optimization
                      </span>
                      <p className="text-[10px] text-stone-600 leading-tight">
                        Sub-second response times and zero client computational bottlenecks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Running Left Footer */}
              <div className="pt-2 border-t border-stone-200/90 flex items-center justify-between font-mono text-[9px] text-stone-400">
                <span>{book.name} {"//"} SUMMARY</span>
                <span>PRAKASH.PORTFOLIO {"//"} SPEC 04</span>
              </div>
            </div>
          </Page>

          {/* =================================================================== */}
          {/* PAGE 7 (Index 6): FOLIO XX • PROJECT OUTCOMES (Right Page of Spread 3) */}
          {/* Requirement 3: Detailed outcomes on dedicated page, not back cover  */}
          {/* =================================================================== */}
          <Page density="soft" className="archival-paper archival-gutter-right border-l border-stone-300/80">
            <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200/90 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded-full bg-[#7C4A2D] text-white text-[8px] font-bold uppercase tracking-wider">
                    VERIFIED RESULTS
                  </span>
                  <span className="text-stone-500 font-semibold tracking-wider text-[9px]">
                    FOLIO 15 • OUTCOMES
                  </span>
                </div>

                <p className="font-mono text-[8px] uppercase font-bold tracking-wider text-[#A14C28] mb-0.5">
                  MEASURABLE OUTCOMES & IMPACT
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight mb-2">
                  Engineering Impact & Verification
                </h3>

                {/* Outcomes Box */}
                <div className="p-2.5 rounded-lg bg-[#EBF4EE] border-l-3 border-emerald-600 text-stone-800 text-[11px] leading-relaxed mb-2">
                  <span className="font-mono font-bold uppercase text-emerald-800 block mb-0.5 text-[8px]">
                    VERIFIED OUTCOMES:
                  </span>
                  <p className="line-clamp-3">{book.summary.outcomes}</p>
                </div>

                {/* Engineering Ownership Note */}
                <div className="p-2.5 rounded bg-white/80 border border-stone-200 text-stone-700 text-[10px] leading-relaxed mb-2">
                  <span className="font-mono font-bold text-stone-900 block mb-0.5 text-[9px]">
                    ARCHITECT & CONTRIBUTOR:
                  </span>
                  Repository implementation by Prakash P. This case study describes the checked-in source and notes external services or setup requirements where they apply.
                </div>

              </div>

              {/* Bottom: Nav Controls to Back Cover */}
              <div className="pt-2 border-t border-stone-200/90 flex items-center justify-between font-mono text-[9px]">
                <button
                  onClick={() => flipBookRef.current?.pageFlip()?.flipPrev()}
                  className="inline-flex items-center gap-1 text-stone-500 hover:text-stone-800 text-[8px] cursor-pointer"
                >
                  <ChevronLeft className="w-2.5 h-2.5" />
                  <span>SPREAD 02</span>
                </button>

                <button
                  onClick={() => flipBookRef.current?.pageFlip()?.flipNext()}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-stone-200/80 hover:bg-stone-300 text-stone-800 font-bold text-[8px] transition-colors cursor-pointer"
                >
                  <span>BACK COVER</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </Page>

          {/* =================================================================== */}
          {/* PAGE 8 (Index 7): BACK COVER (Single Hardcover, showCover=true)     */}
          {/* Requirement 3: Clean, authentic hardcover back without clutter      */}
          {/* =================================================================== */}
          <Page density="hard" className="rounded-l-xl rounded-r-sm border-t border-l border-b border-white/20 shadow-2xl">
            <div
              className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-center items-center"
              style={{
                background: book.theme.coverGradient,
                color: book.theme.coverText,
              }}
            >
              {/* Spine Depth Shading on Right */}
              <div className="absolute right-0 top-0 bottom-0 w-6 book-spine-shadow pointer-events-none rotate-180" />
              <div className="absolute right-6 top-0 bottom-0 w-px bg-white/15 pointer-events-none" />

              {/* Top: Classification Pill */}
              <div className="w-full flex items-center justify-between font-mono text-[10px] text-white/70">
                <span className="px-2 py-0.5 rounded bg-white/15 border border-white/20 text-white font-bold">
                  {book.volumeNumber}
                </span>
                <span className="text-emerald-400 font-bold uppercase tracking-wider">
                  [VERIFIED ARTIFACT]
                </span>
              </div>

              {/* Center: Prestigious Monogram Emblem & Publisher Seal */}
              <div className="my-auto flex flex-col items-center max-w-xs">
                <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center mb-3 bg-white/5 shadow-inner">
                  <Award className="w-7 h-7 text-white/80" />
                </div>

                <h3 className="font-serif text-2xl font-bold tracking-tight text-white mb-1">
                  {book.name}
                </h3>
                <p className="font-mono text-[10px] text-white/60 uppercase tracking-widest mb-4">
                  {book.edition}
                </p>

                <div className="w-12 h-px bg-white/25 mb-4" />

                <p className="font-serif italic text-xs text-white/80 leading-relaxed mb-4">
                  {"“Engineered with deliberate attention to visual hierarchy, responsive performance, and architectural rigor.”"}
                </p>

                {onNextVolume && (
                  <button
                    onClick={onNextVolume}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-mono text-xs font-bold transition-all shadow-lg cursor-pointer transform hover:scale-105 active:scale-95"
                  >
                    <span>NEXT VOLUME</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Bottom: Barcode & Library Index */}
              <div className="w-full pt-3 border-t border-white/20 flex items-center justify-between font-mono text-[9px] text-white/60">
                <div className="text-left space-y-0.5">
                  <div className="flex items-center gap-0.5 h-3.5">
                    <span className="w-0.5 h-full bg-white/70" />
                    <span className="w-1.5 h-full bg-white/70" />
                    <span className="w-0.5 h-full bg-white/70" />
                    <span className="w-1 h-full bg-white/70" />
                    <span className="w-0.5 h-full bg-white/70" />
                    <span className="w-2 h-full bg-white/70" />
                    <span className="w-0.5 h-full bg-white/70" />
                  </div>
                  <span className="text-[7px] uppercase tracking-wider text-white/40 block">
                    ISBN-FIELDNOTE-{book.volumeNumber.replace(/\s+/g, "")}
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[7px] text-white/40">LIBRARY INDEX</span>
                  <span className="text-white/80 font-bold">{book.volumeNumber} {"//"} 05</span>
                </div>
              </div>

              {/* Left Page Edge Texture */}
              <div className="absolute left-0 top-1 bottom-1 w-2.5 rounded-l book-page-edges pointer-events-none" />
            </div>
          </Page>
        </HTMLFlipBook>

        {/* Specimen Inspection Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-[#FBF9F5] p-3 rounded-xl border border-stone-300 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200 font-mono text-xs text-stone-700">
                <span className="font-bold">{specimen.artifactTitle}</span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1 rounded-md hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Close high-resolution specimen preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxImage}
                alt="High-resolution specimen plate"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow"
              />
              <div className="pt-2 mt-2 border-t border-stone-200 flex items-center justify-between font-mono text-[10px] text-stone-500">
                <span>{specimen.figureCaption}</span>
                <span>{specimen.gamut}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

FlipBookMagazine.displayName = "FlipBookMagazine";
