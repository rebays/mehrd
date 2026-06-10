export type PageInfo = {
  url: string;
  pageType: string;
};

export type PageLinkBlock = {
  blockType: "PageLinkBlock";
  id: string;
  title: string;
  page: PageInfo;
};

export type ExternalLinkBlock = {
  blockType: "ExternalLinkBlock";
  id: string;
  title: string;
  url: string;
};

export type LinksGroupBlock = {
  blockType: "LinksGroupBlock";
  id: string;
  title: string;
  links: (PageLinkBlock | ExternalLinkBlock)[];
};

export type DropdownBlock = {
  blockType: "DropdownBlock";
  id: string;
  title: string;
  showDropdownIcon: boolean;
  page?: PageInfo;
  items: LinksGroupBlock[];
};

export type MenuItem = PageLinkBlock | ExternalLinkBlock | LinksGroupBlock | DropdownBlock;

export type MenuResponse = {
  menu: {
    id: string;
    slug: string;
    name: string;
    menuItems: MenuItem[];
  };
};
