import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ error: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("main-nav");
  revalidateTag("footer-top-nav");
  revalidateTag("footer-bottom-nav");
  return Response.json({ revalidated: true });
}