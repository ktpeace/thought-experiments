import { useEffect, useRef } from "react";

const ChoiceText = ({
  choiceText,
  moreSpace = true,
}: {
  choiceText: string;
  moreSpace?: boolean;
}) => {
  const choiceRef = useRef<HTMLDivElement>(null);
  const OFFSET = 84;

  // Scroll to put choiceText at top on render
  useEffect(() => {
    if (choiceText && choiceRef.current) {
      // Account for navbar
      const elementTop = choiceRef.current.getBoundingClientRect().top;
      const offsetPosition = elementTop + window.scrollY - OFFSET;
      // Scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [choiceText]);

  return (
    <div
      ref={choiceRef}
      className={`relative w-full ${
        moreSpace ? "my-8" : "my-0"
      } py-2 px-4 flex justify-center text-2xl italic rounded bg-pool-500/[.15]`}
    >
      {choiceText}
    </div>
  );
};

export default ChoiceText;
