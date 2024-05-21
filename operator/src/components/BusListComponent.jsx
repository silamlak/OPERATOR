import React from "react";

const BusListComponent = ({ list, onDelete, onEdit }) => {
  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-[800px] xl:max-w-[1000px] overflow-x-auto mx-auto">
      <table className="min-w-full divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bus Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Capacity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Model
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Registered
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bus Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {list.map((bus) => (
            <tr key={bus._id}>
              <td className="px-6 py-4 whitespace-nowrap">{bus.busNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{bus.capacity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{bus.model}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(bus.registered).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{bus.bus_status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onDelete(bus._id)}
                  className="text-red-600 hover:text-red-900 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => onEdit(bus._id)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  Edit
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
