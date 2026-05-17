"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMMAND_ITEMS } from "@/lib/constants";
import { useKeyboardShortcut } from "@/lib/hooks";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useKeyboardShortcut("k", () => setOpen((prev) => !prev), { ctrl: true });

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(
    () =>
      COMMAND_ITEMS.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const handleSelect = (item: (typeof COMMAND_ITEMS)[number]) => {
    setOpen(false);

    if (item.action === "navigate") {
      const el = document.querySelector(item.target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (item.action === "link") {
      window.open(item.target, "_blank");
    } else if (item.action === "theme") {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="command-palette-overlay"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90vw] max-w-lg z-[9995] rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted shrink-0"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted/50 outline-none"
              />
              <kbd className="px-1.5 py-0.5 rounded text-[10px] text-muted bg-surface-elevated border border-border font-mono">
                esc
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <div className="px-5 py-8 text-center text-sm text-muted">
                  No results found.
                </div>
              ) : (
                filtered.map((item, i) => (
                  <button
                    key={item.label}
                    onClick={() => handleSelect(item)}
                    className="w-full flex items-center gap-3 px-5 py-2.5 text-left hover:bg-surface-elevated transition-colors duration-150"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-sm text-foreground">
                      {item.label}
                    </span>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-border flex items-center justify-between text-[10px] text-muted">
              <span>Navigate with ↑↓ · Select with ↵</span>
              <span>⌘K to toggle</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
