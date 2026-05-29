import Link from "next/link";
import { Icon } from "./Icon";
import { Eyebrow } from "./Eyebrow";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap">
        <div className="hero__inner">
          <Eyebrow className="hero__eyebrow">Education for every island</Eyebrow>
          <h1>
            Building a <span className="hl">brighter future</span> through learning.
          </h1>
          <p className="lede">
            The Ministry of Education &amp; Human Resources Development supports students,
            teachers and families across the Solomon Islands.
          </p>
          <div className="hero__actions">
            <Link href="/results" className="btn btn--accent btn--lg">
              Check exam results <Icon name="arrow" size={18} />
            </Link>
            <Link href="/scholarships" className="btn btn--secondary btn--lg">
              Apply for scholarship
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
