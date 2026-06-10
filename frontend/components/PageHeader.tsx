import type { ReactNode } from "react";
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";

export type Crumb = { href?: string; label: string };

type Props = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  crumbs?: Crumb[];
};

export function PageHeader({ eyebrow, title, intro, crumbs }: Props) {
  return (
    <section className="page-head">
      <div className="wrap">
        {crumbs && crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i} style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                {i < crumbs.length - 1 && <span className="sep">/</span>}
              </span>
            ))}
          </nav>
        )}
        <div style={{ marginTop: crumbs ? "var(--sp-4)" : 0 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}
