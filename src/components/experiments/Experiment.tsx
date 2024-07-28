"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ExperimentData, Votes } from "@/types";
import { Spinner } from "../icons/svgIcons";
import TagsModal from "./TagsModal";

const montserrat = Montserrat({ subsets: ["latin"] });

const Experiment = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [experiment, setExperiment] = useState<ExperimentData>(
    {} as ExperimentData
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [choice, setChoice] = useState("");
  const [votes, setVotes] = useState<Votes>({} as Votes);
  const [hasPastVote, setHasPastVote] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const tagsContainerRef = useRef<HTMLDivElement>(null);

  // If tags overflow, display "more"
  useEffect(() => {
    const container = tagsContainerRef.current;
    if (!container) return;

    // Recalculate on window resize
    const observer = new ResizeObserver(() => {
      if (container) {
        setIsOverflow(container.scrollWidth > container.clientWidth);
      }
    });

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [experiment.tags]);

  // Respond to experiment slug change
  useEffect(() => {
    // Reset votes
    setChoice("");
    setVotes({} as Votes);
    setHasPastVote(false);

    // Fetch & set experiment
    async function callFetchExperiments() {
      try {
        if (!slug) {
          setError("Experiment missing from URL.");
          return;
        }
        // Fetch experiment
        const response = await fetch(`/api/experiments?slug=${slug}`);
        const data = await response.json();
        if (!data || !data.experiments || data.experiments.length === 0) {
          setError("No data found for this experiment URL.");
          return;
        }
        setExperiment(data.experiments[0]);
        // If user has voted on this before, get their choice & vote tallies
        const pastChoice = slug && localStorage.getItem(slug);
        if (pastChoice) {
          const response = await fetch(`/api/experiment-vote?slug=${slug}`);
          const data = await response.json();
          setVotes(data.votes);
          setHasPastVote(true);
          setChoice(pastChoice);
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred fetching the experiment.");
      } finally {
        setLoading(false);
      }
    }

    callFetchExperiments();

    // Scroll to top of the page
    window.scrollTo(0, 0);
  }, [slug]);

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

  const handleMoreTagsClick = () => {
    setShowTags(true);
  };

  // Record user vote & get latest vote tallies
  async function handleVote(vote: string) {
    try {
      const experimentId = experiment.id;

      const response = await fetch("/api/experiment-vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ experimentId, vote }),
      });

      if (!response.ok) {
        throw new Error("Failed to record vote");
      }

      const data = await response.json();
      console.log(data);

      slug && localStorage.setItem(slug, vote);
      setVotes(data.updatedVotes);
      setChoice(vote);
    } catch (err) {
      console.error(err);
      setError("Error recording vote.");
    }
  }

  function compareToOthers() {
    // If votes are equal
    const isEqual = votes.yes_votes === votes.no_votes;
    if (isEqual) {
      return "You've brought harmony to the universe!";
    }
    // If user is only voter
    const total = votes.yes_votes + votes.no_votes;
    if (total === 1) {
      return "You're the first to vote.";
    }
    // If user is in majority
    const yesMore = votes.yes_votes > votes.no_votes;
    if ((yesMore && choice === "yes") || (!yesMore && choice === "no")) {
      return "You're in good company.";
    } else {
      // If user is in minority
      return "You're in the minority on this one.";
    }
  }

  function getPercent(num: number) {
    if (num === 0) return num;
    const totalVotes = votes.yes_votes + votes.no_votes;
    return Math.round((num / totalVotes) * 100);
  }

  return (
    <div className="w-full md:max-w-70p dark:text-neutral-200">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full mb-4 flex flex-col justify-center items-center">
          <h2 className="uppercase font-medium text-2xl text-center">
            {experiment.title}
          </h2>
          <p>
            <Link
              href={experiment.origin_link}
              className="underline text-pool-600 dark:text-pool-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Origin
            </Link>
            : {experiment.origin}
          </p>
          <div className="w-full mt-2 flex gap-1">
            <div
              className={`w-full flex flex-nowrap gap-1 overflow-hidden ${
                isOverflow ? "flex-grow" : "justify-center"
              }`}
              ref={tagsContainerRef}
            >
              {experiment.tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="py-[2px] px-[5px] text-xs whitespace-nowrap rounded text-white dark:text-neutral-200 bg-pool-600 dark:bg-pool-900"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
            {isOverflow && (
              <div
                className="flex-shrink-0 py-[2px] px-[5px] text-xs rounded text-pool-600 dark:text-pool-500 hover:text-pool-300 whitespace-nowrap cursor-pointer font-bold"
                onClick={handleMoreTagsClick}
              >
                ...more
              </div>
            )}
          </div>
        </div>

        <div className="w-full sm:w-6/12 mb-8 flex justify-center">
          <Image
            src={experiment.image_url}
            width="1024"
            height="1024"
            alt={experiment.alt}
            className="rounded"
          />
        </div>
        <div className="mb-10 flex flex-col gap-6 text-xl">
          <p className="whitespace-pre-wrap">{experiment.description}</p>
          <p className="font-semibold">{experiment.question}</p>
        </div>
        <div className="w-full flex justify-center gap-16 mb-24">
          {votes.yes_votes !== null && votes.yes_votes !== undefined && (
            <div className="w-full p-2 text-xl flex flex-col gap-8">
              <div
                className={`relative w-full py-2 px-4 flex justify-center text-2xl italic rounded bg-pool-500/[.15]`}
              >
                <span className="capitalize">{choice}</span>.
              </div>
              <p className="text-center">
                {!hasPastVote && (
                  <>
                    Is that so? {compareToOthers()}{" "}
                    {votes.yes_votes + votes.no_votes === 1
                      ? "Come back another time to see what others decide."
                      : "Here's how others voted:"}
                  </>
                )}
                {hasPastVote && (
                  <>
                    You&apos;ve already voted! {compareToOthers()} Here&apos;s
                    the latest total vote count:
                  </>
                )}
              </p>
              {/* Vote percents */}
              <div className="w-full flex justify-between gap-8">
                <div className="flex-1 p-4 flex justify-center items-center gap-2 bg-dusky-100 dark:bg-dusky-400 rounded">
                  <span>YES:</span>{" "}
                  <div>
                    <span className={`${montserrat.className} text-lg`}>
                      {getPercent(votes.yes_votes)}
                    </span>
                    %
                  </div>
                </div>
                <div className="flex-1 p-4 flex justify-center items-center gap-2 bg-dusky-100 dark:bg-dusky-400 rounded">
                  <span>NO:</span>{" "}
                  <div>
                    <span className={`${montserrat.className} text-lg`}>
                      {getPercent(votes.no_votes)}
                    </span>
                    %
                  </div>
                </div>
              </div>
            </div>
          )}
          {!choice && (
            <>
              <button
                onClick={() => handleVote("no")}
                className="dark:text-neutral-200 font-semibold py-2 px-4 border-2 border-neutral-700 hover:border-neutral-800 hover:bg-neutral-700/25 rounded uppercase"
              >
                No
              </button>
              <button
                onClick={() => handleVote("yes")}
                className="dark:text-neutral-200 font-semibold py-2 px-4 border-2 border-neutral-700 hover:border-neutral-800 hover:bg-neutral-700/25 rounded uppercase"
              >
                Yes
              </button>
            </>
          )}
        </div>
      </div>
      {showTags && <TagsModal setIsOpen={setShowTags} tags={experiment.tags} />}
    </div>
  );
};

export default Experiment;
