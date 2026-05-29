import Link from "next/link";
import { Icon } from "./Icon";

export type DivisionItem = { href: string; label: string };

type Props = {
  title: string;
  items: DivisionItem[];
  variant?: "default" | "green" | "gold";
};

export function DivisionGroup({ title, items, variant = "default" }: Props) {
  const variantClass = variant === "green" ? " div-group--green" : variant === "gold" ? " div-group--gold" : "";
  return (
    <div className={`div-group${variantClass}`}>
      <div className="div-group__head">
        <span className="dot" />
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>
              {item.label} <Icon name="arrow" size={16} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
