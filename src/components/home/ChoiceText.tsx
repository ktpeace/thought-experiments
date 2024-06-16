import { useEffect, useRef } from "react";

const ChoiceText = ({
  choiceText,
  moreSpace = true,
}: {
  choiceText: string;
  moreSpace?: boolean;
}) => {
  const choiceRef = useRef<HTMLDivElement>(null);

  // Scroll to put choiceText at top on render
  const handleScroll = () => {
    if (choiceText && choiceRef.current) {
      const elementTop = choiceRef.current.getBoundingClientRect().top;
      const offsetPosition = elementTop + window.scrollY - 84; // Using 'window.scrollY' instead of 'window.pageYOffset'

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll to put choiceText at top on render, accounting for the navbar
  useEffect(() => {
    handleScroll();
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
