"use client";

import Link from "next/link";
import { Icon } from "./Icon";

type NavItem = { href: string; label: string };

type Props = {
  open: boolean;
  onClose: () => void;
  nav: readonly NavItem[];
};

export function MobileDrawer({ open, onClose, nav }: Props) {
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
          <Link key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
