import {
  FaTrashAlt,
  FaEdit,
  FaSort,
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
} from "react-icons/fa";
import dayjs from "dayjs";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useState } from "react";

const BusListComponent = ({ list,setb, onDelete, onEdit }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortBy = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedList = [...list].sort((a, b) => {
      if (key === "busNumber" || key === "registered") {
        if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
        if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setb(sortedList);
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <FaSortAlphaDown className="inline-block ml-1" />
      ) : (
        <FaSortAlphaDownAlt className="inline-block ml-1" />
      );
    }
    return <FaSort className="inline-block ml-1" />;
  };

  return (
    <div className="md:max-w-full sm:max-w-[430px] max-w-[300px] zz:max-w-full overflow-x-auto mx-auto">
      <table className="min-w-full divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => sortBy("busNumber")}
            >
              Bus Number
              {renderSortIcon("busNumber")}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Capacity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Model
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => sortBy("registered")}
            >
              Registered
              {renderSortIcon("registered")}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Bus Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {list?.map((bus) => (
            <tr key={bus._id}>
              <td className="px-6 py-4 text-gray-900 dark:text-gray-100 whitespace-nowrap">
                {bus.busNumber}
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-gray-100 whitespace-nowrap">
                {bus.capacity}
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-gray-100 whitespace-nowrap">
                {bus.model}
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-gray-100 whitespace-nowrap">
                {dayjs(bus.registerd).format("MMMM D, YYYY")}
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-gray-100 whitespace-nowrap">
                {bus.bus_status}
              </td>
              <td className="px-6 py-4 flex item-center gap-1 whitespace-nowrap">
                <button
                  onClick={() => onDelete(bus._id)}
                  className="text-red-600 hover:text-red-900 mr-2 text-xl"
                >
                  <AiOutlineDelete />
                </button>
                <button
                  onClick={() => onEdit(bus._id)}
                  className="text-blue-600 hover:text-blue-900 text-lg"
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusListComponent;
