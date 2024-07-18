"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ExperimentData } from "@/types";
import { Spinner } from "../icons/svgIcons";

const montserrat = Montserrat({ subsets: ["latin"] });

const Experiments = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  // Experiments data & pagination
  const [experiments, setExperiments] = useState<ExperimentData[]>([]);
  const PAGE_SIZE = 20;
  const [pageNumber, setPageNumber] = useState(1);

  // Fetch & set experiments data
  useEffect(() => {
    async function callFetchExperiments() {
      try {
        const response = await fetch(
          `/api/experiments?pageSize=${PAGE_SIZE}&pageNumber=${pageNumber}`
        );
        const data = await response.json();
        setExperiments((prev) => [...prev, ...data.experiments]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    experiments?.length === 0 && callFetchExperiments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  // Convert votes to a percent
  function getPercent(num: number, totalVotes: number) {
    if (num === 0) return num;
    return Math.round((num / totalVotes) * 100);
  }

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

  return (
    <div className="main-container my-12 gap-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="mb-4 text-base">All Thought Experiments (more soon!)</h2>
        <p className="text-base invisible md:visible">
          search & filter by tags soon
        </p>
      </div>
      <section className="mx-0 md:mx-24 xl:mx-0 mb-8 grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-4">
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

                    {/* mx-0 md:mx-24 xl:mx-0  */}
                    {pastVote && (
                      <div className="absolute inset-0 flex justify-between items-end mx-1 mb-1 ">
                        <span
                          className={`px-1 text-sm bg-[#411914] bg-opacity-80 rounded text-neutral-200 border border-2 border-dusky-600/[.1] ${
                            pastVote === "no" && "border-brick-700/[.4]"
                          }`}
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
                <div className="flex flex-wrap gap-1">
                  {experiment.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="py-[2px] px-[5px] self-start text-xs rounded text-white dark:text-neutral-200 bg-pool-600 dark:bg-pool-900"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="w-full flex justify-center text-sm">
        I&apos;ll get me some pagination when I durn well need it
      </div>
    </div>
  );
};
export default Experiments;
