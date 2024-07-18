"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExperimentData } from "@/types";
import { Spinner } from "../icons/svgIcons";

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
        <p className="text-base">search & filter by tags soon</p>
      </div>
      <section className="w-full mb-8 flex flex-wrap justify-start gap-4">
        {experiments.map((experiment) => {
          const pastVote = localStorage.getItem(experiment.slug);
          return (
            <div
              key={experiment.id}
              className="mb-4 flex-grow flex-shrink-0 basis-44 flex flex-col items-center"
            >
              <div className="w-44 flex flex-col gap-2">
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
                      className="w-44 h-44 rounded object-contain group-hover:opacity-50"
                    />
                    {pastVote && (
                      <div className="absolute inset-0 flex justify-between items-end mx-1 mb-1 ">
                        <span
                          className={`px-1 text-sm bg-[#411914] bg-opacity-70 rounded text-white border border-2 border-dusky-600/[.1] ${
                            pastVote === "no" && "border-brick-700/[.4]"
                          }`}
                          title={`No votes: ${experiment.no_votes} ${
                            pastVote === "no" ? "(incl. you)" : ""
                          }`}
                        >
                          {experiment.no_votes}
                        </span>
                        <span
                          className={`px-1 text-sm bg-[#003e28] bg-opacity-70 rounded text-white border border-2 border-dusky-600/[.1] ${
                            pastVote === "yes" && "border-moss-700/[.4]"
                          }`}
                          title={`Yes votes: ${experiment.yes_votes} ${
                            pastVote === "yes" ? "(incl. you)" : ""
                          }`}
                        >
                          {experiment.yes_votes}
                        </span>
                      </div>
                    )}
                  </Link>
                </div>
                <Link
                  href={`/experiments/${experiment.slug}`}
                  className="block"
                >
                  <h4
                    title={experiment.title}
                    className="text-sm truncate text-center"
                  >
                    {experiment.title}
                  </h4>
                </Link>
                <div className="flex flex-wrap gap-1">
                  {experiment.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="py-[2px] px-[5px] self-start text-xs rounded-lg text-white bg-pool-700"
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
