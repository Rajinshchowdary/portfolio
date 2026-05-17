"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function ContactSection() {
  const links = [
    {
      label: "GitHub",
      href: SITE_CONFIG.socials.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      description: "Check out my code",
    },
    {
      label: "LinkedIn",
      href: SITE_CONFIG.socials.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      description: "Let's connect",
    },
    {
      label: "Twitter / X",
      href: SITE_CONFIG.socials.twitter,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      description: "Thoughts in real-time",
    },
    {
      label: "Email",
      href: `mailto:${SITE_CONFIG.email}`,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      description: SITE_CONFIG.email,
    },
  ].filter(link => link.href);

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          className="text-center"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-mono">
            007 — Contact
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Let&apos;s
            <br />
            <span className="gradient-text">connect.</span>
          </h2>
          <p className="mt-6 text-muted text-lg max-w-lg mx-auto">
            Whether you have a project in mind, want to collaborate, or just
            want to say hello — I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-surface border border-border text-center hover-card cursor-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border mx-auto flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/20 transition-all duration-300">
                {link.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {link.label}
              </h3>
              <p className="mt-1 text-xs text-muted">{link.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="mt-20 text-center"
        >
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-medium cursor-hover relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] animate-gradient" />
            <div className="absolute inset-[1px] bg-background rounded-[15px] group-hover:bg-transparent transition-colors duration-500" />
            <span className="relative gradient-text group-hover:text-white group-hover:[-webkit-text-fill-color:white] transition-all duration-500">
              Say Hello
            </span>
            <span className="relative text-muted group-hover:text-white transition-colors duration-500">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
