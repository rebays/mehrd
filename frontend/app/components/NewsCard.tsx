import Link from "next/link";

export type NewsBadge = "blue" | "green" | "gold" | "default";

type Props = {
  href: string;
  badge: { label: string; tone?: NewsBadge };
  date: string;
  title: string;
  body: string;
};

export function NewsCard({ href, badge, date, title, body }: Props) {
  const toneClass = badge.tone && badge.tone !== "default" ? ` badge--${badge.tone}` : "";
  return (
    <Link href={href} className="card card--link news-card">
      <div className="ph" aria-hidden="true">
        <span>news photo</span>
      </div>
      <span className={`badge badge--dot${toneClass}`}>{badge.label}</span>
      <time>{date}</time>
      <h3>{title}</h3>
      <p>{body}</p>
    </Link>
  );
}
