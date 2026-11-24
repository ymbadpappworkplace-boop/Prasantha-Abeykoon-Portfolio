"use client";

import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; vx: number; vy: number; r: number; gold: boolean };

/**
 * Drifting constellation behind the hero. Points link up when close,
 * and reach toward the cursor. Pauses whenever the hero is off-screen.
 */
export default function Constellation() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    const pointer = { x: -9999, y: -9999 };
    let frame = 0;
    let running = false;

    const seed = () => {
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, Math.max(34, (width * height) / 16000)));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.5,
        gold: Math.random() < 0.28,
      }));
    };

    const link = 120;
    const reach = 170;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const d of dots) {
        // Gentle pull toward the cursor.
        const dx = pointer.x - d.x;
        const dy = pointer.y - d.y;
        const dist = Math.hypot(dx, dy);
        if (dist < reach && dist > 1) {
          d.vx += (dx / dist) * 0.012;
          d.vy += (dy / dist) * 0.012;
        }
        d.vx *= 0.985;
        d.vy *= 0.985;
        d.vx += (Math.random() - 0.5) * 0.012;
        d.vy += (Math.random() - 0.5) * 0.012;
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        if (d.y > height + 10) d.y = -10;
      }

      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < link) {
            ctx.strokeStyle = `rgba(169, 187, 255, ${(1 - dist / link) * 0.16})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const pd = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (pd < reach) {
          ctx.strokeStyle = `rgba(227, 201, 143, ${(1 - pd / reach) * 0.45})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      for (const d of dots) {
        ctx.fillStyle = d.gold ? "rgba(227, 201, 143, 0.85)" : "rgba(200, 212, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = window.requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      window.cancelAnimationFrame(frame);
    };

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    seed();
    const resize = new ResizeObserver(() => seed());
    resize.observe(host);

    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibility.observe(host);

    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      resize.disconnect();
      visibility.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="constellation" aria-hidden="true" />;
}
