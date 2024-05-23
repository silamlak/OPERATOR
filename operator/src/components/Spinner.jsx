import React from 'react'
import { BarLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className='w-full flex justify-center my-4'>
      <BarLoader color="#36d7b7" />
    </div>
  );
}

export default Spinner
