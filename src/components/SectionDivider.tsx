"use client";

import { motion } from "framer-motion";
import { lineReveal } from "@/lib/animations";

export default function SectionDivider() {
  return (
    <motion.div
      variants={lineReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
      className="section-divider max-w-6xl mx-auto"
      style={{ transformOrigin: "left" }}
    />
  );
}
