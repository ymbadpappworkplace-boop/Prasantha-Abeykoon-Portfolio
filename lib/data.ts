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
  { value: "3", label: "Professional bodies" },
];

export const affiliations: { name: string; logo?: string }[] = [
  { name: "Management Frontiers", logo: "/logos/mf-logo.webp" },
  { name: "YMBA", logo: "/logos/ymba-logo.webp" },
  { name: "Renuka Agro Exports", logo: "/logos/renuka-logo.webp" },
  { name: "CA Sri Lanka", logo: "/logos/ca-sri-lanka-logo.png" },
  { name: "CMA Sri Lanka", logo: "/logos/cma-logo.png" },
  { name: "Malaysian Evaluation Society", logo: "/logos/mes-mark.png" },
];

export const about = {
  quote: "Better performance is a craft, not a slogan.",
  paragraphs: [
    "Mr. Prasantha Abeykoon joined the Colombo YMBA in July 2003 and was appointed to its Board of Management in November 2004. He assumed office as Treasurer the following month and served in that capacity for nearly nineteen years before being appointed General Secretary in 2022.",
    "A graduate of the University of Sri Jayewardenepura, he holds an MBA from its Postgraduate Institute of Management, where he earned one of only two merit passes awarded in his cohort. He is a Fellow of the Institute of Chartered Accountants of Sri Lanka and CMA Sri Lanka, and a member of the Malaysian Evaluation Society.",
    "Mr. Abeykoon began his career with Coopers & Lybrand, serving in its Sri Lanka and Botswana offices. He subsequently held senior corporate positions as Finance Manager, Director and Managing Director/CEO of a large group of companies. He also serves as a Director and Audit Committee member of several listed companies.",
    "As Founder Director and Principal Consultant of Management Frontiers, the practice he co-founded in 1997 and now chairs, he advises governments on public-sector reform, with particular expertise in public finance, budgeting, results-based management and the effective use of public resources. His assignments have been undertaken directly for governments, including those of Malaysia and Zimbabwe, and for development partners such as the World Bank, Asian Development Bank, African Development Bank, UNDP, European Union, GIZ and JICA.",
    "His international career spans ten countries across Asia and Africa. He currently advises the governments of Sarawak, Malaysia, and Nepal on results-based management through assignments supported by the World Bank and Asian Development Bank.",
  ],
  facts: [
    { label: "Based in", value: "Colombo, Sri Lanka" },
    { label: "Practice", value: "Management Frontiers, est. 1997" },
    { label: "Education", value: "MBA with merit, Postgraduate Institute of Management" },
    { label: "Today", value: "Chairman · Hon. General Secretary" },
  ],
};

export const expertise: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: "Strategy & performance",
    text: "Results-based management and public-sector reform, turning plans into measurable improvements in how institutions perform.",
  },
  {
    icon: "shield",
    title: "Governance & boards",
    text: "Board service across the Renuka group and audit committee membership of several listed companies, backed by a chartered accountancy lens.",
  },
  {
    icon: "chart",
    title: "Financial leadership",
    text: "Public finance, budgeting and the effective use of public resources, grounded in an accountant's rigour and commercial judgement.",
  },
  {
    icon: "users",
    title: "Institution building",
    text: "Two decades of service to the Colombo YMBA and advisory work for governments and development partners across ten countries.",
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
    tag: "Since 2022",
    note: "A member since 2003, he joined the Board of Management in 2004 and served as Treasurer for nearly nineteen years before becoming General Secretary.",
    logo: "/logos/ymba-logo.webp",
    logoAlt: "Seal of the Colombo Young Men's Buddhist Association",
  },
  {
    role: "Chairman",
    org: "Management Frontiers",
    tag: "Since 1997",
    note: "Founder Director and Principal Consultant of the consulting practice he co-founded, advising governments on public-sector reform and results-based management.",
    logo: "/logos/mf-logo.webp",
    logoAlt: "Management Frontiers logo",
  },
  {
    role: "Director",
    org: "Renuka Agro Exports Ltd",
    tag: "Current",
    note: "Board oversight of the Renuka group's agri-export business, alongside audit committee service on several listed company boards.",
    logo: "/logos/renuka-logo.webp",
    logoAlt: "Renuka Group logo",
  },
];

export const journey = [
  { when: "Early career", title: "Coopers & Lybrand", text: "Began his career with Coopers & Lybrand, serving in the firm's Sri Lanka and Botswana offices." },
  { when: "Corporate", title: "Finance Manager to MD/CEO", text: "Held senior positions as Finance Manager, Director and Managing Director/CEO of a large group of companies, and served on the boards of the Renuka group." },
  { when: "1997", title: "Founded Management Frontiers", text: "Co-founded the management consulting practice he now chairs as Founder Director and Principal Consultant." },
  { when: "2003", title: "Joined the Colombo YMBA", text: "Became a member of the Colombo Young Men's Buddhist Association in July 2003." },
  { when: "2004", title: "Board of Management and Treasurer", text: "Appointed to the Board of Management in November 2004 and assumed office as Treasurer the following month." },
  { when: "2022", title: "General Secretary, YMBA", text: "Appointed General Secretary after nearly nineteen years as Treasurer, and continues to serve in that office today." },
  { when: "Today", title: "International advisory", text: "Advises the governments of Sarawak, Malaysia, and Nepal on results-based management, with assignments for the World Bank, ADB and other development partners across ten countries." },
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
      {
        name: "MBA, with merit",
        detail: "Postgraduate Institute of Management — one of only two merit passes in his cohort",
        logo: "/logos/pim-mark.svg",
        logoAlt: "PIM emblem",
      },
      {
        name: "Graduate",
        detail: "University of Sri Jayewardenepura",
        logo: "/logos/usj-mark.png",
        logoAlt: "University of Sri Jayewardenepura crest",
      },
    ],
  },
  {
    icon: "award",
    title: "Professional bodies",
    items: [
      {
        name: "Fellow",
        detail: "Institute of Chartered Accountants of Sri Lanka",
        logo: "/logos/ca-mark.png",
        logoAlt: "CA Sri Lanka crest",
      },
      {
        name: "Fellow",
        detail: "Institute of Certified Management Accountants of Sri Lanka",
        logo: "/logos/cma-mark.png",
        logoAlt: "CMA Sri Lanka emblem",
      },
      {
        name: "Member",
        detail: "Malaysian Evaluation Society",
        logo: "/logos/mes-mark.png",
        logoAlt: "Malaysian Evaluation Society emblem",
      },
    ],
  },
  {
    icon: "building",
    title: "Boards",
    items: [
      { name: "Director, current", detail: "Renuka Agro Exports Ltd", logo: "/logos/renuka-logo.webp", logoAlt: "Renuka Group logo" },
      { name: "Director & Audit Committee member", detail: "Several listed companies" },
      { name: "Director, former", detail: "Renuka Holdings PLC", logo: "/logos/renuka-logo.webp", logoAlt: "Renuka Group logo" },
      { name: "Director, former", detail: "Renuka Agri Foods PLC", logo: "/logos/renuka-logo.webp", logoAlt: "Renuka Group logo" },
      { name: "Director, former", detail: "Renuka Foods PLC", logo: "/logos/renuka-logo.webp", logoAlt: "Renuka Group logo" },
    ],
  },
];
