import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSize = Number(searchParams.get("pageSize")) || 50;
    const pageNumber = Number(searchParams.get("pageNumber")) || 1;
    const slug = searchParams.get("slug");
    const offset = (pageNumber - 1) * pageSize;

    let result;

    if (slug) {
      result = await sql`
        SELECT
          experiments.*,
          COALESCE(json_agg(tags.name) FILTER (WHERE tags.name IS NOT NULL), '[]') AS tags
        FROM experiments
        LEFT JOIN experiment_tags ON experiments.id = experiment_tags.experiment_id
        LEFT JOIN tags ON experiment_tags.tag_id = tags.id
        WHERE experiments.slug = ${slug}
        GROUP BY experiments.id;
      `;
    } else {
      result = await sql`
        SELECT
          experiments.*,
          COALESCE(json_agg(tags.name) FILTER (WHERE tags.name IS NOT NULL), '[]') AS tags
        FROM experiments
        LEFT JOIN experiment_tags ON experiments.id = experiment_tags.experiment_id
        LEFT JOIN tags ON experiment_tags.tag_id = tags.id
        GROUP BY experiments.id
        LIMIT ${pageSize} OFFSET ${offset};
      `;
    }

    return NextResponse.json(
      { experiments: result.rows },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error).message || "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
