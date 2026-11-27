"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Award, ExternalLink } from "lucide-react";
import { Certificate } from "@/types";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Focus the close button for accessibility
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${certificate.title}`}
      className="fixed inset-0 z-[60] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full fieldnote-card rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 dark:border-white/20 bg-white dark:bg-[#10121A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/5">
          <span className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <Award className="w-4 h-4 text-brand-500" />
            <span>CREDENTIAL_INSPECTION</span>
          </span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-8 h-8 rounded-md border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-white dark:bg-[#151824] flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Close certificate inspection modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Image Display */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-950/30 overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 1024px) 95vw, 768px"
            priority
          />
        </div>

        {/* Modal Metadata Footer */}
        <div className="p-5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-[#10121A]">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {certificate.title}
            </h3>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              Issued by: <span className="text-slate-800 dark:text-slate-200 font-medium">{certificate.issuer}</span> &bull; {certificate.year}
            </p>
          </div>

          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/10 hover:border-brand-500 font-mono text-xs text-slate-700 dark:text-slate-200 hover:text-brand-500 transition-colors w-fit"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Full Resolution</span>
          </a>
        </div>
      </div>
    </div>
  );
}
