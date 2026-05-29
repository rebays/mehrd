import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { SectionHead } from "../components/SectionHead";
import { DocList, type DocItem } from "../components/DocList";
import { SearchForm } from "../components/SearchForm";

export const metadata: Metadata = {
  title: "Documents & Reports — MEHRD",
  description: "Policies, annual reports, frameworks, forms, legislation and data from the Ministry of Education.",
};

const STRATEGY: DocItem[] = [
  { file: "PDF", title: "Education Strategic Framework 2016–2030", meta: ["Strategy",    "Updated 2024"], href: "#" },
  { file: "PDF", title: "National Education Action Plan 2022–2026", meta: ["Plan",       "3.4 MB"],       href: "#" },
  { file: "PDF", title: "ICT in Education Master Plan",              meta: ["Plan",       "2019–2023"],    href: "#" },
];

const LEGISLATION: DocItem[] = [
  { file: "PDF", title: "Education Act 2023",                       meta: ["Legislation", "Official"],   href: "#" },
  { file: "PDF", title: "Teaching Service Regulations 2019",        meta: ["Regulations", "Updated 2022"],href: "#" },
  { file: "PDF", title: "School Grants Policy",                     meta: ["Policy",      "2021"],        href: "#" },
];

const REPORTS: DocItem[] = [
  { file: "PDF", title: "MEHRD Annual Report 2023",                 meta: ["Report", "5.1 MB"], href: "#" },
  { file: "PDF", title: "MEHRD Annual Report 2022",                 meta: ["Report", "4.7 MB"], href: "#" },
  { file: "PDF", title: "MEHRD Annual Report 2021",                 meta: ["Report", "4.3 MB"], href: "#" },
];

const DATA: DocItem[] = [
  { file: "PDF", title: "Education Statistics Digest 2020",         meta: ["Data", "PAR"],   href: "#" },
  { file: "PDF", title: "Education Statistics Digest 2019",         meta: ["Data", "PAR"],   href: "#" },
  { file: "PDF", title: "PILNA Assessment Report 2021",             meta: ["Data", "Pacific"],href: "#" },
];

const FORMS: DocItem[] = [
  { file: "PDF",  title: "Scholarship application form (2026)",      meta: ["Form", "Scholarships"], href: "#" },
  { file: "PDF",  title: "Teacher transfer request form",            meta: ["Form", "TSD"],          href: "#" },
  { file: "PDF",  title: "School registration form",                 meta: ["Form", "Provider"],     href: "#" },
  { file: "DATE", title: "School calendar 2026",                     meta: ["Calendar", "Schedule"], href: "#", action: "arrow" },
];

const FILTERS = ["All", "Strategy", "Legislation", "Reports", "Data", "Forms"] as const;

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Library"
        title="Documents & Reports"
        intro="Every policy, plan, report and form the Ministry publishes — organised by category. Use the search to find a specific document quickly."
        crumbs={[{ href: "/", label: "Home" }, { label: "Documents" }]}
      />

      <section className="section">
        <div className="wrap">
          <SearchForm
            placeholder="Search the document library…"
            ariaLabel="Search documents"
          />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "var(--sp-5)" }}>
            {FILTERS.map((f) => (
              <span key={f} className="chip">{f}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="Strategy" title="Frameworks & plans" />
          <DocList items={STRATEGY} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <SectionHead eyebrow="Legislation" title="Acts & regulations" />
          <DocList items={LEGISLATION} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Annual reports" title="MEHRD reports" />
          <DocList items={REPORTS} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)", paddingTop: "var(--sp-8)" }}>
        <div className="wrap">
          <div className="grid cols-2">
            <div>
              <SectionHead eyebrow="Data" title="Statistics & assessments" small />
              <DocList items={DATA} />
            </div>
            <div>
              <SectionHead eyebrow="Forms" title="Application forms" small />
              <DocList items={FORMS} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
