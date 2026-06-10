import type { CSSProperties, ReactNode } from "react";

type Props = { children: ReactNode; style?: CSSProperties; className?: string };

export function Eyebrow({ children, style, className }: Props) {
  return (
    <span className={`eyebrow${className ? " " + className : ""}`} style={style}>
      {children}
    </span>
  );
}
