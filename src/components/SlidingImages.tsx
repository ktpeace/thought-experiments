"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import experimentData from "./experimentData";

const SlidingImages = () => {
  const imagesPath = "/media/experiment-images/";
  const imagesExtension = ".jpg";
  const [imageNames, setImageNames] = useState<string[][]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  // const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (experimentData) {
      let tempImageNames: [string, string][] = [];
      for (let [key, value] of Object.entries(experimentData)) {
        let pair: [string, string] = [key, value.title];
        console.log(pair);
        tempImageNames.push(pair);
      }
      setImageNames(tempImageNames);
    }
  }, []);

  if (imageNames.length === 0) return null;

  return (
    <div
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      className="fixed w-screen bottom-0 left-0 right-0 flex justify-between px-12 pt-4 pb-4 bg-transparent"
    >
      {/* {isHovered && ( */}
      <div className="fixed w-screen bottom-0 left-0 right-0 flex justify-between px-4 pt-4 pb-4 bg-dusky-800">
        <button
          onClick={scrollLeft}
          className="mx-2 text-white opacity-50 hover:opacity-100"
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
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 gap-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {imageNames.map(([name, title], index) => (
            <Link key={name} href={`/experiments/${name}`} title={title}>
              <div key={index} className="flex-shrink-0 w-14 h-14 relative">
                <div className="w-full h-full relative overflow-hidden rounded-full border-2 border-white hover:opacity-50">
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
        <button
          onClick={scrollRight}
          className="mr-6 ml-2 text-white opacity-50 hover:opacity-100"
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
      {/* )} */}
    </div>
  );
};

export default SlidingImages;
