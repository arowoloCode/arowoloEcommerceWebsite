import React from "react";
import "./Spinner.scss";

function Spinner() {
  return (
    <div className='h-96 w-full flex justify-center items-center flex-col'>
      <div className='w-14 h-14 border-4 border-yellow-600 spinner'></div>
      <p className='mt-2 text-sm'>Please Wait...</p>
    </div>
  );
}

export default Spinner;
