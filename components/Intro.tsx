"use client";

import { useEffect } from "react";
import { person } from "@/lib/data";

/**
 * First-impression intro: a gold monogram draws itself, a counter runs,
 * then a two-panel curtain splits to unveil the hero.
 * The <html> element carries `is-intro` (set by an inline script before paint)
 * which keeps the hero's entrance animations paused until the curtain opens.
 */
export default function Intro() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("is-intro")) return;

    const counter = document.querySelector<HTMLElement>(".intro-count");
    const start = performance.now();
    const duration = 1250;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      if (counter) counter.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      if (t < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);

    const open = window.setTimeout(() => root.classList.add("intro-out"), 1500);
    const done = window.setTimeout(() => {
      root.classList.remove("is-intro", "intro-out");
      try {
        sessionStorage.setItem("pa-intro", "1");
      } catch {
        /* storage blocked: intro simply plays again next time */
      }
    }, 2600);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(open);
      window.clearTimeout(done);
    };
  }, []);

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-panel intro-panel-top" />
      <div className="intro-panel intro-panel-bottom" />
      <div className="intro-core">
        <svg className="intro-mark" viewBox="0 0 120 120" width="120" height="120">
          <circle className="intro-ring" cx="60" cy="60" r="54" />
          <text x="60" y="60" textAnchor="middle" dominantBaseline="central">
            {person.initials}
          </text>
        </svg>
        <div className="intro-meta">
          <span className="intro-name">{person.name}</span>
          <span className="intro-count">000</span>
        </div>
        <span className="intro-bar" />
      </div>
    </div>
  );
}
