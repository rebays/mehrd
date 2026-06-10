export const GET_PAGE = /* GraphQL */ `
  query GetPage($urlPath: String!) {
    page(urlPath: $urlPath) {
      title
      pageType
      url
    }
  }
`;
