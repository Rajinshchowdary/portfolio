"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeUp, fadeIn } from "@/lib/animations";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Radial gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,92,252,0.08),transparent_60%)] blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.06),transparent_60%)] blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.04),transparent_60%)] blur-3xl" />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        {/* Text Content Area */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 pt-10 lg:pt-0">
          {/* Status Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated border border-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-muted tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="overflow-hidden"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9]">
              <span className="block">{SITE_CONFIG.fullName.split(" ")[0]}</span>
              <span className="block gradient-text">
                {SITE_CONFIG.fullName.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </motion.div>

          {/* Identity Statement */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-8 text-lg sm:text-xl md:text-2xl text-muted max-w-xl font-light leading-relaxed"
          >
            {SITE_CONFIG.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-4 text-sm sm:text-base text-muted/60 max-w-lg font-light"
          >
            Building at the intersection of code, design, and human experience.
            <br className="hidden sm:block" />
            Turning complex ideas into elegant digital realities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-3.5 rounded-xl font-medium text-sm overflow-hidden cursor-hover w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] animate-gradient" />
              <div className="absolute inset-[1px] bg-background rounded-[11px] group-hover:bg-transparent transition-colors duration-500" />
              <span className="relative gradient-text group-hover:text-white group-hover:[-webkit-text-fill-color:white] transition-all duration-500">
                Explore My Work
              </span>
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-xl text-sm text-muted hover:text-foreground border border-border hover:border-border-hover transition-all duration-300 cursor-hover w-full sm:w-auto text-center"
            >
              About Me →
            </a>
          </motion.div>
        </div>

        {/* Large Profile Photo Area */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="order-1 lg:order-2 flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border border-border/30 bg-surface shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Background pattern for placeholder */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(124,92,252,0.05)_50%,transparent_75%)] bg-[length:20px_20px] -z-20" />

            <Image
              src="/profile.jpg"
              alt={SITE_CONFIG.fullName}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Fallback initials if image is missing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted font-light -z-10 bg-surface-elevated">
              <span className="text-6xl mb-2">RP</span>
              <span className="text-xs uppercase tracking-widest opacity-50">Add profile.jpg</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator (Mobile only mostly, or absolute positioned) */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-muted"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
