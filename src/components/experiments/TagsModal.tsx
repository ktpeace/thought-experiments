import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const TagsModal = ({
  tags,
  setIsOpen,
}: {
  tags: string[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // Function to close modal
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div
      id="info-popup"
      tabIndex={-1}
      className="fixed inset-0 mx-4 flex items-center justify-center overflow-y-auto overflow-x-hidden z-50"
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-75"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative p-4 max-w-lg h-auto bg-white rounded-lg shadow dark:bg-gray-800 z-60 border border-gray-700">
        <XMarkIcon
          className="absolute top-2 right-2 size-6 text-gray-500 dark:text-gray-400 betterhover:hover:bg-dusky-200 dark:betterhover:hover:bg-dusky-700 p-1 rounded cursor-pointer"
          onClick={handleClose}
        />
        <div className="mb-4 p-4 text-sm font-light text-gray-700 dark:text-gray-400">
          {/* Header */}
          <h2 className="mb-3 text-2xl text-gray-900 dark:text-white">Tags</h2>
          <p>Click on a tag to view all experiments filtered by that tag.</p>
          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <Link
                key={index}
                href={`/experiments?pageSize=30&pageNumber=1&tags=${tag}`}
                onClick={handleClose}
                className="py-[2px] px-[5px] text-xs whitespace-nowrap rounded text-white dark:text-neutral-200 bg-pool-600 dark:bg-pool-900"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsModal;
