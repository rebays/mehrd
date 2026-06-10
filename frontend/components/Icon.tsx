import type { CSSProperties } from "react";

export type IconName =
  | "search" | "arrow" | "download" | "doc" | "calendar"
  | "briefcase" | "cap" | "chart" | "mega" | "sun" | "moon"
  | "menu" | "close" | "ext" | "mail" | "phone" | "pin"
  | "check" | "grid" | "chevron";

type Props = {
  name: IconName;
  size?: number | string;
  className?: string;
  style?: CSSProperties;
};

export function Icon({ name, size = 20, className = "ico", style }: Props) {
  return (
    <svg className={className} width={size} height={size} style={style} aria-hidden="true">
      <use href={`#ico-${name}`} />
    </svg>
  );
}
