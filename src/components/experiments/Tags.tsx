"use client";
import { useEffect, useRef, useState } from "react";
import TagsModal from "./TagsModal";

const Tags = ({ tags }: { tags: string[] }) => {
  const [showTags, setShowTags] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const tagsContainerRef = useRef<HTMLDivElement>(null);

  // If tags overflow, display "more"
  useEffect(() => {
    const container = tagsContainerRef.current;
    if (!container) return;

    // Recalculate on window resize
    const observer = new ResizeObserver(() => {
      if (container) {
        setIsOverflow(container.scrollWidth > container.clientWidth);
      }
    });

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [tags]);

  const handleMoreTagsClick = () => {
    setShowTags(true);
  };

  return (
    <>
      <div className="w-full mb-4 flex flex-col justify-center items-center">
        <div className="w-full mt-2 flex gap-1">
          <div
            className={`w-full flex flex-nowrap justify-start gap-1 overflow-hidden ${
              isOverflow ? "flex-grow" : "justify-center"
            }`}
            ref={tagsContainerRef}
          >
            {tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="py-[2px] px-[5px] text-xs whitespace-nowrap rounded text-white dark:text-neutral-200 bg-pool-600 dark:bg-pool-900"
                >
                  {tag}
                </div>
              );
            })}
          </div>
          {isOverflow && (
            <div
              className="flex-shrink-0 py-[2px] px-[5px] text-xs rounded text-pool-600 hover:text-pool-300 whitespace-nowrap cursor-pointer font-bold"
              onClick={handleMoreTagsClick}
            >
              . . .
            </div>
          )}
        </div>
      </div>
      {showTags && <TagsModal setIsOpen={setShowTags} tags={tags} />}
    </>
  );
};

export default Tags;
