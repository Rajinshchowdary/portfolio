"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-sm font-semibold gradient-text">
              {SITE_CONFIG.name}.dev
            </span>
            <p className="text-xs text-muted">
              © {currentYear} {SITE_CONFIG.fullName}. Crafted with intention.
            </p>
          </div>

          {/* Center - Status */}
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            All systems operational
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            {[
              { href: SITE_CONFIG.socials.github, label: "GitHub" },
              { href: SITE_CONFIG.socials.linkedin, label: "LinkedIn" },
              { href: SITE_CONFIG.socials.twitter, label: "Twitter" },
            ].filter(link => link.href).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors link-underline cursor-hover"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p
            className="text-[10px] text-muted/30 hover:text-muted/60 transition-colors cursor-default select-none"
            title="You found the easter egg! 🥚"
          >
            Built with Next.js, Tailwind CSS & Framer Motion · Deployed on
            Vercel ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
