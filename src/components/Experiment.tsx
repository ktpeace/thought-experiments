"use client";
import experimentData, { ExperimentData } from "@/components/experimentData";
import NextImage from "@/utils/NextImage";
import { usePathname } from "next/navigation";

const Experiment = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  if (typeof id !== "string" || !(id in experimentData)) {
    return <p>Experiment not found</p>;
  }

  const experiment: ExperimentData = experimentData[id];

  return (
    <div className="md:max-w-70p lg:max-w-50p text-neutral-200">
      <div>
        <h2 className="mb-10 text-center uppercase font-medium text-2xl">
          {experiment.title}
        </h2>
        <div className="w-full mb-10 flex justify-center">
          <NextImage
            src={`/media/experiment-images/${id}.jpg`}
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
        <div className="flex justify-center gap-16 mb-24">
          <button className="text-neutral-200 font-semibold py-2 px-4 border-2 border-neutral-700 hover:border-neutral-800 hover:bg-neutral-700/25 rounded uppercase">
            No
          </button>
          <button className="text-neutral-200 font-semibold py-2 px-4 border-2 border-neutral-700 hover:border-neutral-800 hover:bg-neutral-700/25 rounded uppercase">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experiment;
