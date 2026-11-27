"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Library, Sparkles, Filter, Compass } from "lucide-react";
import { PROJECT_BOOKS } from "@/data/projectBooks";
import { ProjectBook } from "@/types";
import { ProjectBookItem } from "./ProjectBookItem";
import { MagazineReader } from "./MagazineReader";
import { CinematicProjectShowcase } from "./CinematicProjectShowcase";

type BookshelfStage = "BROWSING" | "READING";

export function BookshelfView() {
  const [activeBook, setActiveBook] = useState<ProjectBook | null>(null);
  const [stage, setStage] = useState<BookshelfStage>("BROWSING");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Web Engineering",
    "AI & Machine Learning",
    "Aerospace Simulation",
    "Environmental Systems",
    "E-Commerce Systems",
  ];

  const filteredBooks =
    activeCategory === "All"
      ? PROJECT_BOOKS
      : PROJECT_BOOKS.filter((b) => b.category === activeCategory);

  // Directly open magazine on book click
  const handleExtractBook = (book: ProjectBook) => {
    setActiveBook(book);
    setStage("READING");
  };

  // Return to Bookshelf
  const handleCloseAll = () => {
    setActiveBook(null);
    setStage("BROWSING");
  };

  // Switch to Next Volume in the library
  const handleNextVolume = () => {
    if (!activeBook) return;
    const currentIndex = PROJECT_BOOKS.findIndex((b) => b.id === activeBook.id);
    const nextIndex = (currentIndex + 1) % PROJECT_BOOKS.length;
    setActiveBook(PROJECT_BOOKS[nextIndex]);
  };

  // Switch to Previous Volume in the library
  const handlePrevVolume = () => {
    if (!activeBook) return;
    const currentIndex = PROJECT_BOOKS.findIndex((b) => b.id === activeBook.id);
    const prevIndex = (currentIndex - 1 + PROJECT_BOOKS.length) % PROJECT_BOOKS.length;
    setActiveBook(PROJECT_BOOKS[prevIndex]);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-white/10 bg-[#090A10] text-white relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 16%, rgba(255,112,24,0.09) 0%, rgba(9,10,16,0) 48%)",
      }}
    >
      {/* Subtle Top Lamp Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FF7018]/[0.06] blur-[130px] pointer-events-none" />

      <div className="max-w-editorial mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="section-tag text-[#FF7018] mb-3 font-mono flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF7018]" />
              <span>{"// 04. SELECTED PROJECTS"}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-serif">
              Built with intent<span className="text-[#FF7018]">.</span>
            </h2>
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 h-px w-24 origin-left bg-[#FF7018]"
            />
            <p className="mt-5 text-sm sm:text-base text-[#B5B5BE] max-w-2xl leading-relaxed">
              A closer look at selected work, the problems each project addresses, and the tools behind it.
            </p>
          </div>
        </div>

        <CinematicProjectShowcase books={PROJECT_BOOKS} onOpen={handleExtractBook} />

        <div className="mt-24 border-t border-white/10 pt-12 sm:mt-32 sm:pt-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-tag text-[#FF7018] mb-2 font-mono text-xs">
                <span>{"// INTERACTIVE CASE STUDY ARCHIVE"}</span>
              </div>
              <h3 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Open the engineering volumes
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#B5B5BE] sm:text-base">
                Browse the bookshelf and open a project magazine for its extended case study.
              </p>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#FF7018]/20 bg-white/[0.03] text-xs font-mono text-white/70 w-fit">
              <Sparkles className="w-4 h-4 text-[#FF7018] flex-shrink-0" />
              <span>Interactive library &bull; Select a volume</span>
            </div>
          </div>

        {/* Category Filter Pills */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar"
          aria-label="Filter Bookshelf by Domain"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300/70 mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeCategory === category
                  ? "bg-[#FF7018] text-white font-bold shadow-[0_0_15px_rgba(255,112,24,0.4)]"
                  : "bg-white/5 text-stone-300 hover:text-white border border-white/10 hover:border-[#FF7018]/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* =================================================================== */}
        {/* PHYSICAL BOOKSHELF SYSTEM (Matching Reference UI Image)             */}
        {/* =================================================================== */}
        <div className="relative pt-6 sm:pt-10 pb-8 sm:pb-12 w-full">
          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden items-center justify-between px-2 mb-3 text-[11px] font-mono text-amber-300/70">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>SWIPE HORIZONTALLY TO EXPLORE</span>
            </span>
            <span className="text-stone-400">TAP VOLUME TO OPEN &rarr;</span>
          </div>

          {/* Scrollable Bookshelf Stage for All Screen Sizes */}
          <div className="w-full overflow-x-auto hide-scrollbar scroll-smooth">
            <div className="min-w-fit px-4 sm:px-8 mx-auto flex flex-col items-center">
              {/* Books Spines & Brass Bookend Standing Upright */}
              <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 z-10 relative pb-0.5">
                {/* 5 Physical Leather Volumes */}
                {filteredBooks.map((book, index) => (
                  <ProjectBookItem
                    key={book.id}
                    book={book}
                    index={index}
                    onExtract={handleExtractBook}
                  />
                ))}

                {/* Generous Spacing before Antique Brass Plaque (Matching Reference Image) */}
                <div className="w-8 sm:w-16 md:w-28 lg:w-40 flex-shrink-0" />

                {/* Antique Brass Bookend Plaque (from Reference Image) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 rounded-lg border border-amber-500/50 bg-gradient-to-br from-[#543A1B] via-[#3A2612] to-[#20140A] p-3 shadow-2xl flex flex-col items-center justify-center text-center flex-shrink-0 select-none relative mb-1 cursor-default transform-gpu"
                  style={{
                    boxShadow:
                      "0 14px 28px -6px rgba(0,0,0,0.85), inset 1px 1px 3px rgba(255,255,255,0.25), inset -1px -1px 3px rgba(0,0,0,0.7)",
                  }}
                >
                  {/* Brass Corner Screws */}
                  <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-xs border border-amber-600/60" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-xs border border-amber-600/60" />
                  <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-xs border border-amber-600/60" />
                  <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-xs border border-amber-600/60" />

                  <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 mb-1 drop-shadow" />
                  <span className="font-mono text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-amber-100">
                    ANTIQUE BRASS
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] text-amber-400/90 tracking-wider mt-0.5 font-bold">
                    ED. Nº 1
                  </span>
                </motion.div>
              </div>

              {/* =================================================================== */}
              {/* SOLID HONDURAS MAHOGANY SHELF BEAM (Matching Reference Image)       */}
              {/* =================================================================== */}
              <div className="relative w-full min-w-[580px] sm:min-w-[680px] md:min-w-full">
                {/* Shelf Top Gloss Surface with Beveled Wood Edge & Light Reflection */}
                <div
                  className="h-3.5 sm:h-4 w-full bg-gradient-to-r from-[#2B1B13] via-[#4A3022] to-[#2B1B13] border-t border-amber-500/35 shadow-md"
                  style={{
                    boxShadow: "inset 0 1px 3px rgba(255, 255, 255, 0.22)",
                  }}
                />

                {/* Front Mahogany Face Beam with Metallic Brass Engraved Plaque */}
                <div className="h-8 sm:h-9 w-full bg-[#180E09] border-b-2 border-black/90 flex items-center justify-between px-3 sm:px-6 shadow-2xl">
                  {/* Left Brass Rivets */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400/90 border border-amber-600/70 shadow-xs" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400/90 border border-amber-600/70 shadow-xs" />
                  </div>

                  {/* Center Metallic Brass Canopy Plaque */}
                  <div
                    className="px-3 sm:px-6 py-0.5 rounded-xs border border-amber-500/50 bg-[#261710] shadow-inner flex items-center justify-center max-w-[80%] truncate"
                    style={{
                      boxShadow:
                        "inset 1px 1px 3px rgba(0,0,0,0.85), 0 1px 2px rgba(255,255,255,0.12)",
                    }}
                  >
                    <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-widest text-amber-200/95 font-bold truncate">
                      SOLID HONDURAS MAHOGANY &bull; CANOPY 01
                    </span>
                  </div>

                  {/* Right Brass Rivet & Library Stamp */}
                  <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] text-amber-400/80">
                    <span className="hidden sm:inline tracking-wider font-semibold">LIB. IV</span>
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400/90 border border-amber-600/70 shadow-xs" />
                  </div>
                </div>

                {/* Shelf Under-Glow & Deep Ambient Shadow Cast */}
                <div className="h-10 w-full bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Shelf Ledger Information Bar */}
        <div className="mt-2 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <Library className="w-4 h-4 text-amber-400" />
            <span>COLLECTION ARCHIVE: 5 VERIFIED PHYSICAL CASE STUDIES</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
          <span className="text-[#FF7018] font-semibold">[SELECT BOOK TO OPEN MAGAZINE]</span>
            <span>&bull;</span>
            <span className="text-stone-400">EST. 2024–2026</span>
          </div>
        </div>
        </div>
      </div>

      {/* Full-Screen Interactive 3D FlipBook Digital Magazine */}
      {stage === "READING" && activeBook && (
        <MagazineReader
          book={activeBook}
          onClose={handleCloseAll}
          onNextVolume={handleNextVolume}
          onPrevVolume={handlePrevVolume}
        />
      )}
    </motion.section>
  );
}
