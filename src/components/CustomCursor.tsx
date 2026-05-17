"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/lib/hooks";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .cursor-hover'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // Show cursor after a brief delay to avoid flash at 0,0
    const timer = setTimeout(() => setVisible(true), 100);

    return () => {
      clearTimeout(timer);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // Re-attach listeners when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const handleEnter = () => setHovering(true);
      const handleLeave = () => setHovering(false);

      document
        .querySelectorAll('a, button, [role="button"], .cursor-hover')
        .forEach((el) => {
          el.addEventListener("mouseenter", handleEnter);
          el.addEventListener("mouseleave", handleLeave);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`custom-cursor ${hovering ? "hovering" : ""}`}
      style={{
        left: x,
        top: y,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
