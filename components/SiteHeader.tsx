"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { person } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus" },
  { href: "#appointments", label: "Appointments" },
  { href: "#journey", label: "Journey" },
  { href: "#credentials", label: "Credentials" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? Math.min(root.scrollTop / max, 1) : 0);
      setScrolled(root.scrollTop > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Highlight the section currently crossing the reading line.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.36;
      let current = "";
      for (const link of links) {
        const el = document.getElementById(link.href.slice(1));
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = link.href;
      }
      setActive(current);
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-head${scrolled ? " is-scrolled" : ""}`}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <nav className="nav" aria-label="Main">
        <div className="nav-in">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>
            <span className="mark" aria-hidden="true">{person.initials}</span>
            <span className="brand-name">{person.name}</span>
          </a>

          <div className="links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href ? "is-active" : undefined}
                aria-current={active === link.href ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a
              className="pill"
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={16} />
              <span className="pill-label">Connect</span>
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? "close" : "menu"} size={20} />
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>

        <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}
