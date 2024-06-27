import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`SELECT slug FROM experiments ORDER BY RANDOM() LIMIT 1`;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "No experiments found" },
        { status: 404 }
      );
    }

    const randomSlug = result.rows[0].slug;

    return NextResponse.json({ slug: randomSlug }, { status: 200 });
  } catch (err) {
    console.error("Error fetching random experiment slug:", err);
    const errorMessage = (err as Error).message || "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
