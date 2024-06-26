"use client";
import experimentData, { ExperimentData } from "@/components/experimentData";
import NextImage from "@/utils/NextImage";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Experiment = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [choice, setChoice] = useState("");

  if (typeof id !== "string" || !(id in experimentData)) {
    return <p>Experiment not found</p>;
  }

  const experiment: ExperimentData = experimentData[id];

  function handleClick(clickChoice: string) {
    setChoice(clickChoice);
  }

  return (
    <div className="md:max-w-70p 2xl:max-w-50p text-neutral-200">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mb-8 w-full flex flex-col justify-center items-center">
          <h2 className="uppercase font-medium text-2xl text-center">
            {experiment.title}
          </h2>
          <p>
            <Link
              href={experiment.originLink}
              className="underline text-pool-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Origin
            </Link>
            : {experiment.origin}
          </p>
        </div>
        <div className="w-full mb-8 flex justify-center">
          <Image
            src={`/media/experiment-images/${id}.jpg`}
            width="1024"
            height="1024"
            alt={experiment.alt}
          />
        </div>
        <div className="mb-10 flex flex-col gap-6 text-xl">
          {experiment.description.map((paragraph, i) => {
            // If it's the last paragraph, append the question in bold
            if (i === experiment.description.length - 1) {
              return (
                <p key={i}>
                  {paragraph} <strong>{experiment.question}</strong>
                </p>
              );
            } else {
              return <p key={i}>{paragraph}</p>;
            }
          })}
        </div>
        <div className="w-full flex justify-center gap-16 mb-24">
          {choice && (
            <p className="w-full p-2 text-lg bg-pool-800 rounded">
              Well bully for you, but this doesn&apos;t do anything yet.
            </p>
          )}
          {!choice && (
            <>
              <button
                onClick={() => handleClick("no")}
                className="text-neutral-200 font-semibold py-2 px-4 border-2 border-neutral-700 hover:border-neutral-800 hover:bg-neutral-700/25 rounded uppercase"
              >
                No
              </button>
              <button
                onClick={() => handleClick("yes")}
                className="text-neutral-200 font-semibold py-2 px-4 border-2 border-neutral-700 hover:border-neutral-800 hover:bg-neutral-700/25 rounded uppercase"
              >
                Yes
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiment;
