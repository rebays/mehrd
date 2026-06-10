export type StatItem = { num: string; label: string };

type Props = { items: StatItem[] };

export function StatBand({ items }: Props) {
  return (
    <section className="statband section" style={{ paddingBlock: "var(--sp-7)" }}>
      <div className="wrap">
        <div className="grid cols-4">
          {items.map((s, i) => (
            <div key={i} className="stat">
              <span className="stat__num">{s.num}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
