import Link from "next/link";

type Props = {
  /** Subtitle under the MEHRD wordmark. */
  subtitle?: string;
};

export function Brand({ subtitle = "Ministry of Education & HRD" }: Props) {
  return (
    <Link href="/" className="brand" aria-label="MEHRD home">
      <span className="brand__mark">
        <span className="star">M</span>
      </span>
      <span className="brand__txt">
        <b>MEHRD</b>
        <small>{subtitle}</small>
      </span>
    </Link>
  );
}
