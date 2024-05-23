import React, { useEffect, useState } from "react";
import BusListComponent from "../components/bus/BusListComponent";
import SearchBusModal from "../components/bus/SearchBusModal";
import SearchButtonBus from "../components/buttons/SearchButtonBus";
import DropdownMenuBus from "../components/bus/DropdownMenuBus";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../components/Spinner";
import ReactPaginate from "react-paginate";

const BusLists = () => {
  const [buses, setBuses] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const closeSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const fetchBuses = async (page) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/operator/list/bus?page=${page}`
      );
      setTotalPage(res.data.totalPages);
      return res.data.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryKey: ["all_bus", currentPage],
    queryFn: () => fetchBuses(currentPage),
    keepPreviousData: true, // Keeps the previous data while fetching new data
    onSuccess: (data) => {
      console.log("Fetched data: ", data);
      setBuses(data); // Update buses state with fetched data
    },
  });

  useEffect(() => {
    document.body.style.overflow = isSearchModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchModalOpen]);

  // This effect ensures that the buses state is updated whenever the data changes
  useEffect(() => {
    if (isSuccess && data) {
      // console.log("Data updated, setting buses state");
      setBuses(data); // This should trigger a re-render
    }
  }, [isSuccess, data]);

  // Log the buses state to debug the issue
  useEffect(() => {
    // console.log("Buses state updated: ", buses);
  }, [buses]);

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected + 1); // Update currentPage on page change
  };

  return (
    <div>
      <header className="my-4">
        <h1 className="text-4xl pb-4 text-gray-900 dark:text-gray-100 font-semibold">
          Bus List
        </h1>
        <p className="text-lg pb-4 text-gray-700 dark:text-gray-300 mt-2 leading-[30px] tracking-wider">
          On this page, you will find a list of buses that are currently in
          service, undergoing maintenance, and more. Browse through the
          available options to find the bus that suits your needs.
        </p>
      </header>

      <div className="flex items-center justify-between my-6">
        <DropdownMenuBus />
        <SearchBusModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
        <div className="flex items-center justify-center">
          <SearchButtonBus fn={closeSearchModal} />
        </div>
      </div>
      {isLoading && <Spinner />}
      {isError && (
        <p className="text-gray-700 dark:text-gray-300 text-center my-4">
          {error.message}
        </p>
      )}
      {buses?.length > 0 && (
        <div>
          <BusListComponent list={buses} setb={setBuses} />
          {/* Ensure BusListComponent correctly uses the buses prop */}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPage}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-end items-center gap-4 py-4"
            pageClassName="page-item"
            pageLinkClassName="page-link text-gray-700 dark:text-gray-300 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
            previousClassName={`page-item ${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
            previousLinkClassName="page-link text-gray-700 dark:text-gray-300 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
            nextClassName={`page-item ${
              currentPage === totalPage
                ? "pointer-events-none opacity-50"
                : ""
            }`}
            nextLinkClassName="page-link text-gray-700 dark:text-gray-300 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
            breakClassName="page-item"
            breakLinkClassName="page-link text-gray-700 dark:text-gray-300 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
            activeClassName="active"
            activeLinkClassName="text-white bg-lime-600 dark:bg-lime-600 border border-lime-600 dark:border-lime-600"
          />
        </div>
      )}
    </div>
  );
};

export default BusLists;
