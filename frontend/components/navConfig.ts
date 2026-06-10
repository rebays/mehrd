import type { IconName } from "./Icon";

export type NavLink = { href: string; label: string; desc?: string; icon?: IconName };
export type NavColumn = { heading: string; links: NavLink[] };
export type NavItem = {
  label: string;
  /** Primary landing page for the top-level item. */
  href: string;
  columns: NavColumn[];
};

export const NAV: readonly NavItem[] = [
  {
    label: "Students",
    href: "/students",
    columns: [
      {
        heading: "Get started",
        links: [
          { href: "/students#enrol",   label: "Enrol your child", desc: "Documents & age placement", icon: "doc" },
          { href: "/students#guides",  label: "School term dates", desc: "2026 academic calendar",    icon: "calendar" },
          { href: "/students#schools", label: "Find a school",     desc: "Across all nine provinces",  icon: "pin" },
        ],
      },
      {
        heading: "Results & study",
        links: [
          { href: "/results",        label: "Exam results",   desc: "Year 7, 10 & 13 placements", icon: "check" },
          { href: "/scholarships",   label: "Scholarships",   desc: "Study awards & forms",       icon: "cap" },
          { href: "/students#fees",  label: "Fees & support", desc: "Fee-free basic education",    icon: "briefcase" },
        ],
      },
    ],
  },
  {
    label: "Teachers",
    href: "/teachers",
    columns: [
      {
        heading: "Teaching service",
        links: [
          { href: "/teachers", label: "Job vacancies",            desc: "Current openings",          icon: "briefcase" },
          { href: "/teachers", label: "Teacher registration",     desc: "Register & renew",          icon: "check" },
          { href: "/teachers", label: "Professional development", desc: "Training & upskilling",      icon: "cap" },
        ],
      },
      {
        heading: "Classroom",
        links: [
          { href: "/about",     label: "Curriculum",          desc: "Frameworks & guides", icon: "doc" },
          { href: "/results",   label: "National exams (NEAD)", desc: "Assessment & marking", icon: "check" },
          { href: "/documents", label: "Teacher resources",    desc: "Forms & reports",      icon: "grid" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/documents",
    columns: [
      {
        heading: "Exams",
        links: [
          { href: "/results",            label: "Exam results", desc: "Latest national results", icon: "check" },
          { href: "/results#placements", label: "Placements",   desc: "Official placement lists", icon: "grid" },
          { href: "/results",            label: "NEAD",         desc: "Exams & assessment",       icon: "doc" },
        ],
      },
      {
        heading: "Support",
        links: [
          { href: "/scholarships",  label: "Scholarships",   desc: "In-country & overseas", icon: "cap" },
          { href: "/documents",     label: "School calendar", desc: "Term dates & holidays", icon: "calendar" },
          { href: "/students#fees", label: "Fees & support", desc: "What families pay",      icon: "briefcase" },
        ],
      },
      {
        heading: "Documents",
        links: [
          { href: "/documents", label: "Reports & policies", desc: "Library & Education Act", icon: "doc" },
          { href: "/data",      label: "Education data",     desc: "Dashboards & statistics", icon: "chart" },
        ],
      },
    ],
  },
  {
    label: "Ministry",
    href: "/about",
    columns: [
      {
        heading: "About",
        links: [
          { href: "/about",            label: "Overview",      desc: "Mandate & leadership", icon: "mega" },
          { href: "/about#divisions",  label: "Divisions",     desc: "Four service groups",  icon: "grid" },
          { href: "/about",            label: "Org structure", desc: "How we are organised", icon: "chart" },
        ],
      },
      {
        heading: "Connect",
        links: [
          { href: "/#news", label: "Latest news",        desc: "Announcements & updates", icon: "mega" },
          { href: "/about", label: "Contact us",         desc: "Email, phone & address",  icon: "mail" },
          { href: "/about", label: "Provincial offices", desc: "Education offices",        icon: "pin" },
        ],
      },
    ],
  },
] as const;
