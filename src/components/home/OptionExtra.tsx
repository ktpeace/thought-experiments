"use client";
import Link from "next/link";
import { useState } from "react";
import OptionWhat from "./OptionWhat";
import ChoiceText from "./ChoiceText";

const OptionExtra = ({ isWhatPicked }: { isWhatPicked: boolean }) => {
  const [isWhat, setIsWhat] = useState(false);
  const choiceText = "What's a thought experiment, exactly?";

  return (
    <div className="w-full mb-8 flex flex-col gap-8">
      {/* Main text */}
      <p>
        While exploring thought experiments, it&apos;s important to keep in mind
        the <span className="font-bold">spirit</span> or{" "}
        <span className="font-bold">intent</span>. You can usually come up with
        an alternate action: "I wouldn&apos;t do either of these! I&apos;d
        just..."{" "}
      </p>
      <p>But that&apos;s missing the point.</p>
      <p>
        If you think an experiment is flawed, consider the dilemma or concept it
        was invented to isolate, and try to come up with a better thought
        experiment for that instead.{" "}
        {isWhat || (isWhatPicked && "Happy thinking!🥂")}
      </p>
      {/* Button if what text already shown */}
      {isWhatPicked && (
        <div className="w-full flex justify-center">
          <Link href="/experiments" className="clean-button">
            To the experiments!
          </Link>
        </div>
      )}
      {/* Buttons if what text not yet shown */}
      {!isWhatPicked && !isWhat && (
        <div className="w-full my-16 flex flex-col md:flex-row justify-center gap-16">
          <button className="clean-button" onClick={() => setIsWhat(true)}>
            {choiceText}
          </button>
          <Link href="/experiments" className="clean-button">
            GET TO THE EXPERIMENTS!
          </Link>
        </div>
      )}
      {/* Display of selected choice */}
      {isWhat && <ChoiceText choiceText={choiceText} />}
      {/* What text */}
      {isWhat && !isWhatPicked && <OptionWhat isExtraPicked={true} />}
    </div>
  );
};

export default OptionExtra;
