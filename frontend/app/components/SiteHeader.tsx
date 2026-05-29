"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { MobileDrawer } from "./MobileDrawer";
import { NAV } from "./navConfig";

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
              const active = pathname.startsWith(item.href);
              return (
                <div key={item.label} className="nav-item">
                  <Link href={item.href} className={`nav-link${active ? " active" : ""}`}>
                    {item.label}
                    <Icon name="chevron" size={15} className="ico nav-chev" />
                  </Link>
                  <div className="mega" role="menu">
                    <div
                      className="mega__inner"
                      style={{ "--mega-cols": item.columns.length } as CSSProperties}
                    >
                      {item.columns.map((col) => (
                        <div key={col.heading} className="mega__col" role="group" aria-label={col.heading}>
                          <span className="mega__heading">{col.heading}</span>
                          {col.links.map((l) => (
                            <Link key={l.label + l.href} href={l.href} className="mega__link" role="menuitem">
                              {l.icon && (
                                <span className="mega__ico"><Icon name={l.icon} size={20} className="ico" /></span>
                              )}
                              <span className="mega__txt">
                                <b>{l.label}</b>
                                {l.desc && <small>{l.desc}</small>}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <div className="header-tools">
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
