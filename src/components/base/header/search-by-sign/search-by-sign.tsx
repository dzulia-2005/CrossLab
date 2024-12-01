import { useEffect, useRef, useState } from "react";

const SearchBySign: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null); // Reference to the component

  const toggleSearchBox = () => {
    setSearchVisible(!searchVisible); // Toggle visibility of the search box
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={searchRef}>
      <div
        onClick={toggleSearchBox}
        className="cursor-pointer bg-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search text-muted-foreground"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      </div>

      {searchVisible && (
        <div className="absolute top-full  $ left-0 w-full  border rounded-md mt-2 z-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-40 p-2 text-lg border rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBySign;
