import Link from "next/link";
import Image from "next/image";

type Props = {
  /** Subtitle under the MEHRD wordmark. */
  subtitle?: string;
};

export function Brand({ subtitle = "Ministry of Education & HR Development" }: Props) {
  return (
    <Link href="/" className="brand" aria-label="MEHRD home">
      <Image
        src="/coa-si.png"
        alt="Solomon Islands coat of arms"
        width={40}
        height={48}
        priority
        className="brand__logo"
      />
      <span className="brand__txt">
        <b>MEHRD</b>
        <small>{subtitle}</small>
      </span>
    </Link>
  );
}
