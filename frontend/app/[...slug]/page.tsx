import { notFound } from "next/navigation";
import { graphqlFetch } from "@/lib/graphql";
import { GET_PAGE } from "@/lib/queries/page";
import type { PageResponse } from "@/lib/types/page";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const urlPath = "/home/" + slug.join("/");

  const data = await graphqlFetch<PageResponse>(GET_PAGE, { urlPath });

  if (!data.page) notFound();

  return (
    <div style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>{data.page.title}</h1>
    </div>
  );
}
