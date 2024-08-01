import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const fetchCache = "force-no-store";

export async function GET(request: Request) {
  // request.url must be outside try/catch for nextjs dynamic route switching
  const url = new URL(request.url);
  try {
    const searchParams = url.searchParams;
    const slug = searchParams.get("slug");
    const search = searchParams.get("search") || "";
    const tags = searchParams.getAll("tags");
    const pageSize = Number(searchParams.get("pageSize")) || 50;
    const pageNumber = Number(searchParams.get("pageNumber")) || 1;
    const offset = (pageNumber - 1) * pageSize;

    // Base query
    let queryString = `
      SELECT
        experiments.*,
        COALESCE(json_agg(DISTINCT tags.name) FILTER (WHERE tags.name IS NOT NULL), '[]') AS tags
      FROM experiments
      LEFT JOIN experiment_tags ON experiments.id = experiment_tags.experiment_id
      LEFT JOIN tags ON experiment_tags.tag_id = tags.id
    `;

    const whereClauses = [];
    const queryParams = [];

    // Filter by slug if provided
    if (slug) {
      whereClauses.push(`experiments.slug = $${queryParams.length + 1}`);
      queryParams.push(slug);
    }

    // Filter by search term if provided
    if (search) {
      const searchTerm = search.toLowerCase();
      whereClauses.push(
        `(to_tsvector('english', experiments.title || ' ' || experiments.description || ' ' || experiments.question) @@ plainto_tsquery('english', $${
          queryParams.length + 1
        }))`
      );
      queryParams.push(searchTerm);
    }

    // Filter by tags if provided
    if (tags.length > 0) {
      const tagPlaceholders = tags
        .map((_, index) => `$${queryParams.length + index + 1}`)
        .join(", ");
      whereClauses.push(`experiments.id IN (
        SELECT experiment_tags.experiment_id
        FROM experiment_tags
        JOIN tags ON experiment_tags.tag_id = tags.id
        WHERE tags.name IN (${tagPlaceholders})
        GROUP BY experiment_tags.experiment_id
        HAVING COUNT(DISTINCT tags.name) = ${tags.length}
      )`);
      queryParams.push(...tags);
    }

    // Add where clauses to the query
    if (whereClauses.length > 0) {
      queryString += ` WHERE ${whereClauses.join(" AND ")}`;
    }

    // Group and order by experiments.id
    queryString += `
      GROUP BY experiments.id
      ORDER BY experiments.id
    `;

    // Limit and offset for pagination
    if (!slug) {
      queryString += ` LIMIT $${queryParams.length + 1} OFFSET $${
        queryParams.length + 2
      }`;
      queryParams.push(pageSize, offset);
    }

    // Execute the query
    const result = await sql.query(queryString, queryParams);

    // Return the results
    return NextResponse.json({ experiments: result.rows }, { status: 200 });
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error).message || "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
