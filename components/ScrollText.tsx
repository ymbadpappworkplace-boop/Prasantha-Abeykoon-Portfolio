"use client";

import { useEffect, useRef } from "react";

type ScrollTextProps = { text: string; className?: string };

/**
 * Words light up one by one as the passage scrolls through the viewport,
 * like ink filling the line.
 */
export default function ScrollText({ text, className = "" }: ScrollTextProps) {
  const ref = useRef<HTMLQuoteElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--fill", "1");
      el.classList.add("is-static");
      return;
    }

    const spans = Array.from(el.querySelectorAll<HTMLElement>(".sw"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top sits at 85% of the viewport, 1 when it reaches 40%.
      const progress = Math.min(Math.max((vh * 0.85 - rect.top) / (vh * 0.45), 0), 1);
      const lit = progress * spans.length;
      spans.forEach((span, index) => {
        const amount = Math.min(Math.max(lit - index, 0), 1);
        span.style.setProperty("--w", amount.toFixed(3));
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <blockquote ref={ref} className={`scroll-text ${className}`.trim()} aria-label={text}>
      {words.map((word, index) => (
        <span className="sw" key={`${word}-${index}`} aria-hidden="true">
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </blockquote>
  );
}
