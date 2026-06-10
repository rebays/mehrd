import type { ReactNode } from "react";
import Link from "next/link";
import { Icon, type IconName } from "./Icon";

type Props = {
  icon?: IconName;
  title: ReactNode;
  body: ReactNode;
  action?: { href: string; label: string };
};

export function Alert({ icon = "mega", title, body, action }: Props) {
  return (
    <div className="alert" role="status">
      <Icon name={icon} size={26} className="alert__icon ico" />
      <div style={{ flex: 1 }}>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
      {action && (
        <Link href={action.href} className="btn btn--sm" style={{ alignSelf: "center" }}>
          {action.label}
        </Link>
      )}
    </div>
  );
}
