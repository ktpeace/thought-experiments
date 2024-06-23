"use client";
import Link from "next/link";
import { useState } from "react";
import ChoiceText from "./ChoiceText";

interface WelcomeProps {
  setIsWhat: React.Dispatch<React.SetStateAction<boolean>>;
  setIsExtra: React.Dispatch<React.SetStateAction<boolean>>;
}

const Welcome: React.FC<WelcomeProps> = ({ setIsWhat, setIsExtra }) => {
  const [choiceText, setChoiceText] = useState("");
  const whatText = "What’s a thought experiment, exactly?";
  const extraText = "Anything I should know before diving in?";

  function choiceHandler(choice: string) {
    if (choice === "what") {
      setIsWhat(true);
      setChoiceText(whatText);
    } else if (choice === "extra") {
      setIsExtra(true);
      setChoiceText(extraText);
    }
  }

  return (
    <section className="w-full pt-12 pb-8 md:pb-16 mt-[-64px] min-h-screen-safe md:min-h-screen flex flex-col justify-between">
      <div className="h-16"></div>
      {/* Welcome text */}
      <h2 className="mb-16 text-5xl md:text-6xl text-neutral-200 flex flex-col self-center">
        <span className="text-pool-500">Welcome</span>
        <span>to Thought</span>
        <span>Experiment</span>
        <span>Explorer.</span>
      </h2>
      {/* Welcome buttons */}
      {!choiceText && (
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16">
          <button className="pool-button" onClick={() => choiceHandler("what")}>
            {whatText}
          </button>
          <button
            className="clean-button"
            onClick={() => choiceHandler("extra")}
          >
            {extraText}
          </button>
          <Link href="/experiments" className="black-button">
            GET TO THE EXPERIMENTS!
          </Link>
        </div>
      )}
      {/* Display of selected choice */}
      {choiceText && <ChoiceText choiceText={choiceText} moreSpace={false} />}
    </section>
  );
};

export default Welcome;
