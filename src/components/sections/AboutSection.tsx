"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function AboutSection() {
  const values = [
    {
      icon: "◆",
      title: "Curiosity-Driven",
      text: "I believe the best work comes from genuine curiosity. Every project is a chance to learn something I didn't know yesterday.",
    },
    {
      icon: "△",
      title: "Craft-Obsessed",
      text: "Details matter. The difference between good and great lives in the margins — the animation timing, the whitespace, the error state nobody sees.",
    },
    {
      icon: "○",
      title: "Systems Thinker",
      text: "I don't just build features. I think in systems — how pieces connect, how complexity emerges from simplicity, how to design for change.",
    },
    {
      icon: "□",
      title: "Human-Centered",
      text: "Technology should serve people, not the other way around. I design for real humans with real needs, not for spec sheets.",
    },
  ];

  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-mono">
            001 — About
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            More than a
            <br />
            <span className="gradient-text">developer.</span>
          </h2>
        </motion.div>

        {/* Story */}
        <div className="mt-16 grid md:grid-cols-2 gap-16 md:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            className="space-y-6"
          >
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m Rajinish Pothakamuri, a Backend Developer and Machine Learning Enthusiast currently pursuing my Master of Science in Computer Science and Software Engineering at Constructor University. My focus is on building robust and intelligent digital solutions.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              My journey spans from working as an SOA / OIC Developer, where I built enterprise integrations, to developing complex machine learning models for predictive analytics. I enjoy diving deep into backend architecture, optimizing pipelines, and exploring AI-driven innovations.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              I care deeply about the logic beneath the surface. Whether it&apos;s designing secure integration workflows, tuning deep learning neural networks, or crafting seamless REST APIs, I believe in creating scalable and efficient systems.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              When I&apos;m not coding or reading AI research papers, you&apos;ll probably find me watching anime (like Solo Leveling or Demon Slayer), playing a match of Clash Royale, or searching for the latest tech gadgets.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="p-5 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 group hover-card"
              >
                <span className="text-2xl text-accent group-hover:scale-110 inline-block transition-transform duration-300">
                  {value.icon}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Ambition Statement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-glow to-transparent opacity-50 blur-3xl" />
          <blockquote className="relative text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-snug tracking-tight">
              &ldquo;I want to build things that make the digital world feel
              <span className="gradient-text font-medium"> more human</span>,
              not less.&rdquo;
            </p>
          </blockquote>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Built", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Cups of Coffee", value: "∞" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-6 rounded-2xl bg-surface border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-muted tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
