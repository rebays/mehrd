import type { CSSProperties } from "react";
import Link from "next/link";
import { Brand } from "./Brand";
import { HeaderControls } from "./HeaderControls";
import { NavActiveLink } from "./NavActiveLink";
import { NAV } from "./navConfig";
import { graphqlFetch } from "@/lib/graphql";
import { GET_MENU } from "@/lib/queries/menu";
import type { MenuResponse, DropdownBlock } from "@/lib/types/menu";

export async function SiteHeader() {
  const data = await graphqlFetch<MenuResponse>(GET_MENU, { slug: "main-nav" });

  const dropdowns = data.menu.menuItems.filter(
    (item): item is DropdownBlock => item.blockType === "DropdownBlock"
  );

  return (
    <header className="site-header">
      <div className="wrap">
        <Brand />
        <nav className="nav" aria-label="Primary">
          {dropdowns.map((dropdown) => (
            <div key={dropdown.id} className="nav-item">
              <NavActiveLink
                href={dropdown.page?.url ?? "#"}
                label={dropdown.title}
                showIcon={dropdown.showDropdownIcon}
              />
              <div className="mega" role="menu">
                <div
                  className="mega__inner"
                  style={{ "--mega-cols": dropdown.items.length } as CSSProperties}
                >
                  {dropdown.items.map((group) => (
                    <div key={group.id} className="mega__col" role="group" aria-label={group.title}>
                      <span className="mega__heading">{group.title}</span>
                      {group.links.map((link) =>
                        link.blockType === "ExternalLinkBlock" ? (
                          <a key={link.id} href={link.url} className="mega__link" role="menuitem" target="_blank" rel="noreferrer">
                            <span className="mega__txt"><b>{link.title}</b></span>
                          </a>
                        ) : (
                          <Link key={link.id} href={link.page.url} className="mega__link" role="menuitem">
                            <span className="mega__txt"><b>{link.title}</b></span>
                          </Link>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        <HeaderControls nav={NAV} />
      </div>
    </header>
  );
}
