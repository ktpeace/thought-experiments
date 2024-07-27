import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { experimentId, vote } = await request.json();

    // Validate required values
    if (!experimentId || !vote) {
      return NextResponse.json(
        { error: "Missing experimentId or vote" },
        { status: 400 }
      );
    }

    // Validate vote to ensure it's either 'yes' or 'no'
    if (vote !== "yes" && vote !== "no") {
      return NextResponse.json(
        { error: "Invalid vote value" },
        { status: 400 }
      );
    }

    if (vote === "yes") {
      await sql`UPDATE experiments SET yes_votes = yes_votes + 1 WHERE id = ${experimentId}`;
    } else {
      await sql`UPDATE experiments SET no_votes = no_votes + 1 WHERE id = ${experimentId}`;
    }

    const result = await sql`
      SELECT yes_votes, no_votes
      FROM experiments
      WHERE id = ${experimentId};
    `;

    const updatedVotes = result.rows[0];

    return NextResponse.json(
      { message: "Vote recorded successfully", updatedVotes },
      { status: 200 }
    );
  } catch (err) {
    console.error("ERROR SAYS KAT");
    console.error(err);
    const errorMessage = (err as Error).message || "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    // Validate required values
    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    // Get votes from db
    const result = await sql`
      SELECT yes_votes, no_votes
      FROM experiments
      WHERE slug = ${slug};
    `;

    return NextResponse.json(
      { votes: result.rows[0] },
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
