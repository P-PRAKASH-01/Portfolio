"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight, BookOpen } from "lucide-react";
import { ProjectBook } from "@/types";

interface CinematicProjectShowcaseProps {
  books: ProjectBook[];
  onOpen: (book: ProjectBook) => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function CinematicProjectShowcase({ books, onOpen }: CinematicProjectShowcaseProps) {
  return (
    <div className="space-y-20 overflow-x-clip sm:space-y-28 lg:space-y-36">
      {books.map((book, index) => (
        <ProjectScene key={book.id} book={book} index={index} onOpen={onOpen} />
      ))}
    </div>
  );
}

function ProjectScene({ book, index, onOpen }: { book: ProjectBook; index: number; onOpen: (book: ProjectBook) => void }) {
  const shouldReduceMotion = useReducedMotion();
  const sceneRef = useRef<HTMLElement>(null);
  const isInView = useInView(sceneRef, { once: true, amount: 0.18 });
  const reversed = index % 2 === 1;
  const image = book.specimen?.image || book.image;

  return (
    <motion.article
      ref={sceneRef}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion || isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
      }}
      className="grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
      aria-labelledby={`project-title-${book.id}`}
    >
            <div className={`min-w-0 lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
              <motion.div
                className="group relative isolate overflow-hidden rounded-xl border border-white/10 bg-[#101116]"
                whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.3, ease } }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    variants={{
                      hidden: { clipPath: "inset(0 100% 0 0)", scale: 1.06 },
                      visible: { clipPath: "inset(0 0% 0 0)", scale: 1, transition: { duration: 1.05, ease, delay: 0.08 } },
                    }}
                  >
                    <Image
                      src={image}
                      alt={book.specimen?.artifactTitle || `${book.name} project preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority={index === 0}
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090A10]/75 via-transparent to-[#090A10]/10" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-6 sm:bottom-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/75 sm:text-xs">
                      {book.volumeNumber} <span className="text-[#FF7018]">/</span> {book.category.toUpperCase()}
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-colors group-hover:border-[#FF7018] group-hover:bg-[#FF7018]">
                      <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[#FF7018] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            </div>

            <motion.div
              className={`min-w-0 lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease, delay: shouldReduceMotion ? 0 : 0.12 }}
            >
              <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF7018] sm:text-xs">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-10 bg-[#FF7018]/70" />
                <span>{book.category}</span>
              </div>
              <h3
                id={`project-title-${book.id}`}
                className="max-w-xl font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {book.name}
              </h3>
              <p className="mt-3 font-serif text-lg italic text-white/65 sm:text-xl">{book.tagline}</p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#B5B5BE] sm:text-base">
                {book.summary.solution}
              </p>
              <div className="mt-6 flex flex-wrap gap-2" aria-label={`${book.name} technologies`}>
                {book.tech.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] text-white/70 sm:text-[11px]">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <button
                  type="button"
                  onClick={() => onOpen(book)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#FF7018] px-4 py-2.5 font-mono text-xs font-bold text-white transition-colors hover:bg-[#EA5E08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7018]"
                >
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Open case study
                </button>
                {book.live !== "none" && (
                  <a
                    href={book.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 font-mono text-xs text-white/65 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF7018]"
                  >
                    Live project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                <a
                  href={book.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center font-mono text-xs text-white/65 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF7018]"
                >
                  Source code <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
    </motion.article>
  );
}
