import Link from "next/link";
import { Icon, type IconName } from "./Icon";

export type TaskVariant = "default" | "green" | "gold";

type Props = {
  href: string;
  icon: IconName;
  title: string;
  body: string;
  cta: string;
  variant?: TaskVariant;
};

export function TaskCard({ href, icon, title, body, cta, variant = "default" }: Props) {
  const variantClass = variant === "green" ? " task--green" : variant === "gold" ? " task--gold" : "";
  return (
    <Link href={href} className={`card task card--link${variantClass}`}>
      <span className="task__icon">
        <Icon name={icon} className="ico" />
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
      <span className="task__cta">
        {cta} <Icon name="arrow" className="ico ico-arrow" size={16} />
      </span>
    </Link>
  );
}
