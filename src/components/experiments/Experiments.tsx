"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import { ExperimentData } from "@/types";
import { Spinner } from "../icons/svgIcons";
import Search from "./Search";
import Tags from "./Tags";

const montserrat = Montserrat({ subsets: ["latin"] });

const Experiments = () => {
  // Routing & params
  const searchParams = useSearchParams();
  const searchString = searchParams.toString();
  const query = searchParams.get("search") || undefined;
  let tags: string[] | undefined = searchParams.getAll("tags");
  // Generic state handlers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // Experiments data & pagination
  const [experiments, setExperiments] = useState<ExperimentData[]>([]);
  const PAGE_SIZE = 30;
  const [pageNumber, setPageNumber] = useState(1);

  // Function to construct params string
  function buildParams(userQuery?: string, userTags?: string[]) {
    // Start with page size and number
    const queryParams = new URLSearchParams({
      pageSize: `${PAGE_SIZE}`,
      pageNumber: `${pageNumber}`,
    });

    // Set search query, prioritizing user entry over URL params
    if (userQuery === "") {
      queryParams.delete("search");
    } else if (userQuery != null) {
      queryParams.set("search", userQuery);
    } else if (query) {
      queryParams.set("search", query);
    }

    // Use userTags if provided, otherwise use URL tags
    const tagsToUse = userTags || tags;
    if (tagsToUse && tagsToUse.length > 0) {
      tagsToUse.forEach((tag) => queryParams.append("tags", tag));
    }

    // Return query string
    return queryParams.toString();
  }

  // Fetch & set experiments when query params change
  // This can happen via direct call of setQueryParams, or by navigation
  useEffect(() => {
    console.log("params changed");
    async function fetchExperiments() {
      try {
        // Reset experiments
        setLoading(true);
        setExperiments([]);
        // setPageNumber(1);
        // Fetch using params
        const queryParams = buildParams();
        console.log("params query", queryParams);
        const response = await fetch(`/api/experiments?${queryParams}`);
        // Set experiments with response data
        const data = await response.json();
        console.log("query data", data);
        setExperiments(data.experiments);
        // setExperiments((prev) => [...prev, ...data.experiments]);
      } catch (err) {
        // Handle errors
        console.error(err);
        setLoading(false);
        setError(
          "An error occurred fetching the experiments. Please refresh, and feel free to contact me via About page if errors persist."
        );
      } finally {
        // Stop loading spinner
        setLoading(false);
      }
    }

    fetchExperiments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  // Convert votes to a percent
  function getPercent(num: number, totalVotes: number) {
    if (num === 0) return num;
    return Math.round((num / totalVotes) * 100);
  }

  return (
    <div className="main-container my-12 gap-4">
      {/* Header & search */}
      <div className="mb-4 flex flex-col sm:flex-row gap-4 sm:gap-none items-center justify-between">
        <h2 className="mb-2 sm:mb-0 text-3xl sm:text-base">
          Thought Experiments
        </h2>
        <Search searchParams={searchParams} buildParams={buildParams} />
      </div>

      {/* Experiments */}
      <section className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {experiments.map((experiment) => {
          const pastVote = localStorage.getItem(experiment.slug);
          const totalVotes = experiment.no_votes + experiment.yes_votes;

          return (
            <div
              key={experiment.id}
              className="mb-2 md:mb-4 flex justify-center"
            >
              <div className="w-32 md:w-44 flex flex-col gap-1 md:gap-2">
                <div className="relative group">
                  <Link
                    href={`/experiments/${experiment.slug}`}
                    title={experiment.title}
                    className="block"
                  >
                    <Image
                      src={experiment.image_url}
                      alt={`${experiment.title} in delicate anime style`}
                      width="1024"
                      height="1024"
                      className="w-32 h-32 md:w-44 md:h-44 rounded object-contain group-hover:opacity-50"
                    />
                    {pastVote && (
                      <div className="absolute inset-0 flex justify-between items-end mx-1 mb-1 ">
                        <span
                          className={clsx(
                            `px-1 text-sm bg-[#411914] bg-opacity-80 rounded text-neutral-200 border border-2 border-dusky-600/[.1]`,
                            { "border-brick-700/[.4]": pastVote === "no" }
                          )}
                          title={`No votes: ${experiment.no_votes} ${
                            pastVote === "no" ? "(incl. you)" : ""
                          }`}
                        >
                          {getPercent(experiment.no_votes, totalVotes)}
                          <span
                            className={`${montserrat.className} text-xs ml-[1px]`}
                          >
                            %
                          </span>
                        </span>
                        <span
                          className={`px-1 text-sm bg-[#003e28] bg-opacity-80 rounded text-neutral-200 border border-2 border-dusky-600/[.1] ${
                            pastVote === "yes" && "border-moss-700/[.4]"
                          }`}
                          title={`Yes votes: ${experiment.yes_votes} ${
                            pastVote === "yes" ? "(incl. you)" : ""
                          }`}
                        >
                          {getPercent(experiment.yes_votes, totalVotes)}
                          <span
                            className={`${montserrat.className} text-xs ml-[1px]`}
                          >
                            %
                          </span>
                        </span>
                      </div>
                    )}
                  </Link>
                </div>
                <Link
                  href={`/experiments/${experiment.slug}`}
                  className="block"
                >
                  <h4 title={experiment.title} className="text-sm truncate">
                    {experiment.title}
                  </h4>
                </Link>
                <Tags tags={experiment.tags} />
              </div>
            </div>
          );
        })}
      </section>

      {/* Loading spinner or error message */}
      {(loading || error) && (
        <div
          className={`w-full ${
            experiments.length === 0 && "h-[60vh]"
          } mb-4 flex justify-center items-center`}
        >
          {loading && <Spinner />}
          {error}
        </div>
      )}

      {/* Pagination claim */}
      <div className="w-full flex justify-center text-sm">
        I&apos;ll get me some pagination when I durn well need it
      </div>
    </div>
  );
};
export default Experiments;

// // Call fetchExperiments on initial render & when params change
// useEffect(() => {
//   const pageNumber = searchParams.get("pageNumber");
//   if (tags) tags = tags.length > 0 ? tags : undefined;

//   if (pageNumber) {
//     setPageNumber(parseInt(pageNumber, 10));
//   }

//   if (query || tags) {
//     fetchExperiments(query, tags);
//   } else {
//     fetchExperiments();
//   }
// }, [query]);
