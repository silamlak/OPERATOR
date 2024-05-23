import React, { useState } from 'react'

const SearchButtonBus = ({fn}) => {
      const [query, setQuery] = useState("");
  return (
    <div className="relative w-full max-w-md">
      <button
        onClick={fn}
        type="text"
        className="w-full py-[2px] pl-10 pr-10 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
        value={query}
        // onClick={() => toggleSearchPopup(true)}
      >
        Search...
      </button>
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        // onClick={() => toggleSearchPopup(true)}
      >
        <circle cx="11" cy="11" r="8" stroke-width="2" fill="none" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65L21 21z"
        ></path>
      </svg>
    </div>
  );
}

export default SearchButtonBus
