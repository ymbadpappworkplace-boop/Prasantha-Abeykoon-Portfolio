"use client";

import { useEffect } from "react";

/**
 * Page-wide pointer effects:
 *  - hero spotlight + portrait parallax
 *  - pointer aura across the appointments showcase
 *  - magnetic pull on buttons and pills
 *  - 3D tilt and cursor shine on [data-tilt] cards
 *  - count-up for [data-count] numbers
 * All of it is skipped for touch input and reduced-motion users.
 */
export default function MotionLayer() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const cleanups: (() => void)[] = [];

    const hero = document.querySelector<HTMLElement>(".hero");
    if (hero && fine && !reduce) {
      let frame = 0;
      const onMove = (event: PointerEvent) => {
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          const rect = hero.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          hero.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
          hero.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
          hero.style.setProperty("--px", (x - 0.5).toFixed(3));
          hero.style.setProperty("--py", (y - 0.5).toFixed(3));
        });
      };
      const onLeave = () => {
        hero.style.setProperty("--px", "0");
        hero.style.setProperty("--py", "0");
      };

      hero.addEventListener("pointermove", onMove, { passive: true });
      hero.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
        if (frame) window.cancelAnimationFrame(frame);
      });
    }

    // The appointments section gets two roaming auras that chase the cursor.
    const showcase = document.querySelector<HTMLElement>(".appointments");
    if (showcase && fine && !reduce) {
      let frame = 0;
      const onMove = (event: PointerEvent) => {
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          const rect = showcase.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          showcase.style.setProperty("--ax", `${(x * 100).toFixed(2)}%`);
          showcase.style.setProperty("--ay", `${(y * 100).toFixed(2)}%`);
        });
      };
      const onLeave = () => {
        showcase.style.removeProperty("--ax");
        showcase.style.removeProperty("--ay");
      };

      showcase.addEventListener("pointermove", onMove, { passive: true });
      showcase.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        showcase.removeEventListener("pointermove", onMove);
        showcase.removeEventListener("pointerleave", onLeave);
        if (frame) window.cancelAnimationFrame(frame);
      });
    }

    // Buttons lean gently toward the cursor.
    if (fine && !reduce) {
      document
        .querySelectorAll<HTMLElement>(".btn, .pill")
        .forEach((el) => {
          let frame = 0;
          let latest: PointerEvent | null = null;
          const strength = el.classList.contains("pill") ? 7 : 9;

          const apply = () => {
            frame = 0;
            if (!latest) return;
            const rect = el.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            const x = (latest.clientX - (rect.left + rect.width / 2)) / rect.width;
            const y = (latest.clientY - (rect.top + rect.height / 2)) / rect.height;
            el.style.setProperty("--magx", `${(x * strength).toFixed(2)}px`);
            el.style.setProperty("--magy", `${(y * strength).toFixed(2)}px`);
          };

          const onMove = (event: PointerEvent) => {
            latest = event;
            if (!frame) frame = window.requestAnimationFrame(apply);
          };

          const onLeave = () => {
            latest = null;
            if (frame) {
              window.cancelAnimationFrame(frame);
              frame = 0;
            }
            el.style.setProperty("--magx", "0px");
            el.style.setProperty("--magy", "0px");
          };

          el.addEventListener("pointermove", onMove, { passive: true });
          el.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerleave", onLeave);
            if (frame) window.cancelAnimationFrame(frame);
          });
        });
    }

    if (fine && !reduce) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        let frame = 0;
        let latest: PointerEvent | null = null;

        const apply = () => {
          frame = 0;
          if (!latest) return;
          const rect = card.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const x = (latest.clientX - rect.left) / rect.width;
          const y = (latest.clientY - rect.top) / rect.height;
          card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
          card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
          card.style.setProperty("--rx", `${((0.5 - y) * 6).toFixed(2)}deg`);
          card.style.setProperty("--ry", `${((x - 0.5) * 8).toFixed(2)}deg`);
          card.style.setProperty("--lift", "-6px");
          card.classList.add("is-tilting");
        };

        const onMove = (event: PointerEvent) => {
          latest = event;
          if (!frame) frame = window.requestAnimationFrame(apply);
        };

        const onLeave = () => {
          latest = null;
          if (frame) {
            window.cancelAnimationFrame(frame);
            frame = 0;
          }
          card.classList.remove("is-tilting");
          card.style.removeProperty("--rx");
          card.style.removeProperty("--ry");
          card.style.removeProperty("--lift");
        };

        card.addEventListener("pointermove", onMove, { passive: true });
        card.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", onLeave);
          if (frame) window.cancelAnimationFrame(frame);
        });
      });
    }

    // Hero recedes into depth as the page scrolls away from it.
    if (hero && !reduce) {
      let frame = 0;
      const update = () => {
        frame = 0;
        const h = hero.offsetHeight || 1;
        const p = Math.min(Math.max(window.scrollY / h, 0), 1);
        hero.style.setProperty("--sp", p.toFixed(4));
      };
      const onScroll = () => {
        if (!frame) frame = window.requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        if (frame) window.cancelAnimationFrame(frame);
      });
    }

    // Ink ripple bursts from the click point on buttons.
    if (!reduce) {
      const onDown = (event: PointerEvent) => {
        const el = (event.target as Element | null)?.closest?.<HTMLElement>(".btn, .pill");
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2.2;
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        el.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
      };
      document.addEventListener("pointerdown", onDown);
      cleanups.push(() => document.removeEventListener("pointerdown", onDown));
    }

    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if (counters.length) {
      if (reduce || typeof IntersectionObserver === "undefined") {
        counters.forEach((el) => {
          if (el.dataset.count) el.textContent = el.dataset.count;
        });
      } else {
        const frames = new Set<number>();
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const el = entry.target as HTMLElement;
              observer.unobserve(el);
              const target = Number(el.dataset.count);
              if (!Number.isFinite(target) || target <= 0) continue;

              const duration = 1500;
              const start = performance.now();
              el.textContent = "0";

              const tick = (now: number) => {
                const t = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                el.textContent = String(Math.round(target * eased));
                if (t < 1) frames.add(window.requestAnimationFrame(tick));
              };
              frames.add(window.requestAnimationFrame(tick));
            }
          },
          { threshold: 0.35 }
        );

        // Hold the count-up until the intro curtain has opened.
        const wait = document.documentElement.classList.contains("is-intro") ? 1900 : 0;
        const timer = window.setTimeout(() => counters.forEach((el) => observer.observe(el)), wait);
        cleanups.push(() => {
          window.clearTimeout(timer);
          observer.disconnect();
          frames.forEach((id) => window.cancelAnimationFrame(id));
        });
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
