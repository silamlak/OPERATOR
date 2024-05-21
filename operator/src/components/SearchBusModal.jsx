import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log("Search query:", searchQuery);
    onClose();
  };

 useEffect(() => {
   const handleClickOutside = (e) => {
     if (!e.target.closest(".modal-content")) {
       onClose();
     }
   };

   if (isOpen) {
     document.addEventListener("mousedown", handleClickOutside);
   } else {
     document.removeEventListener("mousedown", handleClickOutside);
   }

   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-start z-50 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="absolute top-0 bg-white w-full max-w-lg mt-16 p-4 rounded-lg shadow-lg modal-content">
        <form onSubmit={handleSubmit}>
          <div className="w-full border-b rounded-md focus:outline-none flex items-center">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border-none rounded-md focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full h-[150px] rounded-md focus:outline-none">
            <div className="flex items-center justify-center h-full">
              <p className="text-[15px] text-slate-400 font-serif">
                Your search will be display here
              </p>
            </div>
          </div>
          <div className="w-full border-t rounded-md focus:outline-none"></div>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
