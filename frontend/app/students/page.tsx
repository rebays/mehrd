import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHead } from "@/components/SectionHead";
import { TaskCard } from "@/components/TaskCard";
import { DocList, type DocItem } from "@/components/DocList";
import { Alert } from "@/components/Alert";
import { StatBand } from "@/components/StatBand";
import { Eyebrow } from "@/components/Eyebrow";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Students & Parents — MEHRD",
  description:
    "Help for students and families across the Solomon Islands: enrolment, school terms, exam results, fees and scholarships.",
};

const TASKS = [
  { href: "/results",      icon: "check" as const,     title: "Check exam results",  body: "View Year 7, 10 & 13 placements and download the official lists.",        cta: "View results",     variant: "default" as const },
  { href: "/documents",    icon: "calendar" as const,  title: "School calendar 2026", body: "Term dates, holidays and the national academic calendar.",               cta: "View calendar",    variant: "green" as const },
  { href: "/scholarships", icon: "cap" as const,       title: "Scholarships",        body: "In-country and overseas study awards, criteria and application forms.",   cta: "Learn more",       variant: "gold" as const },
  { href: "#enrol",        icon: "doc" as const,       title: "Enrol your child",    body: "Required documents, age placement and how to register at a school.",      cta: "How to enrol",     variant: "default" as const },
  { href: "#fees",         icon: "briefcase" as const, title: "Fees & support",      body: "The fee-free basic education policy and what families are expected to cover.", cta: "Understand fees", variant: "green" as const },
  { href: "#schools",      icon: "pin" as const,       title: "Find a school",       body: "Locate primary and secondary schools across the nine provinces and Honiara.", cta: "Find a school",   variant: "gold" as const },
];

const TERMS = [
  { when: "Term 1", what: "26 Jan – 10 Apr 2026" },
  { when: "Term 2", what: "27 Apr – 03 Jul 2026" },
  { when: "Term 3", what: "20 Jul – 25 Sep 2026" },
  { when: "Term 4", what: "12 Oct – 04 Dec 2026" },
];

const FORMS: DocItem[] = [
  { file: "PDF",  title: "Parent's guide to the 2026 school year", meta: ["Guide", "1.1 MB"],          href: "#" },
  { file: "PDF",  title: "School enrolment form",                  meta: ["Form", "Primary & secondary"], href: "#" },
  { file: "PDF",  title: "Age & grade placement policy",           meta: ["Policy", "0.6 MB"],          href: "#" },
  { file: "PDF",  title: "Fee-free basic education policy",        meta: ["Policy", "Official"],         href: "#" },
  { file: "DATE", title: "Student transfer request",               meta: ["Form", "Between schools"],    href: "#", action: "arrow" },
];

const STATS = [
  { num: "170k+", label: "Students enrolled nationwide" },
  { num: "900+",  label: "Primary & secondary schools" },
  { num: "9",     label: "Provinces & Honiara served" },
  { num: "Free",  label: "Basic education (Years 1–9)" },
];

const STEPS = [
  { n: "01", title: "Check eligibility", body: "Confirm your child's age and your school catchment area." },
  { n: "02", title: "Gather documents",  body: "Birth certificate, immunisation record and previous reports." },
  { n: "03", title: "Submit the form",   body: "Complete the enrolment form and lodge it at your chosen school." },
  { n: "04", title: "Confirm placement", body: "The school confirms the class and grade your child will join." },
];

const FAQ = [
  { q: "At what age can my child start school?", a: "Children may begin Year 1 in the year they turn six. Early Childhood Education is available from age three at participating schools." },
  { q: "Do I have to pay school fees?", a: "Basic education from Year 1 to Year 9 is fee-free under government policy. Families may still contribute to project funds and cover uniforms, stationery and boarding where it applies." },
  { q: "How do I transfer my child to another school?", a: "Complete the student transfer request form, have it signed by both schools, and submit it before the start of the term. Transfers depend on available places." },
  { q: "My child missed the enrolment period — what now?", a: "Contact the school directly. Late enrolments are considered on a case-by-case basis depending on capacity. Provincial education offices can also assist." },
  { q: "How do I check my child's exam results?", a: "Year 7, 10 and 13 placement lists are published on the Exam Results page when released by NEAD. Schools also receive printed copies for collection." },
];

export default function StudentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For families"
        title="Students & Parents"
        intro="Everything families need for the school year — from enrolling your child and term dates to exam results, fees and scholarships."
        crumbs={[{ href: "/", label: "Home" }, { label: "Students & Parents" }]}
      />

      <section className="section">
        <div className="wrap">
          <Alert
            icon="mega"
            title="The 2026 school year is underway"
            body="Term 1 runs to 10 April. Check term dates, enrol a child, or download the parent's guide below."
            action={{ href: "#guides", label: "Parent guides" }}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="schools">
        <div className="wrap">
          <SectionHead
            eyebrow="Quick access"
            title="What can we help with?"
            intro="The services students and parents use most, all in one place."
          />
          <div className="grid cols-3">
            {TASKS.map((t) => <TaskCard key={t.title} {...t} />)}
          </div>
        </div>
      </section>

      <StatBand items={STATS} />

      <section className="section" id="guides">
        <div className="wrap split-main">
          <div>
            <SectionHead
              eyebrow="Guides & forms"
              title="Parent guides & forms"
              intro="Download the forms and policy documents you need for enrolment, transfers and fees."
            />
            <DocList items={FORMS} />
          </div>
          <aside>
            <SectionHead eyebrow="2026 terms" title="School term dates" small />
            <ol className="card" style={{ padding: "var(--sp-3)", listStyle: "none", margin: 0 }}>
              {TERMS.map((t, i) => (
                <li
                  key={t.when}
                  style={{
                    display: "flex",
                    gap: "var(--sp-4)",
                    alignItems: "center",
                    padding: "var(--sp-4) var(--sp-3)",
                    borderBottom: i < TERMS.length - 1 ? "1px solid var(--line)" : 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--t-small)",
                      color: "var(--primary)",
                      minWidth: "4.5rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.when}
                  </span>
                  <span style={{ color: "var(--ink)" }}>{t.what}</span>
                </li>
              ))}
            </ol>
            <Link href="/documents" className="btn btn--secondary btn--block" style={{ marginTop: "var(--sp-4)" }}>
              Full school calendar
            </Link>
          </aside>
        </div>
      </section>

      <section
        className="section"
        id="enrol"
        style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <SectionHead
            eyebrow="Enrolment"
            title="Enrolling your child"
            intro="Four simple steps to register your child at a primary or secondary school."
          />
          <div className="grid cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="card">
                <Eyebrow>{`Step ${s.n}`}</Eyebrow>
                <h3 style={{ marginTop: "var(--sp-3)", fontSize: "var(--t-h4)" }}>{s.title}</h3>
                <p className="muted" style={{ marginTop: "var(--sp-2)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="fees">
        <div className="wrap">
          <SectionHead
            eyebrow="Fees & support"
            title="What families pay"
            intro="Basic education is fee-free, but some costs remain the family's responsibility."
          />
          <div className="grid cols-2">
            <div className="card">
              <Eyebrow>Covered by government</Eyebrow>
              <h3 style={{ marginTop: "var(--sp-3)", fontSize: "var(--t-h4)" }}>Fee-free basic education</h3>
              <ul style={{ marginTop: "var(--sp-3)", paddingLeft: "1.2rem", color: "var(--ink-soft)" }}>
                <li>Tuition for Years 1–9 in government and grant-aided schools.</li>
                <li>Core teaching and learning materials.</li>
                <li>Grants paid directly to schools each term.</li>
              </ul>
            </div>
            <div className="card">
              <Eyebrow>Family responsibility</Eyebrow>
              <h3 style={{ marginTop: "var(--sp-3)", fontSize: "var(--t-h4)" }}>What you may still pay</h3>
              <ul style={{ marginTop: "var(--sp-3)", paddingLeft: "1.2rem", color: "var(--ink-soft)" }}>
                <li>Uniforms, stationery and personal supplies.</li>
                <li>Boarding fees where a child attends a boarding school.</li>
                <li>Voluntary school project contributions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <SectionHead eyebrow="FAQ" title="Common questions from parents" />
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
        eyebrow="We're here to help"
        title="Questions about your child's education?"
        body="Your school is the first point of contact. For anything they cannot resolve, your provincial education office or the ministry can assist."
        action={{ href: "/about", label: "Contact the ministry" }}
      />
    </>
  );
}
