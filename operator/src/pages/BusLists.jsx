import React, { useState } from 'react'
import BusListComponent from '../components/BusListComponent';
import { busData } from '../service';

const BusLists = () => {
      const [buses, setBuses] = useState(busData);

      const handleDelete = (id) => {
        const updatedBuses = buses.filter((bus) => bus._id !== id);
        setBuses(updatedBuses);
      };

        const handleEdit = (id) => {
          // Handle edit logic here
        };

  return (
    <div className="">
      <BusListComponent
        list={buses}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default BusLists
