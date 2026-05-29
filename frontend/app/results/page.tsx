import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { SectionHead } from "../components/SectionHead";
import { DocList, type DocItem } from "../components/DocList";
import { Alert } from "../components/Alert";
import { StatBand } from "../components/StatBand";
import { Eyebrow } from "../components/Eyebrow";
import { Icon } from "../components/Icon";

export const metadata: Metadata = {
  title: "Examination Results & Placements — MEHRD",
  description: "Official 2026 Year 7, Year 10 and Year 13 national examination results and placements.",
};

const PLACEMENTS: DocItem[] = [
  { file: "PDF", title: "Year 7 Placement 2026",  meta: ["Official list", "1.2 MB", "182 schools"], href: "#" },
  { file: "PDF", title: "Year 10 Placement 2026", meta: ["Official list", "1.6 MB", "138 schools"], href: "#" },
  { file: "PDF", title: "Year 13 Placement 2026", meta: ["Official list", "0.9 MB", "42 schools"],  href: "#" },
];

const RESOURCES: DocItem[] = [
  { file: "PDF",  title: "Examination timetable 2026",          meta: ["NEAD",     "Schedule"],   href: "#" },
  { file: "PDF",  title: "Marking guidelines for principals",   meta: ["NEAD",     "Guide"],      href: "#" },
  { file: "PDF",  title: "Appeals & queries procedure",         meta: ["Procedure","Forms"],      href: "#" },
  { file: "DATE", title: "Results release calendar",            meta: ["Calendar", "All years"],  href: "#", action: "arrow" },
];

const STATS = [
  { num: "100%",   label: "Provinces with released results" },
  { num: "32,400", label: "Year 7 candidates placed" },
  { num: "18,200", label: "Year 10 candidates placed" },
  { num: "5,100",  label: "Year 13 candidates placed" },
];

const YEARS = [
  { year: "Year 7",  desc: "Primary to junior secondary", placedHref: "#" },
  { year: "Year 10", desc: "Junior to senior secondary",  placedHref: "#" },
  { year: "Year 13", desc: "Senior secondary completion", placedHref: "#" },
];

export default function ResultsPage() {
  return (
    <>
      <PageHeader
        eyebrow="2026 release"
        title="Examination Results & Placements"
        intro="The National Examinations and Assessment Division (NEAD) has released the official 2026 placement lists. Check your placement or download the PDFs below."
        crumbs={[{ href: "/", label: "Home" }, { label: "Exam Results" }]}
      />

      <section className="section">
        <div className="wrap">
          <Alert
            icon="check"
            title="2026 results are now live"
            body="Year 7, Year 10 and Year 13 placement lists are available below. Contact your school for results queries."
            action={{ href: "#placements", label: "Jump to placements" }}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="placements">
        <div className="wrap">
          <SectionHead
            eyebrow="Official lists"
            title="2026 placements"
            intro="Download the official placement PDFs by year level. Lists are sorted alphabetically by candidate name within each receiving school."
          />
          <div className="grid cols-3">
            {YEARS.map((y) => (
              <div key={y.year} className="card">
                <Eyebrow>{y.year}</Eyebrow>
                <h3 style={{ marginTop: "var(--sp-3)", fontSize: "var(--t-h3)" }}>{y.year} placement</h3>
                <p className="muted" style={{ marginTop: "var(--sp-2)" }}>{y.desc}</p>
                <Link
                  href={y.placedHref}
                  className="btn btn--accent"
                  style={{ marginTop: "var(--sp-5)", width: "100%", justifyContent: "center" }}
                >
                  Download list <Icon name="download" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatBand items={STATS} />

      <section className="section">
        <div
          className="wrap"
          style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--sp-7)", alignItems: "start" }}
        >
          <div>
            <SectionHead
              eyebrow="Documents"
              title="Placement PDFs"
              intro="Direct downloads. Refresh this page if a link returns a stale copy."
            />
            <DocList items={PLACEMENTS} />
          </div>
          <aside>
            <SectionHead eyebrow="NEAD" title="Resources & procedure" small />
            <DocList items={RESOURCES} />
            <Link href="/about" className="btn btn--secondary btn--block" style={{ marginTop: "var(--sp-4)" }}>
              About NEAD
            </Link>
          </aside>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <SectionHead
            eyebrow="Need help?"
            title="Queries & appeals"
            intro="Speak to your school first. If your query cannot be resolved at school level, the NEAD office can review formal appeals within 14 days of the results release."
          />
          <div className="grid cols-2">
            <div className="card">
              <h3 style={{ fontSize: "var(--t-h4)" }}>Contact NEAD</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "var(--sp-4)", fontSize: "var(--t-small)" }}>
                <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <Icon name="phone" size={16} /> +677 28803 ext. 310
                </span>
                <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <Icon name="mail" size={16} /> nead@mehrd.gov.sb
                </span>
                <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <Icon name="pin" size={16} /> Education House, Honiara
                </span>
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "var(--t-h4)" }}>Lodge a formal appeal</h3>
              <p className="muted" style={{ marginTop: "var(--sp-3)" }}>
                Use the appeals procedure form available in the resources list above. Appeals must be received within 14 days of the official release.
              </p>
              <Link href="#" className="btn btn--secondary" style={{ marginTop: "var(--sp-5)" }}>
                Open appeals form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
