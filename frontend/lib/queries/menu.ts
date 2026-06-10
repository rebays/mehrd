export const GET_MENU = /* GraphQL */ `
  query GetMenu($slug: String!) {
    menu(slug: $slug) {
      id
      slug
      name
      menuItems {
        blockType
        id
        ... on PageLinkBlock {
          title
          page {
            url
            pageType
          }
        }
        ... on ExternalLinkBlock {
          title
          url
        }
        ... on LinksGroupBlock {
          title
          links {
            blockType
            id
            ... on PageLinkBlock {
              title
              page {
                url
                pageType
              }
            }
            ... on ExternalLinkBlock {
              title
              url
            }
          }
        }
        ... on DropdownBlock {
          title
          showDropdownIcon
          page {
            url
          }
          items {
            ... on LinksGroupBlock {
              blockType
              id
              title
              links {
                blockType
                id
                ... on PageLinkBlock {
                  title
                  page {
                    url
                            pageType
                  }
                }
                ... on ExternalLinkBlock {
                  title
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
