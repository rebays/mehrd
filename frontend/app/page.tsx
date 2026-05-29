import Link from "next/link";
import { Hero } from "./components/Hero";
import { Alert } from "./components/Alert";
import { TaskCard } from "./components/TaskCard";
import { SectionHead } from "./components/SectionHead";
import { StatBand } from "./components/StatBand";
import { NewsCard } from "./components/NewsCard";
import { DocList, type DocItem } from "./components/DocList";
import { DivisionGroup } from "./components/DivisionGroup";
import { CTA } from "./components/CTA";

const TASKS = [
  { href: "/results",       icon: "check" as const,     title: "Exam Results & Placements", body: "Year 7, 10 & 13 national examination results and official placement lists.", cta: "Check now",            variant: "default" as const },
  { href: "/documents",     icon: "calendar" as const,  title: "School Calendar 2026",      body: "Term dates, holidays and the national academic calendar for all schools.",     cta: "View calendar",        variant: "green" as const },
  { href: "/scholarships",  icon: "cap" as const,       title: "Scholarships",              body: "SIG in-country and overseas scholarship opportunities, criteria and forms.",   cta: "Apply & learn more",   variant: "gold" as const },
  { href: "/teachers",      icon: "briefcase" as const, title: "Job Vacancies",             body: "Current openings for teachers and ministry staff across the provinces.",       cta: "Browse jobs",          variant: "default" as const },
  { href: "/documents",     icon: "doc" as const,       title: "Documents & Reports",       body: "Policies, annual reports, frameworks, forms and the Education Act 2023.",     cta: "Open library",         variant: "green" as const },
  { href: "/data",          icon: "chart" as const,     title: "Education Data",            body: "Interactive dashboards on access, quality, resources and efficiency.",         cta: "Explore data",         variant: "gold" as const },
];

const STATS = [
  { num: "170k+",     label: "Students enrolled nationwide" },
  { num: "9",         label: "Provinces & Honiara served" },
  { num: "8,400+",    label: "Teachers in the service" },
  { num: "2016–2030", label: "Education Strategic Framework" },
];

const PLACEMENT_DOCS: DocItem[] = [
  { file: "PDF",  title: "Year 7 Placement 2026",       meta: ["Official list", "1.2 MB"],     href: "#", ariaLabel: "Download Year 7 Placement" },
  { file: "PDF",  title: "Year 10 Placement 2026",      meta: ["Official list", "1.6 MB"],     href: "#", ariaLabel: "Download Year 10 Placement" },
  { file: "PDF",  title: "Year 13 Placement 2026",      meta: ["Official list", "0.9 MB"],     href: "#", ariaLabel: "Download Year 13 Placement" },
  { file: "DATE", title: "Examination timetable 2026", meta: ["NEAD", "Schedule"],            href: "#", action: "arrow", ariaLabel: "View timetable" },
];

const STRATEGY_DOCS: DocItem[] = [
  { file: "PDF", title: "Education Strategic Framework 2016–2030", meta: ["Strategy",    "Updated 2024"], href: "#" },
  { file: "PDF", title: "National Education Action Plan 2022–2026", meta: ["Plan",       "3.4 MB"],       href: "#" },
  { file: "PDF", title: "Education Act 2023",                       meta: ["Legislation","Official"],     href: "#" },
];

const REPORT_DOCS: DocItem[] = [
  { file: "PDF", title: "MEHRD Annual Report 2023",         meta: ["Report", "5.1 MB"],   href: "#" },
  { file: "PDF", title: "Education Statistics Digest 2020", meta: ["Data",   "PAR"],      href: "#" },
  { file: "PDF", title: "ICT in Education Master Plan",     meta: ["Plan",   "2019–2023"], href: "#" },
];

const DIVISIONS = [
  {
    title: "Strategic Services",
    variant: "default" as const,
    items: [
      { href: "/about", label: "Strategic Support Unit" },
      { href: "/about", label: "National Training Unit" },
      { href: "/about", label: "National Education Board" },
    ],
  },
  {
    title: "Corporate Services",
    variant: "green" as const,
    items: [
      { href: "/about", label: "Finance" },
      { href: "/about", label: "Workforce Management" },
      { href: "/about", label: "Information Services" },
      { href: "/about", label: "Procurement & Assets" },
    ],
  },
  {
    title: "Education Services",
    variant: "default" as const,
    items: [
      { href: "/about", label: "Teaching Service Division" },
      { href: "/about", label: "Education Provider Support" },
      { href: "/about", label: "School Services" },
    ],
  },
  {
    title: "Teaching & Learning",
    variant: "gold" as const,
    items: [
      { href: "/about", label: "Curriculum Development" },
      { href: "/about", label: "Teacher Professional Dev." },
      { href: "/results", label: "National Exams (NEAD)" },
      { href: "/about", label: "National Library" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="wrap" style={{ marginTop: "-1.75rem", position: "relative", zIndex: 5 }}>
        <Alert
          title="National Examination Results 2026 are now available"
          body="Official Year 7, Year 10 and Year 13 placement lists have been released. Check your results or download the placement PDFs."
          action={{ href: "/results", label: "View results" }}
        />
      </div>

      <section className="section" id="tasks">
        <div className="wrap">
          <SectionHead
            eyebrow="Quick access"
            title="Popular services"
            link={{ href: "#", label: "All services" }}
          />
          <div className="grid cols-3">
            {TASKS.map((t) => <TaskCard key={t.title} {...t} />)}
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
              eyebrow="Newsroom"
              title="Latest news & updates"
              link={{ href: "#", label: "All news" }}
            />
            <div className="grid cols-2">
              <NewsCard
                href="#"
                badge={{ label: "Announcement", tone: "blue" }}
                date="11 Jan 2026"
                title="2026 school year officially opens across all provinces"
                body="The Minister welcomes students back as the new academic year begins under the 2026 calendar."
              />
              <NewsCard
                href="#"
                badge={{ label: "Programme", tone: "green" }}
                date="04 Dec 2025"
                title="PILNA assessment results show literacy gains"
                body="Pacific Islands Literacy and Numeracy results highlight steady improvement in early grades."
              />
            </div>
          </div>

          <aside>
            <SectionHead eyebrow="2026 release" title="Examination results" small />
            <DocList items={PLACEMENT_DOCS} />
            <Link href="/results" className="btn btn--secondary btn--block" style={{ marginTop: "var(--sp-4)" }}>
              National Exams &amp; Assessment (NEAD)
            </Link>
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
            eyebrow="Inside the ministry"
            title="MEHRD divisions"
            intro="Four service groups deliver education policy, support and standards nationwide."
            link={{ href: "/about", label: "Org structure" }}
          />
          <div className="grid cols-4">
            {DIVISIONS.map((d) => <DivisionGroup key={d.title} {...d} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Library"
            title="Key publications"
            link={{ href: "/documents", label: "Browse all documents" }}
          />
          <div className="grid cols-2">
            <DocList items={STRATEGY_DOCS} />
            <DocList items={REPORT_DOCS} />
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Scholarships 2026"
        title="Take the next step in your education journey."
        body="Solomon Islands Government scholarships support study at home and overseas. Check eligibility, key dates and download your application form."
        action={{ href: "/scholarships", label: "Start your application" }}
      />
    </>
  );
}
