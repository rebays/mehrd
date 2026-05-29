import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { SectionHead } from "../components/SectionHead";
import { TaskCard } from "../components/TaskCard";
import { DocList, type DocItem } from "../components/DocList";
import { Alert } from "../components/Alert";
import { CTA } from "../components/CTA";
import { Eyebrow } from "../components/Eyebrow";
import { Icon } from "../components/Icon";

export const metadata: Metadata = {
  title: "Scholarships — MEHRD",
  description: "Solomon Islands Government in-country and overseas scholarship opportunities.",
};

const SCHEMES = [
  { href: "#sig",      icon: "cap" as const,       title: "SIG In-Country Scholarship",     body: "Tuition support for accredited tertiary study at SINU and other approved institutions.", cta: "View criteria",      variant: "default" as const },
  { href: "#overseas", icon: "ext" as const,       title: "SIG Overseas Scholarship",       body: "Bilateral awards for study in Australia, Fiji, New Zealand, PNG and beyond.",            cta: "Eligible countries", variant: "green" as const   },
  { href: "#tvet",     icon: "briefcase" as const, title: "Technical & Vocational (TVET)",  body: "Trade, technical and short-course awards aligned with priority sectors.",               cta: "See pathways",       variant: "gold" as const    },
];

const FORMS: DocItem[] = [
  { file: "PDF",  title: "2026 In-country application form",       meta: ["Form", "0.8 MB"],          href: "#" },
  { file: "PDF",  title: "2026 Overseas application form",         meta: ["Form", "1.1 MB"],          href: "#" },
  { file: "PDF",  title: "Scholarships handbook (terms & conditions)", meta: ["Guide", "Updated 2026"], href: "#" },
  { file: "DATE", title: "Key dates 2026",                          meta: ["Calendar", "Schedule"],     href: "#", action: "arrow" },
];

const TIMELINE = [
  { when: "Jan – Feb", what: "Applications open" },
  { when: "Mar",       what: "Provincial roadshows" },
  { when: "Apr",       what: "Application deadline" },
  { when: "May – Jun", what: "Shortlisting & interviews" },
  { when: "Jul",       what: "Award letters issued" },
];

const FAQ = [
  { q: "Who can apply?",                       a: "Solomon Islands citizens with completed secondary or tertiary qualifications relevant to the award category." },
  { q: "Is there an age limit?",               a: "Age limits vary by award. Most undergraduate awards cap at 25; postgraduate awards at 40. See the handbook." },
  { q: "How are awards selected?",             a: "Selection is by an independent panel using merit, equity and national priority criteria." },
  { q: "Can I defer my award?",                a: "Deferrals are permitted only under exceptional circumstances and must be requested in writing." },
];

export default function ScholarshipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Scholarships 2026"
        title="Take the next step in your education journey."
        intro="Solomon Islands Government scholarships support study at home and overseas. Browse award categories, check eligibility and download the application forms below."
        crumbs={[{ href: "/", label: "Home" }, { label: "Scholarships" }]}
      />

      <section className="section">
        <div className="wrap">
          <Alert
            icon="mega"
            title="Applications for the 2026 intake close 30 April 2026"
            body="Late or incomplete applications will not be considered. Submit early to avoid system congestion near the deadline."
            action={{ href: "#forms", label: "Download form" }}
          />
        </div>
      </section>

      <section className="section" id="schemes" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="Schemes" title="Award categories" />
          <div className="grid cols-3">
            {SCHEMES.map((s) => <TaskCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="wrap split-even">
          <div>
            <SectionHead eyebrow="Timeline" title="Key dates 2026" small />
            <ol className="card" style={{ padding: "var(--sp-3)", listStyle: "none", margin: 0 }}>
              {TIMELINE.map((t, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "var(--sp-4)",
                    alignItems: "center",
                    padding: "var(--sp-4) var(--sp-3)",
                    borderBottom: i < TIMELINE.length - 1 ? "1px solid var(--line)" : 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--t-small)",
                      color: "var(--primary)",
                      minWidth: "8rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.when}
                  </span>
                  <span style={{ color: "var(--ink)" }}>{t.what}</span>
                </li>
              ))}
            </ol>
          </div>
          <div id="forms">
            <SectionHead eyebrow="Forms" title="Application documents" small />
            <DocList items={FORMS} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Eligibility"
            title="Before you apply"
            intro="Read the criteria for the scheme you are applying to. Each award has different academic, citizenship and bonding requirements."
          />
          <div className="grid cols-2">
            <div className="card">
              <Eyebrow>General criteria</Eyebrow>
              <h3 style={{ marginTop: "var(--sp-3)", fontSize: "var(--t-h4)" }}>You must</h3>
              <ul style={{ marginTop: "var(--sp-3)", paddingLeft: "1.2rem", color: "var(--ink-soft)" }}>
                <li>Be a Solomon Islands citizen.</li>
                <li>Hold the minimum academic qualification for the award.</li>
                <li>Be of good character and produce a police clearance.</li>
                <li>Be in good health and provide a medical certificate.</li>
                <li>Sign a bonding agreement to return and serve.</li>
              </ul>
            </div>
            <div className="card">
              <Eyebrow>Need help?</Eyebrow>
              <h3 style={{ marginTop: "var(--sp-3)", fontSize: "var(--t-h4)" }}>National Training Unit</h3>
              <p className="muted" style={{ marginTop: "var(--sp-3)" }}>
                The NTU manages scholarship awards. Visit the office at Education House or contact us:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "var(--sp-4)", fontSize: "var(--t-small)" }}>
                <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <Icon name="phone" size={16} /> +677 28803 ext. 220
                </span>
                <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <Icon name="mail" size={16} /> scholarships@mehrd.gov.sb
                </span>
              </div>
              <Link href="#" className="btn btn--secondary" style={{ marginTop: "var(--sp-5)" }}>
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <SectionHead eyebrow="FAQ" title="Common questions" />
          <div className="card" style={{ padding: 0 }}>
            {FAQ.map((f, i) => (
              <details
                key={i}
                style={{
                  padding: "var(--sp-4) var(--sp-5)",
                  borderBottom: i < FAQ.length - 1 ? "1px solid var(--line)" : 0,
                }}
              >
                <summary style={{ fontWeight: 700, cursor: "pointer", listStyle: "none" }}>
                  {f.q}
                </summary>
                <p className="muted" style={{ marginTop: "var(--sp-3)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Apply now"
        title="Ready to start your application?"
        body="Download the 2026 form, complete every section, and lodge it at the National Training Unit by 30 April 2026."
        action={{ href: "#forms", label: "Download the form" }}
      />
    </>
  );
}
