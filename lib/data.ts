// All site content lives here. Edit this file to update the site.

import type { IconName } from "@/components/Icon";

export const person = {
  name: "Prasantha Abeykoon",
  first: "Prasantha",
  last: "Abeykoon",
  fullName: "Prasantha Chandra Kumara Abeykoon",
  initials: "PA",
  role: "Chairman, Management Frontiers",
  secondRole: "Hon. General Secretary, YMBA",
  headline: "Helping Sri Lankan businesses perform better since 1997.",
  location: "Colombo, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/prasantha-abeykoon-b09154235/",
  // High-resolution portrait set: 4K master plus web derivatives
  photo: "/profile-1200.jpg" as string,
  photoSrcSet: "/profile-800.jpg 800w, /profile-1200.jpg 1200w, /profile-4k.jpg 3840w",
};

export const stats = [
  { value: "29", label: "Years of consulting practice" },
  { value: "3", label: "Leadership roles today" },
  { value: "4", label: "Board directorships held" },
  { value: "2", label: "Professional institutes" },
];

export const affiliations: { name: string; logo?: string }[] = [
  { name: "Management Frontiers", logo: "/logos/mf-logo.webp" },
  { name: "YMBA", logo: "/logos/ymba-logo.webp" },
  { name: "Renuka Agro Exports", logo: "/logos/renuka-logo.webp" },
  { name: "CA Sri Lanka", logo: "/logos/ca-sri-lanka-logo.png" },
  { name: "CMA Sri Lanka", logo: "/logos/cma-logo.png" },
];

export const about = {
  quote: "Better performance is a craft, not a slogan.",
  paragraphs: [
    "Prasantha Abeykoon is Chairman of Management Frontiers, the management consulting practice he co-founded in 1997 to improve the performance of contemporary business in Sri Lanka.",
    "An MBA graduate and an associate of the Institute of Chartered Accountants of Sri Lanka, he has served on the boards of the Renuka group and is today a director of Renuka Agro Exports.",
    "He is also the Hon. General Secretary of the YMBA, a role he holds alongside his chairmanship of Management Frontiers.",
  ],
  facts: [
    { label: "Based in", value: "Colombo, Sri Lanka" },
    { label: "Practice", value: "Management Frontiers, est. 1997" },
    { label: "Education", value: "MBA, Postgraduate Institute of Management" },
    { label: "Today", value: "Chairman · Hon. General Secretary" },
  ],
};

export const expertise: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: "Strategy & performance",
    text: "Clarifying direction and turning plans into measurable improvements in how a business performs.",
  },
  {
    icon: "shield",
    title: "Governance & boards",
    text: "Board service across the Renuka group, backed by a governance lens shaped by chartered accountancy.",
  },
  {
    icon: "chart",
    title: "Financial leadership",
    text: "An accountant's rigour applied to commercial decisions, risk and long-term value creation.",
  },
  {
    icon: "users",
    title: "Institution building",
    text: "Almost three decades building a consulting practice and supporting professional and community institutions.",
  },
];

export type Appointment = {
  role: string;
  org: string;
  tag: string;
  note: string;
  logo: string;
  logoAlt: string;
};

export const appointments: Appointment[] = [
  {
    role: "Hon. General Secretary",
    org: "YMBA",
    tag: "Current appointment",
    note: "Honorary office within the association's leadership, serving its members and programmes.",
    logo: "/logos/ymba-logo.webp",
    logoAlt: "Seal of the Colombo Young Men's Buddhist Association",
  },
  {
    role: "Chairman",
    org: "Management Frontiers",
    tag: "Since 1997",
    note: "The consulting practice he co-founded to lift the performance of Sri Lankan business.",
    logo: "/logos/mf-logo.webp",
    logoAlt: "Management Frontiers logo",
  },
  {
    role: "Director",
    org: "Renuka Agro Exports Ltd",
    tag: "Current",
    note: "Board oversight of the Renuka group's agri-export business.",
    logo: "/logos/renuka-logo.webp",
    logoAlt: "Renuka Group logo",
  },
];

export const journey = [
  { when: "Early career", title: "C&L", text: "Worked at C&L, the firm where he and his future co-founder both began." },
  { when: "1997", title: "Founded Management Frontiers", text: "Set up a management consulting practice in Sri Lanka alongside Tilak, dedicated to lifting the performance of business." },
  { when: "Later", title: "Boards of the Renuka group", text: "Served as a director of Renuka Holdings, Renuka Agri Foods and Renuka Foods." },
  { when: "Today", title: "Chairman, director and Hon. General Secretary", text: "Chairs Management Frontiers, sits on the board of Renuka Agro Exports and serves as Hon. General Secretary of the YMBA." },
];

export type CredentialItem = { name: string; detail: string; logo?: string; logoAlt?: string };

export const credentials: {
  icon: IconName;
  title: string;
  items: CredentialItem[];
}[] = [
  {
    icon: "book",
    title: "Education",
    items: [
      { name: "MBA", detail: "Postgraduate Institute of Management" },
      { name: "Undergraduate degree", detail: "University of Sri Jayewardenepura" },
    ],
  },
  {
    icon: "award",
    title: "Professional bodies",
    items: [
      {
        name: "Associate",
        detail: "Institute of Chartered Accountants of Sri Lanka",
        logo: "/logos/ca-mark.png",
        logoAlt: "CA Sri Lanka crest",
      },
      {
        name: "Member",
        detail: "Institute of Certified Management Accountants",
        logo: "/logos/cma-mark.png",
        logoAlt: "CMA Sri Lanka emblem",
      },
    ],
  },
  {
    icon: "building",
    title: "Boards",
    items: [
      { name: "Director, current", detail: "Renuka Agro Exports Ltd" },
      { name: "Director, former", detail: "Renuka Holdings PLC" },
      { name: "Director, former", detail: "Renuka Agri Foods PLC" },
      { name: "Director, former", detail: "Renuka Foods PLC" },
    ],
  },
];
