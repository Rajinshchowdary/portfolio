"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
  ];

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const selected = PROJECTS.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className="relative py-32 md:py-40">
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
            002 — Projects
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Selected
            <br />
            <span className="gradient-text">work.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl">
            A collection of projects that represent my approach to building —
            each one a story of problems solved and lessons learned.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="mt-12 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-hover ${
                filter === cat
                  ? "bg-accent text-white"
                  : "bg-surface border border-border text-muted hover:text-foreground hover:border-border-hover"
              }`}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6"
        >
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              layout
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
              className="group relative rounded-2xl bg-surface border border-border overflow-hidden hover-card cursor-hover"
            >
              {/* Project Card */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Project Image Placeholder */}
                  <div className="w-full md:w-48 h-32 md:h-28 rounded-xl bg-surface-elevated border border-border overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-accent/10 via-accent-light/5 to-transparent flex items-center justify-center">
                      <span className="text-3xl opacity-30">
                        {project.category === "AI / Automation"
                          ? "🧠"
                          : project.category === "Creative Tech"
                          ? "🎨"
                          : project.category === "Productivity"
                          ? "⚡"
                          : "🔧"}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="tag text-[10px]">Featured</span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-accent/80 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="text-xs text-muted font-mono hidden sm:block">
                        {project.year}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-surface-elevated text-muted border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expand Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                      <motion.span
                        animate={{
                          rotate: selectedProject === project.id ? 90 : 0,
                        }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                      <span>
                        {selectedProject === project.id
                          ? "Show less"
                          : "View case study"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
                        opacity: { duration: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm text-muted leading-relaxed mb-6">
                          {project.longDescription}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Challenges */}
                          <div>
                            <h4 className="text-xs uppercase tracking-wider text-accent font-mono mb-3">
                              Challenges
                            </h4>
                            <ul className="space-y-2">
                              {project.challenges.map((c, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-muted flex gap-2"
                                >
                                  <span className="text-accent mt-0.5 shrink-0">
                                    ▸
                                  </span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Lessons */}
                          <div>
                            <h4 className="text-xs uppercase tracking-wider text-accent font-mono mb-3">
                              Lessons Learned
                            </h4>
                            <ul className="space-y-2">
                              {project.lessons.map((l, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-muted flex gap-2"
                                >
                                  <span className="text-accent mt-0.5 shrink-0">
                                    ✦
                                  </span>
                                  {l}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-wrap gap-3">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium bg-accent text-white hover:bg-accent-light transition-colors cursor-hover"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15,3 21,3 21,9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium bg-surface-elevated text-muted hover:text-foreground border border-border hover:border-border-hover transition-all cursor-hover"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Source Code
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
