"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { MobileDrawer } from "./MobileDrawer";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/students", label: "Students & Parents" },
  { href: "/teachers", label: "Teachers" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/documents", label: "Documents" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
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
      <header className="site-header">
        <div className="wrap">
          <Brand />
          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} className={active ? "active" : ""}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="header-tools">
            <Link href="/documents" className="icon-btn" aria-label="Search">
              <Icon name="search" size={20} />
            </Link>
            <button type="button" className="icon-btn" aria-label="Toggle dark mode" onClick={toggleTheme}>
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
        </div>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} nav={NAV} />
    </>
  );
}
