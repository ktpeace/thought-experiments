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
  const extraText = "Anything extra I should know before diving in?";

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
    <section className="w-full py-16 min-h-screen flex flex-col justify-between">
      <div className="h-16"></div>
      {/* Welcome text */}
      <h2 className="mb-24 text-5xl md:text-6xl text-neutral-200 flex flex-col self-center">
        <span className="text-pool-500">Welcome</span>
        <span>to Thought</span>
        <span>Experiment</span>
        <span>Explorer.</span>
      </h2>
      {/* Welcome buttons */}
      {!choiceText && (
        <div className="w-full mb-4 md:mb-0 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <button
            className={`w-72 px-4 py-1 rounded-lg bg-pool-500 text-white hover:bg-pool-600 focus:outline-none focus:ring-2 focus:ring-pool-700 focus:ring-opacity-50 text-xl font-sans`}
            onClick={() => choiceHandler("what")}
          >
            {whatText}
          </button>
          <button
            className={`w-72 px-4 py-1 rounded-lg border hover:bg-pool-600 focus:outline-none focus:ring-2 focus:ring-pool-700 focus:ring-opacity-50 text-xl font-sans`}
            onClick={() => choiceHandler("extra")}
          >
            {extraText}
          </button>
          <Link href="/experiments" className="clean-button">
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
