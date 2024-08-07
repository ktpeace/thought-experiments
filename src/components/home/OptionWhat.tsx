"use client";
import { useState } from "react";
import Link from "next/link";
import OptionExtra from "./OptionExtra";
import ChoiceText from "./ChoiceText";
import Image from "next/image";

const OptionWhat = ({ isExtraPicked }: { isExtraPicked: boolean }) => {
  const [isYes, setIsYes] = useState<boolean | null>(null);
  const [isExtra, setIsExtra] = useState(false);
  const choiceText = "Anything I should know before diving in?";

  return (
    <div className="flex flex-col gap-8">
      {/* Main text */}
      <p>Thought experiments are a kind of mind game with a lofty goal.</p>
      <p>
        They describe situations that isolate moral principles or concepts about
        important ideas like “truth.” Often, they present difficult moral
        dilemmas and ask you to make a choice.
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-16">
        <div>
          <Image
            src="/media/home/trolley-problem.jpg"
            alt="delicate drawn-style trolley car at night"
            width="1024"
            height="1024"
            className="w-80 h-80 rounded"
          />
        </div>
      </div>
      <p>
        The choices you make may surprise you, and considering an experiment may
        even change your morality.
      </p>
      <p>Scary, huh?</p>
      <p>
        But avoiding exploration, relying on the ideas absorbed from one&apos;s
        upbringing, society, and gut feeling...
      </p>
      <p>Well, my dog can do that (and a very fine dog she is).</p>
      <div className="w-full flex justify-center">
        <Image
          src="/media/home/my-dog.jpg"
          alt="happy dog"
          width="1024"
          height="1024"
          className="w-80 h-80 rounded"
        />
      </div>
      <p>
        It&apos;s better to live an examined life and{" "}
        <span>forge paths of light</span> in the dark, don&apos;t you think?
      </p>

      {/* Buttons for yes/no */}
      {isYes === null && (
        <div className="w-full my-8 flex flex-col md:flex-row justify-center items-center gap-16">
          <button className="clean-button" onClick={() => setIsYes(true)}>
            Yes
          </button>
          <button className="clean-button" onClick={() => setIsYes(false)}>
            No
          </button>
        </div>
      )}

      {isYes !== null && (
        <div className="w-full flex flex-col gap-8">
          {/* Display of selected choice for yes/no */}
          <ChoiceText choiceText={isYes ? "Yes." : "No."} />
          {/* Response to yes/no */}
          {isYes === true && <p>That&apos;s the spirit!</p>}
          {isYes === false && <p>Shucks.</p>}
          {/* Button if extra text already shown */}
          {isExtraPicked && (
            <div className="w-full flex justify-center">
              <Link href="/experiments" className="black-button">
                To the experiments!
              </Link>
            </div>
          )}
          {/* Buttons if extra text not yet shown */}
          {!isExtraPicked && !isExtra && (
            <div className="w-full my-8 flex flex-col md:flex-row justify-center items-center gap-16">
              <button className="clean-button" onClick={() => setIsExtra(true)}>
                {choiceText}
              </button>
              <Link href="/experiments" className="black-button">
                GET TO THE EXPERIMENTS!
              </Link>
            </div>
          )}
        </div>
      )}
      {isExtra && !isExtraPicked && (
        <>
          {/* Display of selected choice */}
          <ChoiceText choiceText={choiceText} />
          {/* Extra info text */}
          <OptionExtra isWhatPicked={true} />
        </>
      )}
    </div>
  );
};

export default OptionWhat;
