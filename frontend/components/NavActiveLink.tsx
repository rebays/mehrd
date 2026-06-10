"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

type Props = {
  href: string;
  label: string;
  showIcon: boolean;
};

export function NavActiveLink({ href, label, showIcon }: Props) {
  const pathname = usePathname();
  const active = href !== "/" && pathname.startsWith(href);
  return (
    <Link href={href} className={`nav-link${active ? " active" : ""}`}>
      {label}
      {showIcon && <Icon name="chevron" size={15} className="ico nav-chev" />}
    </Link>
  );
}
