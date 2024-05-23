import React, { useEffect, useRef, useState } from "react";
import { options } from "../../service";

const DropdownMenuBus = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
    const dropdownRef = useRef(null);
  const handleOptionClick = (index) => {
    setActiveIndex(index);
    setDropdownOpen(false);
  };

      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setDropdownOpen(false);
        }
      };

          useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, []);

  return (
    <div className="relative inline-block max-w-[250px]" ref={dropdownRef}>
      <div>
        <button
          className="inline-flex justify-between items-center max-w-[200px] px-4 py-1 rounded-md bg-lime-600 text-white font-medium focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="whitespace-nowrap">
            {options[activeIndex].label}
          </span>
          <svg
            className={`ml-2 w-5 h-5 transition-transform transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      {dropdownOpen && (
        <div className="absolute z-10 mt-1 w-auto bg-white dark:bg-slate-950 shadow-xl rounded-md">
          {options.map((option, index) => (
            <div
              key={option.value}
              className={`px-4 py-2 cursor-pointer transition-colors text-gray-700 dark:text-gray-300 whitespace-nowrap${
                index === activeIndex ? "bg-blue-200" : "text-blue-600"
              } hover:bg-gray-100 dark:hover:bg-gray-800`}
              onClick={() => handleOptionClick(index)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuBus;
