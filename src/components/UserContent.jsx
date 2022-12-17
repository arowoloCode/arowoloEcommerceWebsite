import React from "react";
import UserAvatar from "../images/person.jpg";
import { handleLogOut } from "../utils";

function UserContent({ user }) {
  return (
    <div>
      <div className='relative'>
        <div className=' bg-banner h-36 bg-cover bg-no-repeat bg-left'></div>
        <div className='flex justify-between items-center'>
          <div className='absolute top-24 left-8  '>
            <img
              src={UserAvatar}
              alt='User'
              className='w-24 h-24 bg-blue-100 border-2 object-cover'
              style={{ borderRadius: "50%" }}
            />
            <h4 className='text-gray-200'>
              {user.lastname} {user.firstname}
            </h4>
            <p className='font-light text-gray-500 text-sm'>{user.email}</p>
            <small>Account type: {user.userAccount}</small>
          </div>
          <div className='absolute top-40 right-8'>
            <button
              className='hover:bg-red-500 transition bg-red-600 p-2 rounded text-sm w-32'
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserContent;
