import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

type Props = {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  action: { href: string; label: string };
};

export function CTA({ eyebrow, title, body, action }: Props) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta">
          <div className="cta__band" aria-hidden="true" />
          <span className="eyebrow" style={{ color: "var(--gold-300)" }}>{eyebrow}</span>
          <h2 style={{ marginTop: "0.8rem" }}>{title}</h2>
          <p>{body}</p>
          <Link href={action.href} className="btn btn--accent btn--lg">
            {action.label} <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
