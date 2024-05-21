import React, { useEffect, useRef, useState } from "react";
import BusListComponent from "../components/BusListComponent";
import { busData } from "../service";
import SearchBusModal from "../components/SearchBusModal";

const BusLists = () => {
  const [buses, setBuses] = useState(busData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  
  const handleClear = () => {
    setQuery("");
  };

  const handleDelete = (id) => {
    const updatedBuses = buses.filter((bus) => bus._id !== id);
    setBuses(updatedBuses);
  };

  const handleEdit = (id) => {
    // Handle edit logic here
  };
    const options = [
      { label: "All", value: 0 },
      { label: "On-Service", value: 1 },
      { label: "On-Maintenance", value: 2 },
    ];

  const handleOptionClick = (index) => {
    setActiveIndex(index);
    setDropdownOpen(false);
  };
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);


     useEffect(() => {
       document.body.style.overflow = isSearchModalOpen ? "hidden" : "auto";
       return () => {
         document.body.style.overflow = "auto";
       };
     }, [isSearchModalOpen]);

  return (
    <div className="">
      <header className="my-4">
        <h1 className="text-4xl font-bold text-gray-800">Bus List</h1>
        <p className="text-lg text-gray-600 mt-2">
          On this page, you will find a list of buses that are currently in
          service, undergoing maintenance, and more. Browse through the
          available options to find the bus that suits your needs.
        </p>
      </header>
      <div className="flex items-center justify-between my-6">
        <div className="relative inline-block max-w-[250px]" ref={dropdownRef}>
          <div>
            <button
              className="inline-flex justify-between items-center max-w-[200px] px-4 py-2 rounded-lg bg-gray-200 text-gray-600 focus:outline-none"
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
            <div className="absolute z-10 mt-1 w-auto bg-white shadow-lg rounded-md">
              {options.map((option, index) => (
                <div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer transition-colors whitespace-nowrap${
                    index === activeIndex ? "bg-gray-200" : ""
                  } hover:bg-gray-100`}
                  onClick={() => handleOptionClick(index)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <SearchBusModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
        <div className="flex items-center justify-center bg-gray-100">
          <div className="relative w-full max-w-md">
            <button
              onClick={openSearchModal}
              type="text"
              className="w-full py-[2px] pl-10 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
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
        </div>
      </div>

      <BusListComponent
        list={buses}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default BusLists;
