import Link from "next/link";
import { Icon } from "./Icon";
import { Eyebrow } from "./Eyebrow";
import { SearchForm } from "./SearchForm";

const QUICK_LINKS = [
  { href: "/results",      icon: "check" as const,    title: "Exam results 2026",  meta: "Year 7, 10 & 13 placements" },
  { href: "/documents",    icon: "calendar" as const, title: "School calendar",    meta: "Term dates & holidays" },
  { href: "/scholarships", icon: "cap" as const,      title: "Scholarships",       meta: "Apply for SIG study awards" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__intro">
            <Eyebrow className="hero__eyebrow">Education for every island</Eyebrow>
            <h1>
              Building a <span className="hl">brighter future</span> through learning.
            </h1>
            <div className="hero__actions">
              <Link href="/results" className="btn btn--accent btn--lg">
                Check exam results <Icon name="arrow" size={18} />
              </Link>
              <Link href="/scholarships" className="btn btn--secondary btn--lg">
                Apply for scholarship
              </Link>
            </div>
          </div>

          <aside className="hero__panel" aria-label="Quick access">
            <h2 className="hero__panel-title">Find what you need</h2>
            <SearchForm
              placeholder="Search results, documents, schools…"
              ariaLabel="Search the MEHRD website"
            />
            <div className="chips" aria-label="Popular searches">
              <Link href="/results" className="chip">Year 7 placement</Link>
              <Link href="/documents" className="chip">2026 calendar</Link>
              <Link href="/teachers" className="chip">Job vacancies</Link>
            </div>

            <div className="hero__quick">
              {QUICK_LINKS.map((q) => (
                <Link key={q.title} href={q.href} className="hero__quick-link">
                  <span className="hero__quick-ico"><Icon name={q.icon} size={22} /></span>
                  <span className="hero__quick-txt">
                    <b>{q.title}</b>
                    <small>{q.meta}</small>
                  </span>
                  <Icon name="arrow" size={18} className="ico hero__quick-arrow" />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
