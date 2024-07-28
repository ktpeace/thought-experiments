import { SetStateAction, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search: React.FC<{
  fetchExperiments: (
    query: string,
    tags: string[],
    shouldReset: boolean
  ) => Promise<void>;
}> = ({ fetchExperiments }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchText(e.target.value);
  };

  // Handle enter
  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Split searchText into tags and query
      const { query, tags } = parseSearchText(searchText);
      await fetchExperiments(query, tags, true);
    }
  };

  // Function to parse searchText into query and tags
  const parseSearchText = (text: string) => {
    const tags = text
      .split(" ")
      .filter((part) => part.startsWith("#"))
      .map((tag) => tag.slice(1)); // Remove the leading "#"
    const query = text
      .split(" ")
      .filter((part) => !part.startsWith("#"))
      .join(" "); // Join remaining parts into a single query string

    return { query, tags };
  };

  return (
    <div className="w-full sm:w-72 relative flex items-center">
      <MagnifyingGlassIcon className="w-5 h-5 text-neutral-300 dark:text-gray-500 absolute left-3" />
      <input
        type="text"
        value={searchText}
        maxLength={256}
        onChange={handleSearchChange}
        onKeyDown={handleEnter}
        placeholder="search text or use # for tags"
        className="w-full pl-10 py-1 text-sm rounded border border-neutral-300 dark:border-none focus:outline-none focus:ring focus:ring-dusky-200 dark:focus:ring-dusky-300 dark:bg-dusky-400"
      />
    </div>
  );
};

export default Search;
