import Link from "next/link";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { graphqlFetch } from "@/lib/graphql";
import { GET_MENU } from "@/lib/queries/menu";
import type { MenuResponse, LinksGroupBlock, PageLinkBlock, ExternalLinkBlock } from "@/lib/types/menu";
import { cacheTag } from "next/cache";

async function getFooterMenus() {
  "use cache";
  cacheTag("footer-top-nav", "footer-bottom-nav");
  return Promise.all([
    graphqlFetch<MenuResponse>(GET_MENU, { slug: "footer-top-nav" }),
    graphqlFetch<MenuResponse>(GET_MENU, { slug: "footer-bottom-nav" }),
  ]);
}

export async function SiteFooter() {
  const [footerTopNav, footerBottomNav] = await getFooterMenus();

  const topGroups = footerTopNav.menu.menuItems.filter(
    (item): item is LinksGroupBlock => item.blockType === "LinksGroupBlock"
  );

  const bottomLinks = footerBottomNav.menu.menuItems.filter(
    (item): item is PageLinkBlock | ExternalLinkBlock =>
      item.blockType === "PageLinkBlock" || item.blockType === "ExternalLinkBlock"
  );

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-about">
          <Brand />
          <p>Ministry of Education &amp; Human Resources Development, Solomon Islands Government.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "var(--sp-4)", fontSize: "var(--t-small)" }}>
            <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Icon name="pin" size={16} /> Education House, Honiara
            </span>
            <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Icon name="phone" size={16} /> +677 28803
            </span>
            <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Icon name="mail" size={16} /> info@mehrd.gov.sb
            </span>
          </div>
        </div>

        {topGroups.map((group) => (
          <div key={group.id}>
            <h4>{group.title}</h4>
            <ul>
              {group.links.map((link) =>
                link.blockType === "ExternalLinkBlock" ? (
                  <li key={link.id}>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.title} <Icon name="ext" size={13} style={{ verticalAlign: "-1px" }} />
                    </a>
                  </li>
                ) : (
                  <li key={link.id}>
                    <Link href={link.page.url}>{link.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap">
        <div className="foot-bottom">
          <span>© 2026 MEHRD — Solomon Islands Government. All rights reserved.</span>
          <span style={{ display: "flex", gap: "var(--sp-4)" }}>
            {bottomLinks.map((link) =>
              link.blockType === "ExternalLinkBlock" ? (
                <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
                  {link.title}
                </a>
              ) : (
                <Link key={link.id} href={link.page.url}>
                  {link.title}
                </Link>
              )
            )}
          </span>
        </div>
      </div>
    </footer>
  );
}
