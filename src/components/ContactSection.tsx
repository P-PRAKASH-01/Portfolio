"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { Phone, Mail, Send, Check, AlertCircle, Loader2, Terminal, Radio } from "lucide-react";
import { EMAILJS_CONFIG, PERSONAL_INFO } from "@/data/portfolio";

export function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.from_name.trim()) {
      newErrors.from_name = "Name identification required";
    }
    if (!formData.from_email.trim()) {
      newErrors.from_email = "Valid return email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email.trim())) {
      newErrors.from_email = "Email format invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message transmission body cannot be empty";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.from_name.trim(),
          from_email: formData.from_email.trim(),
          message: formData.message.trim(),
        },
        EMAILJS_CONFIG.publicKey
      );

      setStatus("success");
      setStatusMessage("Transmission delivered successfully. Response guaranteed within 24–48 hours.");
      setFormData({ from_name: "", from_email: "", message: "" });
      setErrors({});
      setTimeout(() => setStatus("idle"), 8000);
    } catch (err) {
      console.error("EmailJS transmission error:", err);
      setStatus("error");
      setStatusMessage("Transmission failure. Please initiate direct transmission to prakash5361869@gmail.com.");
      setTimeout(() => setStatus("idle"), 8000);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-white/10 bg-transparent"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Coordinates (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="section-tag text-[#FF7018] mb-2 font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7018]" />
              <span>{"// 06. DIRECT TRANSMISSION"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 font-serif">
              Initiate Contact
            </h2>
            <p className="text-sm sm:text-base text-[#B5B5BE] mb-8 leading-relaxed">
              Open for engineering roles, technical internships, and collaborative development.
            </p>

            <div className="space-y-4 mb-8">
              {/* Phone Channel */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-[#15161D] border border-white/10 hover:border-[#FF7018]/40 flex items-center gap-4 cursor-default shadow-xs transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#101116] border border-white/5 flex items-center justify-center text-[#FF7018] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#777984]">
                    Direct Line
                  </p>
                  <p className="text-sm font-bold font-mono text-white">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </motion.div>

              {/* Email Channel */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-[#15161D] border border-white/10 hover:border-[#FF7018]/40 flex items-center gap-4 cursor-default shadow-xs transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#101116] border border-white/5 flex items-center justify-center text-[#FF7018] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#777984]">
                    Electronic Mail
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold font-mono text-white hover:text-[#FF7018] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Signal Buttons */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#777984] mb-3">
                {"// External Profiles"}
              </p>
              <div className="flex gap-2.5">
                <motion.a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-3.5 py-2 rounded-md border border-white/10 hover:border-[#FF7018] bg-[#15161D] font-mono text-xs font-medium text-[#B5B5BE] hover:text-white transition-colors shadow-sm"
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-3.5 py-2 rounded-md border border-white/10 hover:border-[#FF7018] bg-[#15161D] font-mono text-xs font-medium text-[#B5B5BE] hover:text-white transition-colors shadow-sm"
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.socials.instagram}
                  aria-label="Instagram Profile"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-3.5 py-2 rounded-md border border-white/10 hover:border-[#FF7018] bg-[#15161D] font-mono text-xs font-medium text-[#B5B5BE] hover:text-white transition-colors shadow-sm"
                >
                  Instagram
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dispatch Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#15161D] border border-white/10 rounded-xl p-6 sm:p-8 shadow-technical-elevated">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs text-[#777984]">
                <span className="flex items-center gap-1.5 font-bold text-white">
                  <Terminal className="w-3.5 h-3.5 text-[#FF7018]" />
                  <span>TRANSMISSION_DISPATCH_FORM</span>
                </span>
                <span className="text-emerald-400 font-semibold">[READY]</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {status === "success" && (
                  <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 text-xs font-mono flex items-center gap-3">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 text-xs font-mono flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="from_name" className="text-xs font-mono font-medium text-[#B5B5BE]">
                      IDENTIFIER // NAME *
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full bg-[#101116] border ${
                        errors.from_name ? "border-[#EF4444]" : "border-white/10"
                      } rounded-md px-3.5 py-2.5 text-sm text-white placeholder-[#777984] focus:outline-none focus:border-[#FF7018] transition-colors`}
                    />
                    {errors.from_name && (
                      <p className="text-[#EF4444] text-[11px] font-mono mt-1">{errors.from_name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="from_email" className="text-xs font-mono font-medium text-[#B5B5BE]">
                      RETURN CHANNEL // EMAIL *
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full bg-[#101116] border ${
                        errors.from_email ? "border-[#EF4444]" : "border-white/10"
                      } rounded-md px-3.5 py-2.5 text-sm text-white placeholder-[#777984] focus:outline-none focus:border-[#FF7018] transition-colors`}
                    />
                    {errors.from_email && (
                      <p className="text-[#EF4444] text-[11px] font-mono mt-1">{errors.from_email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-[#B5B5BE]">
                    DISPATCH CONTENT // MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter project requirements, inquiry details, or collaborative inquiry..."
                    className={`w-full bg-[#101116] border ${
                      errors.message ? "border-[#EF4444]" : "border-white/10"
                    } rounded-md px-3.5 py-2.5 text-sm text-white placeholder-[#777984] focus:outline-none focus:border-[#FF7018] transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-[#EF4444] text-[11px] font-mono mt-1">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 px-6 rounded-md bg-[#FF7018] hover:bg-[#EA5E08] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,112,24,0.35)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>DISPATCHING TRANSMISSION...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>DISPATCH TRANSMISSION</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
