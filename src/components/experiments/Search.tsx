import { SetStateAction, useEffect, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface SearchProps {
  searchParams: URLSearchParams;
  buildParams: (userQuery?: string, userTags?: string[]) => string;
}

const Search: React.FC<SearchProps> = ({ searchParams, buildParams }) => {
  const router = useRouter();
  const searchString = searchParams.toString();
  const [searchText, setSearchText] = useState("");

  // Update searchText on input
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
      setQueryParams(query, tags);
    }
  };

  // If the URL params change unrelated to search field input, change search field to match
  useEffect(() => {
    const query = searchParams.get("search") || "";
    const tags = searchParams
      .getAll("tags")
      .sort()
      .map((tag: string) => `#${tag}`)
      .join(" ");
    const urlSearchText = [query, tags].filter(Boolean).join(" ");

    if (searchText !== urlSearchText) {
      setSearchText(urlSearchText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  // Function to set params on user search
  function setQueryParams(userQuery?: string, userTags?: string[]) {
    const queryParams = buildParams(userQuery, userTags);
    router.push(`/experiments?${queryParams}`);
  }

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

  // Clear search
  function handleClear() {
    setSearchText("");
    setQueryParams("", []);
  }

  return (
    <div className="w-full sm:w-72 relative flex items-center">
      <MagnifyingGlassIcon className="w-5 h-5 text-neutral-300 dark:text-gray-500 absolute left-1" />
      <input
        type="text"
        value={searchText}
        maxLength={256}
        onChange={handleSearchChange}
        onKeyDown={handleEnter}
        placeholder="search text or use # for tags"
        className="w-full pl-8 py-1 text-sm rounded border border-neutral-300 dark:border-none focus:outline-none focus:ring focus:ring-dusky-200 dark:focus:ring-dusky-300 dark:bg-dusky-400"
      />
      <XMarkIcon
        className={clsx(
          "absolute right-1 w-5 h-5 text-neutral-300 dark:text-gray-500 rounded cursor-pointer",
          searchText === "" ? "hidden" : "block"
        )}
        onClick={handleClear}
      />
    </div>
  );
};

export default Search;
