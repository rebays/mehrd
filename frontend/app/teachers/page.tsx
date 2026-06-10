import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHead } from "@/components/SectionHead";
import { TaskCard } from "@/components/TaskCard";
import { DocList, type DocItem } from "@/components/DocList";
import { Alert } from "@/components/Alert";
import { StatBand } from "@/components/StatBand";
import { CTA } from "@/components/CTA";
import { Eyebrow } from "@/components/Eyebrow";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Teachers — MEHRD",
  description:
    "For teachers across the Solomon Islands: current job vacancies, teacher registration, professional development and classroom resources.",
};

const TASKS = [
  { href: "#vacancies",    icon: "briefcase" as const, title: "Job vacancies",            body: "Current teaching and ministry openings across all nine provinces and Honiara.", cta: "Browse jobs",        variant: "default" as const },
  { href: "#registration", icon: "check" as const,     title: "Teacher registration",     body: "Register as a teacher or renew your practising certificate with the Teaching Service.", cta: "Register or renew", variant: "green" as const },
  { href: "#development",  icon: "cap" as const,       title: "Professional development", body: "In-service training, upskilling and pathways to further qualifications.",       cta: "See programmes",     variant: "gold" as const },
  { href: "#resources",    icon: "grid" as const,      title: "Classroom resources",      body: "Curriculum frameworks, teaching guides, forms and the national syllabus.",      cta: "Open resources",     variant: "default" as const },
];

const STATS = [
  { num: "8,400+", label: "Teachers in the service" },
  { num: "900+",   label: "Schools nationwide" },
  { num: "9",      label: "Provinces & Honiara" },
  { num: "1:24",   label: "Average pupil–teacher ratio" },
];

const VACANCIES = [
  { role: "Secondary Mathematics Teacher",   place: "Honiara",          type: "Permanent",  closes: "20 Jun 2026" },
  { role: "Primary Classroom Teacher",       place: "Malaita Province", type: "Permanent",  closes: "27 Jun 2026" },
  { role: "Secondary Science Teacher",       place: "Western Province", type: "Contract",   closes: "04 Jul 2026" },
  { role: "Early Childhood Educator",        place: "Guadalcanal",      type: "Permanent",  closes: "11 Jul 2026" },
  { role: "TVET Instructor (Construction)",  place: "Honiara",          type: "Contract",   closes: "18 Jul 2026" },
];

const REG_STEPS = [
  { n: "01", title: "Check eligibility",   body: "Hold a recognised teaching qualification and a clear police record." },
  { n: "02", title: "Complete the form",   body: "Fill in the registration or renewal form and attach your certificates." },
  { n: "03", title: "Submit & verify",     body: "Lodge it with the Teaching Service Division for assessment and verification." },
  { n: "04", title: "Receive certificate", body: "Approved applicants are issued a practising certificate valid for the period." },
];

const FORMS: DocItem[] = [
  { file: "PDF",  title: "New teacher registration form",       meta: ["Form", "0.7 MB"],            href: "#" },
  { file: "PDF",  title: "Certificate renewal form",            meta: ["Form", "0.5 MB"],            href: "#" },
  { file: "PDF",  title: "Teaching Service handbook",           meta: ["Guide", "Updated 2026"],     href: "#" },
  { file: "PDF",  title: "Code of conduct for teachers",        meta: ["Policy", "Official"],        href: "#" },
  { file: "DATE", title: "Salary scales & allowances 2026",     meta: ["Schedule", "Teaching Service"], href: "#", action: "arrow" },
];

const PROGRAMMES = [
  { title: "In-service training",      body: "Termly workshops on curriculum delivery, assessment and inclusive teaching." },
  { title: "Upgrading qualifications", body: "Pathways with SINU to move from certificate to diploma and degree levels." },
  { title: "School leadership",        body: "Preparation for head-teacher and principal roles, including management and finance." },
];

const FAQ = [
  { q: "How do I apply for a teaching vacancy?", a: "Download and complete the application form for the advertised position, attach your certificates and references, and submit it to the Teaching Service Division before the closing date." },
  { q: "When does my registration need renewing?", a: "Practising certificates are issued for a fixed period. Submit your renewal form before the expiry date shown on your certificate to avoid a lapse." },
  { q: "I trained overseas — is my qualification recognised?", a: "Overseas qualifications are assessed for equivalence during registration. Provide certified copies of transcripts and certificates with your application." },
  { q: "How is my salary determined?", a: "Salary is set by the Teaching Service salary scales based on your qualification level and years of service. See the salary schedule above." },
  { q: "Who do I contact about a posting or transfer?", a: "Transfers and postings are handled by the Teaching Service Division in coordination with your provincial education authority." },
];

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        eyebrow="For educators"
        title="Teachers"
        intro="Everything for the teaching profession in one place — current vacancies, registration and renewal, professional development and the resources you use in the classroom."
        crumbs={[{ href: "/", label: "Home" }, { label: "Teachers" }]}
      />

      <section className="section">
        <div className="wrap">
          <Alert
            icon="mega"
            title="2026 teacher recruitment is open"
            body="New teaching vacancies are advertised throughout the year. Check current openings and apply before the closing date."
            action={{ href: "#vacancies", label: "View vacancies" }}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="resources">
        <div className="wrap">
          <SectionHead
            eyebrow="Quick access"
            title="What can we help with?"
            intro="The services teachers use most, all in one place."
          />
          <div className="grid cols-4">
            {TASKS.map((t) => <TaskCard key={t.title} {...t} />)}
          </div>
        </div>
      </section>

      <StatBand items={STATS} />

      <section className="section" id="vacancies">
        <div className="wrap">
          <SectionHead
            eyebrow="Vacancies"
            title="Current openings"
            intro="Teaching and ministry positions currently advertised. Apply through the Teaching Service Division before the listed closing date."
            link={{ href: "#", label: "All vacancies" }}
          />
          <div className="card" style={{ padding: 0 }}>
            {VACANCIES.map((v, i) => (
              <div
                key={v.role}
                style={{
                  display: "flex",
                  gap: "var(--sp-4)",
                  alignItems: "center",
                  flexWrap: "wrap",
                  padding: "var(--sp-4) var(--sp-5)",
                  borderBottom: i < VACANCIES.length - 1 ? "1px solid var(--line)" : 0,
                }}
              >
                <div style={{ flex: "1 1 16rem", minWidth: 0 }}>
                  <h3 style={{ fontSize: "var(--t-h4)" }}>{v.role}</h3>
                  <p className="muted" style={{ marginTop: "0.2rem", display: "flex", gap: "var(--sp-3)", flexWrap: "wrap", fontSize: "var(--t-small)" }}>
                    <span style={{ display: "inline-flex", gap: "0.4rem", alignItems: "center" }}>
                      <Icon name="pin" size={15} /> {v.place}
                    </span>
                    <span style={{ display: "inline-flex", gap: "0.4rem", alignItems: "center" }}>
                      <Icon name="briefcase" size={15} /> {v.type}
                    </span>
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--t-small)",
                    color: "var(--primary)",
                    fontWeight: 600,
                  }}
                >
                  Closes {v.closes}
                </span>
                <Link href="#" className="btn btn--sm">Apply</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        id="registration"
        style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="wrap split-main">
          <div>
            <SectionHead
              eyebrow="Registration"
              title="Register or renew"
              intro="All teachers in government and grant-aided schools must be registered with the Teaching Service. Follow these steps to register or renew your practising certificate."
            />
            <div className="grid cols-2">
              {REG_STEPS.map((s) => (
                <div key={s.n} className="card">
                  <Eyebrow>{`Step ${s.n}`}</Eyebrow>
                  <h3 style={{ marginTop: "var(--sp-3)", fontSize: "var(--t-h4)" }}>{s.title}</h3>
                  <p className="muted" style={{ marginTop: "var(--sp-2)" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <aside>
            <SectionHead eyebrow="Forms" title="Forms & documents" small />
            <DocList items={FORMS} />
          </aside>
        </div>
      </section>

      <section className="section" id="development">
        <div className="wrap">
          <SectionHead
            eyebrow="Professional development"
            title="Grow your career"
            intro="The ministry supports teachers to keep developing their practice and to progress into leadership roles."
          />
          <div className="grid cols-3">
            {PROGRAMMES.map((p) => (
              <div key={p.title} className="card">
                <span
                  className="hero__quick-ico"
                  style={{ width: 44, height: 44 }}
                  aria-hidden="true"
                >
                  <Icon name="cap" size={22} />
                </span>
                <h3 style={{ marginTop: "var(--sp-4)", fontSize: "var(--t-h4)" }}>{p.title}</h3>
                <p className="muted" style={{ marginTop: "var(--sp-2)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <SectionHead eyebrow="FAQ" title="Common questions from teachers" />
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
        eyebrow="Join the teaching service"
        title="Ready to teach with us?"
        body="Browse current vacancies and apply, or register with the Teaching Service Division to start your career in Solomon Islands schools."
        action={{ href: "#vacancies", label: "View current vacancies" }}
      />
    </>
  );
}
