"use client";

import Link from "next/link";
import { Icon } from "./Icon";
import type { NavItem } from "./navConfig";

type Props = {
  open: boolean;
  onClose: () => void;
  nav: readonly NavItem[];
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function MobileDrawer({ open, onClose, nav, theme, onToggleTheme }: Props) {
  return (
    <div
      className={`drawer${open ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="drawer__panel" role="dialog" aria-modal="true">
        <div className="drawer__head">
          <span className="eyebrow">Menu</span>
          <button type="button" className="icon-btn" aria-label="Close menu" onClick={onClose}>
            <Icon name="close" size={20} />
          </button>
        </div>

        {nav.map((item) => (
          <details key={item.label} className="drawer__group">
            <summary className="drawer__summary">
              {item.label}
              <Icon name="chevron" size={18} className="ico drawer__chev" />
            </summary>
            <div className="drawer__sub">
              <Link href={item.href} className="drawer__overview" onClick={onClose}>
                {item.label} overview
              </Link>
              {item.columns.map((col) => (
                <div key={col.heading} className="drawer__col">
                  <span className="drawer__col-head">{col.heading}</span>
                  {col.links.map((l) => (
                    <Link key={l.label + l.href} href={l.href} onClick={onClose}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </details>
        ))}

        <button type="button" className="drawer__theme" onClick={onToggleTheme}>
          <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
          <Icon name={theme === "dark" ? "sun" : "moon"} size={20} className="ico" />
        </button>
      </div>
    </div>
  );
}
