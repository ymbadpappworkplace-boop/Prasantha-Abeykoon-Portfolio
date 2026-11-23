import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "linkedin"
  | "pin"
  | "target"
  | "shield"
  | "chart"
  | "users"
  | "book"
  | "award"
  | "building"
  | "menu"
  | "close"
  | "check"
  | "spark"
  | "bolt";

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10.5v6M8 7.5h.01M12 16.5v-6" />
      <path d="M12 13c0-1.6 1.2-2.5 2.6-2.5S17 11.4 17 13v3.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.6 6-10.5a6 6 0 1 0-12 0C6 15.4 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 19 6v5.9c0 4.2-2.9 7.5-7 9-4.1-1.5-7-4.8-7-9V6l7-2.8z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 17v-5M12.5 17V8M17 17v-3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19.5c0-2.8 2.5-4.8 5.5-4.8s5.5 2 5.5 4.8" />
      <path d="M16 5.7a3 3 0 0 1 0 5.8M17.5 14.9c1.9.5 3 2.1 3 4.1" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.8A2.3 2.3 0 0 1 7.3 2.5H20v15.8H7.3A2.3 2.3 0 0 0 5 20.6z" />
      <path d="M5 4.8v15.8M9 6.5h7" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.2" />
      <path d="m8.8 13.6-1.6 7.2 4.8-2.8 4.8 2.8-1.6-7.2" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21" />
      <path d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5V21M3 21h18M7.5 8h3M7.5 12h3M7.5 16h3" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  check: (
    <>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.2c.5 4.3 2.5 6.3 6.8 6.8-4.3.5-6.3 2.5-6.8 6.8-.5-4.3-2.5-6.3-6.8-6.8 4.3-.5 6.3-2.5 6.8-6.8z" />
      <path d="M18.5 16.5c.2 1.8 1.1 2.7 2.9 2.9-1.8.2-2.7 1.1-2.9 2.9-.2-1.8-1.1-2.7-2.9-2.9 1.8-.2 2.7-1.1 2.9-2.9z" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 3 5.5 13H11l-1 8 7.5-10.2H12l1-7.8z" />
    </>
  ),
};

export default function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
