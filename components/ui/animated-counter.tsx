"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  durationMs?: number;
}

/** Licznik animujący się od 0 do `value`, gdy wejdzie w viewport. */
export function AnimatedCounter({
  value,
  decimals = 0,
  suffix = "",
  durationMs = 1400,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: durationMs / 1000,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent =
          latest.toLocaleString("pl-PL", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, suffix, durationMs]);

  return (
    <span ref={ref}>
      {(0).toLocaleString("pl-PL", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
