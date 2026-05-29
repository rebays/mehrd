import Link from "next/link";
import { Brand } from "./Brand";
import { Icon } from "./Icon";

const FOR_STUDENTS = [
  { href: "/results", label: "Exam results" },
  { href: "/documents", label: "School calendar" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/results", label: "Year 7 placement" },
];

const FOR_TEACHERS = [
  { href: "/teachers", label: "Job vacancies" },
  { href: "/teachers", label: "Professional development" },
  { href: "/documents", label: "Curriculum resources" },
  { href: "/about", label: "Teaching Service" },
];

const PARTNERS = [
  { href: "https://www.sinu.edu.sb/", label: "SINU" },
  { href: "https://www.statistics.gov.sb/", label: "Statistics Office" },
  { href: "#", label: "iResource Portal" },
  { href: "#", label: "SITESA" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-about">
          <Brand />
          <p>Ministry of Education &amp; Human Resources Development, Solomon Islands Government.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "var(--sp-4)", fontSize: "var(--t-small)" }}>
            <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Icon name="pin" size={16} /> Education House, Honiara
            </span>
            <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Icon name="phone" size={16} /> +677 28803
            </span>
            <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Icon name="mail" size={16} /> info@mehrd.gov.sb
            </span>
          </div>
        </div>
        <div>
          <h4>For students</h4>
          <ul>
            {FOR_STUDENTS.map((l, i) => (
              <li key={i}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>For teachers</h4>
          <ul>
            {FOR_TEACHERS.map((l, i) => (
              <li key={i}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Partner links</h4>
          <ul>
            {PARTNERS.map((l, i) => (
              <li key={i}>
                <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {l.label} <Icon name="ext" size={13} style={{ verticalAlign: "-1px" }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap">
        <div className="foot-bottom">
          <span>© 2026 MEHRD — Solomon Islands Government. All rights reserved.</span>
          <span style={{ display: "flex", gap: "var(--sp-4)" }}>
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
