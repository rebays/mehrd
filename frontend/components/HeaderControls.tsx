"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { MobileDrawer } from "./MobileDrawer";
import type { NavItem } from "./navConfig";

type Props = {
  nav: readonly NavItem[];
};

export function HeaderControls({ nav }: Props) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    if (t === "dark") setTheme("dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("mehrd-theme", next); } catch {}
    setTheme(next);
  }

  return (
    <>
      <div className="header-tools">
        <button
          type="button"
          className="icon-btn theme-toggle"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} size={20} />
        </button>
        <button
          type="button"
          className="icon-btn menu-toggle"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <Icon name="menu" size={22} />
        </button>
      </div>
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        nav={nav}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </>
  );
}
