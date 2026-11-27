"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { X, BookOpen, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { ProjectBook } from "@/types";

interface ExtractedBookPreviewProps {
  book: ProjectBook;
  onOpenBook: () => void;
  onClose: () => void;
}

export function ExtractedBookPreview({
  book,
  onOpenBook,
  onClose,
}: ExtractedBookPreviewProps) {
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpening, setIsOpening] = useState(false);

  const handleTriggerOpen = useCallback(() => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpenBook();
    }, 450);
  }, [isOpening, onOpenBook]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleTriggerOpen();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    openButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, handleTriggerOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Extracted cover preview: ${book.name}`}
      className="fixed inset-0 z-[65] bg-slate-950/85 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Header: Navigation & Context */}
      <header
        className="max-w-4xl w-full mx-auto flex items-center justify-between pb-4 border-b border-white/10 text-white font-mono text-xs z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Return to bookshelf"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{"// BACK TO BOOKSHELF"}</span>
        </button>

        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>STAGE 02: FRONT COVER INSPECTION</span>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close preview"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Main Extracted 3D Book Presentation */}
      <main
        className="my-auto max-w-xl w-full mx-auto flex flex-col items-center justify-center py-4 perspective-2000 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Interactive Hardcover Volume with physical cover opening transform */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleTriggerOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleTriggerOpen();
            }
          }}
          className="group relative cursor-pointer transform-gpu focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500 rounded-r-2xl rounded-l-md"
          title="Click cover to open book"
          style={{
            transformOrigin: "left center",
            transform: isOpening
              ? "rotateY(-105deg) scale(0.98)"
              : "rotateY(0deg) scale(1)",
            opacity: isOpening ? 0.7 : 1,
            transition: isOpening
              ? "transform 450ms cubic-bezier(0.4, 0, 0.2, 1), opacity 450ms ease"
              : "transform 300ms ease, opacity 300ms ease",
          }}
        >
          {/* Physical Hardcover Body */}
          <div
            className="w-72 sm:w-80 md:w-96 h-[400px] sm:h-[450px] md:h-[490px] rounded-r-2xl rounded-l-md relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden shadow-2xl border-t border-r border-b"
            style={{
              background: book.theme.coverGradient,
              color: book.theme.coverText,
              borderColor: "rgba(255, 255, 255, 0.2)",
              boxShadow:
                "0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 50px -10px rgba(249, 115, 22, 0.2)",
            }}
          >
            {/* Spine Depth Shading */}
            <div className="absolute left-0 top-0 bottom-0 w-6 book-spine-shadow pointer-events-none" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/15 pointer-events-none" />

            {/* Top Cover Bar */}
            <div className="pl-4 flex items-start justify-between font-mono">
              <span className="text-xs uppercase font-extrabold tracking-widest text-white/70">
                {book.volumeNumber}
              </span>
              <span
                className="px-2.5 py-1 rounded text-[10px] tracking-wider uppercase font-bold border"
                style={{
                  backgroundColor: book.theme.badgeBg,
                  color: book.theme.badgeText,
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                {book.category}
              </span>
            </div>

            {/* Central Typography Title */}
            <div className="pl-4 my-auto">
              <div
                className="w-12 h-1 mb-4 rounded"
                style={{ backgroundColor: book.theme.accent }}
              />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-2 drop-shadow">
                {book.name}
              </h2>
              <p className="font-serif italic text-xs sm:text-sm text-white/85 leading-relaxed max-w-xs mb-4">
                {book.tagline}
              </p>

              {/* Technologies Array */}
              <div className="flex flex-wrap gap-1.5">
                {book.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/95 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Cover Metadata */}
            <div className="pl-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-white/70">
              <div>
                <p className="text-[10px] uppercase text-white/50">Author</p>
                <p className="font-bold text-white">Prakash P.</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase text-white/50">Classification</p>
                <p className="text-white/90">{book.edition.split("//")[0].trim()}</p>
              </div>
            </div>

            {/* Page Block Thickness on Right Edge */}
            <div className="absolute right-0 top-1.5 bottom-1.5 w-3 rounded-r book-page-edges pointer-events-none" />
          </div>

          {/* Interactive Glow Hover Overlay */}
          <div className="absolute inset-0 rounded-r-2xl rounded-l-md bg-white/0 group-hover:bg-white/5 transition-colors pointer-events-none" />
        </div>

        {/* Action Prompt Beneath Cover */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            ref={openButtonRef}
            onClick={handleTriggerOpen}
            disabled={isOpening}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 disabled:opacity-70 text-white font-mono text-xs sm:text-sm font-bold shadow-xl shadow-brand-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>{isOpening ? "OPENING VOLUME..." : "CLICK TO OPEN MAGAZINE"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Interactive 3D dual-page flipbook &bull; Press Enter or Click Cover</span>
          </p>
        </div>
      </main>

      {/* Footer Info */}
      <footer
        className="max-w-4xl w-full mx-auto text-center font-mono text-[11px] text-slate-500 pt-3 border-t border-white/10 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span>{"VOLUME ARCHIVE // 05 REGISTERED ENGINEERING SPECIFICATIONS"}</span>
      </footer>
    </div>
  );
}
