"use client";

import { useMousePosition } from "@/lib/hooks";

export default function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="spotlight hidden md:block"
      style={{ left: x, top: y }}
    />
  );
}
