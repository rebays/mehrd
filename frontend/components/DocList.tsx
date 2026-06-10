import Link from "next/link";
import { Icon, type IconName } from "./Icon";

export type DocItem = {
  file: string;
  title: string;
  meta: string[];
  href: string;
  /** Defaults to "download". Use "arrow" for in-page navigation rows. */
  action?: IconName;
  ariaLabel?: string;
};

type Props = {
  items: DocItem[];
  /** Wrap the list in a `.card`. Use false when the list already sits in a card. */
  bare?: boolean;
};

export function DocList({ items, bare = false }: Props) {
  const list = (
    <ul className="doclist">
      {items.map((d, i) => (
        <li key={i} className="doc">
          <span className="doc__file">{d.file}</span>
          <div className="doc__body">
            <h4>{d.title}</h4>
            <div className="doc__meta">
              {d.meta.map((m, j) => (
                <span key={j}>
                  {j > 0 && <span style={{ marginRight: "var(--sp-3)" }}>·</span>}
                  {m}
                </span>
              ))}
            </div>
          </div>
          <Link href={d.href} className="doc__dl" aria-label={d.ariaLabel ?? `Download ${d.title}`}>
            <Icon name={d.action ?? "download"} size={18} />
          </Link>
        </li>
      ))}
    </ul>
  );

  if (bare) return list;
  return <div className="card" style={{ padding: "var(--sp-3)" }}>{list}</div>;
}
