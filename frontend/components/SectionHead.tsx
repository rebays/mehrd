import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  link?: { href: string; label: string };
  /** Render the h2 with a smaller font size (used by aside panels). */
  small?: boolean;
};

export function SectionHead({ eyebrow, title, intro, link, small }: Props) {
  return (
    <div className="sec-head">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 style={{ marginTop: "0.6rem", fontSize: small ? "var(--t-h3)" : undefined }}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      {link && (
        <Link href={link.href} className="tlink">
          {link.label} <Icon name="arrow" size={18} />
        </Link>
      )}
    </div>
  );
}
