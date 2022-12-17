import { Skeleton } from "@mui/material";
import React from "react";

function Placeholder() {
  return (
    <div className='w-52 h-52 border shadow-sm rounded mb-3 mr-3 p-2 hover:shadow-md cursor-pointer bg-white'>
      <Skeleton variant='rectangular' height={100} />
      <Skeleton variant='text' />
      <Skeleton variant='text' width={100} />
      <Skeleton variant='text' width={30} />
    </div>
  );
}

export default Placeholder;
