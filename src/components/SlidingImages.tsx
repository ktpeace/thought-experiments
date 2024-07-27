"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { LeftArrow, RightArrow } from "./icons/svgIcons";
import { ExperimentData } from "@/types";
import { usePathname } from "next/navigation";

const SlidingImages = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  // Scrolling
  const scrollRef = useRef<HTMLDivElement>(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);
  // Data
  const PAGE_SIZE = 20;
  const [pageNumber, setPageNumber] = useState(1);
  const [experiments, setExperiments] = useState<ExperimentData[]>([]);

  // Fetch & set experiments data
  useEffect(() => {
    async function callFetchExperiments() {
      try {
        const response = await fetch(
          `/api/experiments?pageSize=${PAGE_SIZE}&pageNumber=${pageNumber}`
        );
        const data = await response.json();
        console.log(data.experiments);
        setExperiments((prev) => [...prev, ...data.experiments]);
      } catch (err) {
        console.error(err);
      }
    }

    experiments?.length === 0 && callFetchExperiments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  // Disable right or left button if end of data on that side
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setDisableLeft(scrollLeft <= 5); // Adjusted condition for left
      setDisableRight(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  // Scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.5; // Scrolls 20% of the screen width
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.5; // Scrolls 20% of the screen width
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Check scroll potential on render or resize
  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      checkScroll();
      current.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        current.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [experiments]);

  // Don't show this if no experiments
  if (experiments.length === 0) return null;

  return (
    <div className="fixed w-screen bottom-0 left-0 right-0 flex justify-between px-12 pt-4 pb-4 bg-transparent">
      <div className="fixed w-full bottom-0 left-0 right-0 flex justify-between py-2 bg-white border-t-2 dark:border-t-0 dark:bg-dusky-800">
        {/* Left button */}
        <button
          onClick={scrollLeft}
          className={clsx(`px-4 dark:text-neutral-400 `, {
            "opacity-30": disableLeft,
            "opacity-100": disableRight,
            "dark:betterhover:hover:text-white": !disableLeft,
          })}
          disabled={disableLeft}
        >
          <LeftArrow />
        </button>
        {/* Images */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 gap-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {experiments.map((experiment) => (
            <Link
              key={experiment.id}
              href={`/experiments/${experiment.slug}`}
              title={experiment.title}
              onClick={(e) => {
                if (slug === experiment.slug) {
                  // don't do anything if already here
                  e.preventDefault();
                }
              }}
              className={`${slug === experiment.slug && "cursor-auto"}`}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                <div
                  className={clsx(
                    `w-full h-full relative overflow-hidden rounded-full`,
                    {
                      "betterhover:hover:opacity-50": slug !== experiment.slug,
                      "border-4 border-pool-500 dark:border-pool-700":
                        slug === experiment.slug,
                    }
                  )}
                >
                  <Image
                    src={experiment.image_url}
                    alt={`${experiment.title} in delicate anime style`}
                    className="object-cover"
                    width="1024"
                    height="1024"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Right button */}
        <button
          onClick={scrollRight}
          className={clsx("px-4 dark:text-neutral-400", {
            "opacity-30": disableRight,
            "opacity-100": !disableRight,
            "dark:betterhover:hover:text-white": !disableRight,
          })}
          disabled={disableRight}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default SlidingImages;
