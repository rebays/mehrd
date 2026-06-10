import { GraphQLError, NetworkError } from "./errors";

export async function graphqlFetch<T>(
  query: string,
  variables = {},
  nextOptions: RequestInit = { cache: "no-store" },
): Promise<T> {
  const url = process.env.WAGTAIL_GRAPHQL_URL!;

  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    ...nextOptions,
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorText = await res.text();
      throw new GraphQLError(
        `GraphQL endpoint responded with ${res.status}: ${res.statusText}\n${errorText}`,
        res.status,
        res.url,
      );
    }

    const json = await res.json();

    if (json.errors) {
      throw new GraphQLError(json.errors[0].message);
    }

    return json.data as T;

  } catch (error) {
    if (error instanceof GraphQLError) throw error;

    if (error instanceof Error && error.message.includes("fetch failed")) {
      throw new NetworkError(
        `Unable to reach GraphQL endpoint. Verify WAGTAIL_GRAPHQL_URL: "${url}".`,
        503,
        url,
      );
    }

    throw new Error("An unexpected error occurred");
  }
}
