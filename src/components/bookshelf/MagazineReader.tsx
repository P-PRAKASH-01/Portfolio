"use client";

import React, { useEffect, useRef } from "react";
import { ProjectBook } from "@/types";
import { FlipBookMagazine, FlipBookMagazineRef } from "./FlipBookMagazine";

interface MagazineReaderProps {
  book: ProjectBook;
  onClose: () => void;
  onNextVolume?: () => void;
  onPrevVolume?: () => void;
}

export function MagazineReader({
  book,
  onClose,
  onNextVolume,
  onPrevVolume,
}: MagazineReaderProps) {
  const flipBookRef = useRef<FlipBookMagazineRef>(null);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        flipBookRef.current?.flipNext();
      } else if (e.key === "ArrowLeft") {
        flipBookRef.current?.flipPrev();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Interactive 3D Magazine: ${book.name} - ${book.tagline}`}
      className="fixed inset-0 z-[70] bg-[#090B12]/96 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden animate-fade-in"
    >
      {/* Top-Left Minimal ESC Control (Requirement 6) */}
      <button
        onClick={onClose}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 hover:text-white font-mono text-xs border border-white/15 backdrop-blur-md transition-all cursor-pointer shadow-lg group"
        aria-label="Close magazine and return to shelf"
      >
        <span className="font-bold text-white tracking-wider">ESC</span>
        <span className="text-white/40">|</span>
        <span className="text-[11px] text-white/70 group-hover:text-white">Shelf</span>
      </button>

      {/* Main Magazine Viewport */}
      <main className="w-full h-full flex items-center justify-center relative overflow-hidden">
        <FlipBookMagazine
          ref={flipBookRef}
          book={book}
          onNextVolume={onNextVolume}
          onPrevVolume={onPrevVolume}
        />
      </main>
    </div>
  );
}
