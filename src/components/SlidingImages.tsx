"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const SlidingImages = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const imagesPath = "/media/experiment-icons/";

  const imageNames = [
    "trolley-problem",
    "mary-and-color-red",
    "ship-of-theseus",
  ];

  const imagesExtension = ".png";

  return (
    <div className="fixed w-screen bottom-0 left-0 right-0 flex justify-between px-12 pt-4 pb-4 md:pb-8 bg-black">
      <button onClick={scrollLeft} className="p-2 text-white hover:opacity-50">
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
        className="flex overflow-x-auto space-x-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {imageNames.map((imageName, index) => (
          <Link key={imageName} href={`/experiments/${imageName}`}>
            <div key={index} className="flex-shrink-0 w-14 h-14 relative">
              <div className="w-full h-full relative overflow-hidden rounded-full border-2 border-white hover:opacity-50">
                <Image
                  src={`${imagesPath}${imageName}${imagesExtension}`}
                  alt={`Image ${index + 1}`}
                  className="object-contain p-2"
                  fill
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={scrollRight} className="p-2 text-white hover:opacity-50">
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
  );
};

export default SlidingImages;
