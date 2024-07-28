import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const fetchCache = "force-no-store";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const search = searchParams.get("search") || "";
    const tags = searchParams.getAll("tags");
    const pageSize = Number(searchParams.get("pageSize")) || 50;
    const pageNumber = Number(searchParams.get("pageNumber")) || 1;
    const offset = (pageNumber - 1) * pageSize;

    // Base query string
    let queryString = `
      SELECT
        experiments.*,
        COALESCE(json_agg(tags.name) FILTER (WHERE tags.name IS NOT NULL), '[]') AS tags
      FROM experiments
      LEFT JOIN experiment_tags ON experiments.id = experiment_tags.experiment_id
      LEFT JOIN tags ON experiment_tags.tag_id = tags.id
    `;

    // Initialize WHERE clauses
    const whereClauses: string[] = [];
    const queryParams: any[] = [];

    // Add slug filter
    if (slug) {
      whereClauses.push(`experiments.slug = $${queryParams.length + 1}`);
      queryParams.push(slug);
    }

    // Add search filter for title, description, and question
    if (search) {
      const searchTerm = search.toLowerCase();
      whereClauses.push(
        `(to_tsvector('english', experiments.title || ' ' || experiments.description || ' ' || experiments.question) @@ plainto_tsquery('english', $${
          queryParams.length + 1
        }))`
      );
      queryParams.push(searchTerm);
    }

    // Add tags filter
    if (tags.length > 0) {
      const tagPlaceholders = tags
        .map((_, index) => `$${queryParams.length + index + 1}`)
        .join(", ");
      whereClauses.push(`tags.name IN (${tagPlaceholders})`);
      queryParams.push(...tags);
    }

    // Append WHERE clause if there are any conditions
    if (whereClauses.length > 0) {
      queryString += ` WHERE ${whereClauses.join(" AND ")}`;
    }

    // Add GROUP BY clause
    queryString += ` GROUP BY experiments.id`;

    // Add pagination if not filtering by slug
    if (!slug) {
      queryString += ` LIMIT $${queryParams.length + 1} OFFSET $${
        queryParams.length + 2
      }`;
      queryParams.push(pageSize, offset);
    }

    // Execute the query
    const result = await sql.query(queryString, queryParams);

    return NextResponse.json({ experiments: result.rows }, { status: 200 });
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error).message || "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
