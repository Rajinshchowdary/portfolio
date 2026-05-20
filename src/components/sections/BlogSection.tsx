"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function BlogSection() {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  return (
    <section id="blog" className="relative py-32 md:py-40">
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
            005 — Thoughts
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Writing &
            <br />
            <span className="gradient-text">thinking.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl">
            Short essays, ideas, and reflections — a space for thinking
            out loud about technology, creativity, and life.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 space-y-4"
        >
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              variants={staggerItem}
              onClick={() =>
                setExpandedPost(expandedPost === post.id ? null : post.id)
              }
              className="group relative rounded-2xl bg-surface border border-border overflow-hidden hover-card cursor-hover"
            >
              <div className="p-6 md:p-8">
                {/* Post Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs text-muted font-mono">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-muted/50">·</span>
                      <span className="text-xs text-muted">
                        {post.readTime} read
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </div>
                  <motion.span
                    animate={{
                      rotate: expandedPost === post.id ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-muted text-xl shrink-0 mt-2"
                  >
                    +
                  </motion.span>
                </div>

                {/* Excerpt */}
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: [0.25, 0.4, 0.25, 1],
                        },
                        opacity: { duration: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="prose prose-sm prose-invert max-w-none">
                          {post.content.split("\n\n").map((paragraph, j) => (
                            <p
                              key={j}
                              className="text-sm text-muted/90 leading-[1.8] mb-4"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
