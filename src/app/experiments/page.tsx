"use client";
import { Spinner } from "@/components/icons/svgIcons";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExperimentsPage() {
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch a random slug
  async function fetchRandomExperiment() {
    try {
      const response = await fetch(`/api/experiment-random?slug=${slug}`);
      const data = await response.json();
      setSlug(data.slug);
    } catch (err) {
      console.error(err);
      setError("An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRandomExperiment();
  }, []);

  // Return loading spinner if experiment fetch incomplete
  if (loading) {
    return (
      <div className="h-[65vh] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  // Return error message
  if (error) {
    return (
      <div className="h-[65vh] flex justify-center items-center">{error}</div>
    );
  }

  // Redirect to a random experiment page
  slug && redirect(`/experiments/${slug}`);
}
