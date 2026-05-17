"use client";

import { motion } from "framer-motion";
import { INTERESTS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function InterestsSection() {
  return (
    <section id="interests" className="relative py-32 md:py-40">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-glow/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-mono">
            004 — Interests
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            What I&apos;m
            <br />
            <span className="gradient-text">into.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl">
            A map of my curiosities — the things that inspire my work,
            shape my thinking, and fill my free time.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {INTERESTS.map((interest) => (
            <motion.div
              key={interest.category}
              variants={staggerItem}
              className="group relative p-6 rounded-2xl bg-surface border border-border overflow-hidden hover-card cursor-hover"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${interest.color}10, transparent 70%)`,
                }}
              />

              <div className="relative">
                {/* Icon & Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{interest.icon}</span>
                  <h3
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: interest.color }}
                  >
                    {interest.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-2">
                  {interest.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted group-hover:text-foreground/80 transition-colors duration-300"
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: interest.color }}
                      />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Decorative line */}
                <div
                  className="mt-4 h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ backgroundColor: `${interest.color}30` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-muted font-light italic max-w-2xl mx-auto">
            &ldquo;The only way to do great work is to love what you do.
            If you haven&apos;t found it yet, keep looking.&rdquo;
          </p>
          <p className="mt-4 text-xs text-muted/60 tracking-wider uppercase">
            — Steve Jobs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
