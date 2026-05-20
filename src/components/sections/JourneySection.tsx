"use client";

import { motion } from "framer-motion";
import {
  EDUCATION,
  LEARNING_TOPICS,
  CERTIFICATIONS,
} from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function JourneySection() {
  const statusColors: Record<string, string> = {
    active: "bg-green-400",
    exploring: "bg-amber-400",
  };

  const statusLabels: Record<string, string> = {
    active: "Active",
    exploring: "Exploring",
  };

  return (
    <section id="journey" className="relative py-32 md:py-40">
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
            003 — Journey
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Learning
            <br />
            <span className="gradient-text">never stops.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl">
            A public knowledge garden — my studies, current explorations,
            and research interests.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Education & Certifications Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="space-y-6"
          >
            {/* Education */}
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="text-xs uppercase tracking-wider text-accent font-mono mb-4">
                Education
              </h3>
              {EDUCATION.map((edu, i) => (
                <div key={i}>
                  <h4 className="text-base font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-muted mt-1">{edu.institution}</p>
                  <p className="text-xs text-muted/60 mt-1 font-mono">
                    {edu.year}
                  </p>
                  <p className="text-sm text-muted mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="text-xs uppercase tracking-wider text-accent font-mono mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-muted font-mono shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Learning Topics & Research Interests Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="text-xs uppercase tracking-wider text-accent font-mono mb-6">
                Current Learning
              </h3>
              <div className="space-y-5">
                {LEARNING_TOPICS.map((topic, i) => (
                  <motion.div
                    key={topic.topic}
                    variants={staggerItem}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                          statusColors[topic.status]
                        }`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-medium text-foreground">
                            {topic.topic}
                          </h4>
                          <span className="text-[10px] text-muted uppercase tracking-wider">
                            {statusLabels[topic.status]}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {topic.resources.map((r) => (
                            <span
                              key={r}
                              className="px-2 py-0.5 text-[10px] font-mono rounded bg-surface-elevated text-muted/70 border border-border"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {i < LEARNING_TOPICS.length - 1 && (
                      <div className="ml-1 mt-3 mb-1 h-4 border-l border-border" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Roadmap note */}
              <div className="mt-8 p-4 rounded-xl bg-accent-glow border border-accent/10">
                <p className="text-xs text-muted leading-relaxed">
                  <span className="text-accent font-medium">Next on the roadmap:</span>{" "}
                  Exploring Rust for systems programming, diving deeper into
                  category theory for functional programming, and building a
                  personal AI assistant.
                </p>
              </div>
            </div>

            {/* Research Interests */}
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h4 className="text-xs uppercase tracking-wider text-accent font-mono mb-3">
                Research Interests
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Human-AI Interaction",
                  "Computational Creativity",
                  "Knowledge Graphs",
                  "Cognitive Architecture",
                  "Information Retrieval",
                ].map((interest) => (
                  <span key={interest} className="tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
