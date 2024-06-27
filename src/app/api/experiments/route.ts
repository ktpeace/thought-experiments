import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSize = Number(searchParams.get("pageSize")) || 20;
    const pageNumber = Number(searchParams.get("pageNumber")) || 1;
    const slug = searchParams.get("slug");
    const offset = (pageNumber - 1) * pageSize;

    let result;

    if (slug) {
      result = await sql`
      SELECT * FROM experiments WHERE slug = ${slug};
    `;
    } else {
      result = await sql`
      SELECT * FROM experiments LIMIT ${pageSize} OFFSET ${offset};
    `;
    }

    return NextResponse.json({ experiments: result.rows }, { status: 200 });
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error).message || "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
