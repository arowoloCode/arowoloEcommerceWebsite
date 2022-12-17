import React from "react";
import Bounce from "react-reveal/Bounce";
function ServiceCard({ Icon, title, body, bgColor }) {
  return (
    <Bounce>
      <div
        className={`${bgColor}-200 rounded-xl w-64 h-56 px-6 py-4 text-gray-800 mb-8 cursor-pointer mr-4`}
      >
        <div
          className={`rounded-full ${bgColor}-400 w-16 h-16 flex justify-center items-center mb-4 `}
        >
          <Icon className=' h-11 w-11' />
        </div>

        <h3 className='font-bold mb-2'>{title}</h3>
        <p className='text-sm text-gray-500'>{body}</p>
      </div>
    </Bounce>
  );
}

export default ServiceCard;
