import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartConsumer } from "../context";

const Header = () => {
  const [state] = CartConsumer();

  return (
    <div className='text-black py-2 px-4 shadow-md h-16 flex justify-center items-center mb-5 bg-white'>
      <div className='w-4/5 mx-auto flex justify-between items-center '>
        <div className='font-mono font-medium'>
          <Link to='/'>
            <h3 className='text-3xl text-yellow-500 font-semibold'>Lumia</h3>
          </Link>
        </div>
        <div className='hidden md:block flex-1 ml-24 w-1/5 '>
          <form action='' className='flex'>
            <div className='flex p-2 border rounded  items-center w-4/5'>
              <AiOutlineSearch className='mx-2 text-gray-700' />
              <input
                type='text'
                name=''
                id=''
                placeholder='Search products, brands and categories'
                className='outline-none flex-1'
              />
            </div>
            <button className='ml-3 px-4 py-1 bg-yellow-500 hover:bg-yellow-600 text-gray-50 rounded shadow-md text-sm'>
              SEARCH
            </button>
          </form>
        </div>
        <div className='flex'>
          <div className='flex justify-center items-center mr-3 cursor-pointer'>
            <AiOutlineUser />
            <span className='mx-1'>Account</span>
            <MdKeyboardArrowDown />
          </div>
          <Link
            to='/cart'
            className='flex justify-center items-center mr-3 cursor-pointer relative hover:text-yellow-500'
          >
            <HiOutlineShoppingCart />
            <span className='ml-1'>Cart</span>
            {state.cartIndex > 0 && (
              <span
                className='w-4 h-4 p-2 flex justify-center items-center text-xs absolute -top-2 -left-1 bg-yellow-500 text-white'
                style={{ borderRadius: "50%" }}
              >
                {state.cartIndex}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
