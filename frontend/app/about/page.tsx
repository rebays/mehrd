import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { SectionHead } from "../components/SectionHead";
import { StatBand } from "../components/StatBand";
import { DivisionGroup } from "../components/DivisionGroup";
import { Eyebrow } from "../components/Eyebrow";
import { CTA } from "../components/CTA";
import { Icon, type IconName } from "../components/Icon";

export const metadata: Metadata = {
  title: "About the Ministry — MEHRD",
  description:
    "The Ministry of Education & Human Resources Development leads education across the Solomon Islands — our mandate, leadership, divisions and how to reach us.",
};

const PILLARS = [
  {
    icon: "mega" as const,
    title: "Our vision",
    body: "An inclusive, quality education system that equips every Solomon Islander to thrive and contribute to a peaceful, prosperous nation.",
  },
  {
    icon: "check" as const,
    title: "Our mission",
    body: "To provide accessible, equitable and relevant education and training through effective leadership, sound policy and well-supported schools.",
  },
  {
    icon: "grid" as const,
    title: "Our mandate",
    body: "MEHRD plans, funds, regulates and quality-assures education from early childhood to tertiary, and develops the nation's human resources.",
  },
];

const STATS = [
  { num: "170k+",     label: "Students enrolled nationwide" },
  { num: "8,400+",    label: "Teachers in the service" },
  { num: "9",         label: "Provinces & Honiara served" },
  { num: "2016–2030", label: "Education Strategic Framework" },
];

const LEADERS = [
  {
    role: "Minister for Education & HRD",
    name: "Hon. Minister",
    body: "Provides political leadership and is accountable to Cabinet and Parliament for the education sector.",
  },
  {
    role: "Permanent Secretary",
    name: "Office of the Permanent Secretary",
    body: "Heads the ministry's administration and leads the implementation of education policy and the national budget.",
  },
  {
    role: "Undersecretaries",
    name: "Professional & Corporate",
    body: "Oversee the technical and corporate arms of the ministry across its four service groups.",
  },
];

const DIVISIONS = [
  {
    title: "Strategic Services",
    variant: "default" as const,
    items: [
      { href: "/about#divisions", label: "Strategic Support Unit" },
      { href: "/about#divisions", label: "National Training Unit" },
      { href: "/about#divisions", label: "National Education Board" },
    ],
  },
  {
    title: "Corporate Services",
    variant: "green" as const,
    items: [
      { href: "/about#divisions", label: "Finance" },
      { href: "/about#divisions", label: "Workforce Management" },
      { href: "/about#divisions", label: "Information Services" },
      { href: "/about#divisions", label: "Procurement & Assets" },
    ],
  },
  {
    title: "Education Services",
    variant: "default" as const,
    items: [
      { href: "/teachers",        label: "Teaching Service Division" },
      { href: "/about#divisions",  label: "Education Provider Support" },
      { href: "/about#divisions",  label: "School Services" },
    ],
  },
  {
    title: "Teaching & Learning",
    variant: "gold" as const,
    items: [
      { href: "/about#divisions", label: "Curriculum Development" },
      { href: "/about#divisions", label: "Teacher Professional Dev." },
      { href: "/results",         label: "National Exams (NEAD)" },
      { href: "/about#divisions", label: "National Library" },
    ],
  },
];

const CONTACTS: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "mail",  label: "Email",     value: "info@mehrd.gov.sb",        href: "mailto:info@mehrd.gov.sb" },
  { icon: "phone", label: "Telephone", value: "+677 28803",               href: "tel:+67728803" },
  { icon: "pin",   label: "Address",   value: "MEHRD Headquarters, Lengakiki Ridge, Honiara, Solomon Islands" },
];

const PROVINCIAL_OFFICES = [
  "Central Islands", "Choiseul", "Guadalcanal", "Honiara City",
  "Isabel", "Makira-Ulawa", "Malaita", "Rennell & Bellona",
  "Temotu", "Western", "Western Provincial Education",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Ministry"
        title="About MEHRD"
        intro="The Ministry of Education & Human Resources Development is responsible for education and training across the Solomon Islands — from early childhood through to tertiary and the development of the nation's workforce."
        crumbs={[{ href: "/", label: "Home" }, { label: "About the Ministry" }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="grid cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="card">
                <span
                  className="hero__quick-ico"
                  style={{ width: 44, height: 44 }}
                  aria-hidden="true"
                >
                  <Icon name={p.icon} size={22} />
                </span>
                <h3 style={{ marginTop: "var(--sp-4)", fontSize: "var(--t-h4)" }}>{p.title}</h3>
                <p className="muted" style={{ marginTop: "var(--sp-2)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatBand items={STATS} />

      <section className="section">
        <div className="wrap split-main">
          <div>
            <SectionHead
              eyebrow="Who we are"
              title="Leading education for every island"
              intro="MEHRD sets the policy direction for the education sector, funds and supports schools in all nine provinces and Honiara, and quality-assures teaching and learning nationwide."
            />
            <p className="muted" style={{ maxWidth: "60ch" }}>
              Our work is guided by the National Education Action Plan and the Education
              Strategic Framework 2016–2030, alongside the Education Act 2023. Together these
              set out how we widen access, lift quality, manage resources and improve the
              efficiency of the system so that learning outcomes keep improving.
            </p>
            <div style={{ display: "flex", gap: "var(--sp-3)", flexWrap: "wrap", marginTop: "var(--sp-5)" }}>
              <Link href="/documents" className="btn btn--accent">
                Read our key documents <Icon name="arrow" size={18} />
              </Link>
              <Link href="/data" className="btn btn--secondary">
                Explore education data
              </Link>
            </div>
          </div>
          <aside>
            <SectionHead eyebrow="Leadership" title="How we are led" small />
            <div className="card" style={{ padding: 0 }}>
              {LEADERS.map((l, i) => (
                <div
                  key={l.role}
                  style={{
                    padding: "var(--sp-4) var(--sp-5)",
                    borderBottom: i < LEADERS.length - 1 ? "1px solid var(--line)" : 0,
                  }}
                >
                  <Eyebrow>{l.role}</Eyebrow>
                  <h3 style={{ marginTop: "var(--sp-2)", fontSize: "var(--t-h4)" }}>{l.name}</h3>
                  <p className="muted" style={{ marginTop: "var(--sp-2)" }}>{l.body}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section
        className="section"
        id="divisions"
        style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <SectionHead
            eyebrow="Organisation"
            title="Our divisions"
            intro="The ministry is organised into four service groups, each bringing together the units that keep schools running and standards high."
          />
          <div className="grid cols-2">
            {DIVISIONS.map((d) => (
              <DivisionGroup key={d.title} title={d.title} items={d.items} variant={d.variant} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap split-main">
          <div>
            <SectionHead
              eyebrow="Connect"
              title="Contact the ministry"
              intro="Reach the national office during business hours, Monday to Friday. For school-specific matters, your school or provincial education office is the fastest first point of contact."
            />
            <div className="grid cols-3">
              {CONTACTS.map((c) => (
                <div key={c.label} className="card">
                  <span
                    className="hero__quick-ico"
                    style={{ width: 44, height: 44 }}
                    aria-hidden="true"
                  >
                    <Icon name={c.icon} size={22} />
                  </span>
                  <Eyebrow>{c.label}</Eyebrow>
                  <p style={{ marginTop: "var(--sp-2)", color: "var(--ink)" }}>
                    {c.href ? <a href={c.href}>{c.value}</a> : c.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <aside id="offices">
            <SectionHead eyebrow="Across the country" title="Provincial offices" small />
            <div className="card">
              <p className="muted" style={{ marginBottom: "var(--sp-3)" }}>
                Provincial Education Authorities manage education locally in each province:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {PROVINCIAL_OFFICES.map((p) => (
                  <li key={p} className="chip">{p}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTA
        eyebrow="Get in touch"
        title="Have a question for the ministry?"
        body="Whether you are a parent, teacher or partner, we want to hear from you. Email the national office or visit your nearest provincial education authority."
        action={{ href: "mailto:info@mehrd.gov.sb", label: "Email the ministry" }}
      />
    </>
  );
}
