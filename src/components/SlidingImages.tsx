"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import experimentData from "./experimentData";

const SlidingImages = () => {
  // Images
  const imagesPath = "/media/experiment-images/";
  const imagesExtension = ".jpg";
  const [imageNames, setImageNames] = useState<string[][]>([]);
  // Scrolling
  const scrollRef = useRef<HTMLDivElement>(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

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
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Set image names for hover titles & alts
  useEffect(() => {
    if (experimentData) {
      let tempImageNames: [string, string][] = [];
      for (let [key, value] of Object.entries(experimentData)) {
        let pair: [string, string] = [key, value.title];
        tempImageNames.push(pair);
      }
      setImageNames(tempImageNames);
    }
  }, []);

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
  }, [imageNames]);

  // Image names are the URL names so no point if missing
  if (imageNames.length === 0) return null;

  return (
    <div className="fixed w-screen bottom-0 left-0 right-0 flex justify-between px-12 pt-4 pb-4 bg-transparent">
      <div className="fixed w-full bottom-0 left-0 right-0 flex justify-between py-2 bg-dusky-800">
        {/* Left button */}
        <button
          onClick={scrollLeft}
          className={`px-4 text-neutral-400 ${
            disableLeft ? "opacity-30" : "opacity-100"
          } ${!disableLeft && "betterhover:hover:text-white"}`}
          disabled={disableLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
        {/* Images */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 gap-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {imageNames.map(([name, title], index) => (
            <Link key={name} href={`/experiments/${name}`} title={title}>
              <div
                key={index}
                className="w-8 h-8 md:w-16 md:h-16 flex-shrink-0"
              >
                <div
                  className={`w-full h-full relative overflow-hidden rounded-full betterhover:hover:opacity-50`}
                >
                  <Image
                    src={`${imagesPath}${name}${imagesExtension}`}
                    alt={title}
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Right button */}
        <button
          onClick={scrollRight}
          className={`px-4 text-neutral-400 ${
            disableRight ? "opacity-30" : "opacity-100"
          } ${!disableRight && "betterhover:hover:text-white"}`}
          disabled={disableRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SlidingImages;
