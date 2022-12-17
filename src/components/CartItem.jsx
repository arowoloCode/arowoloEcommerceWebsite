import { Input } from "@mui/material";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const CartItem = ({ image, title, category, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    if (e.target.value < 1) e.target.value = 1;

    setQuantity(e.target.value);
  };

  return (
    <tr className='py-2 px-4  flex justify-between items-center bg-white rounded shadow mb-3'>
      <td className='flex'>
        <img
          src={image}
          alt={title}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
          }}
        />
        <div className='ml-4 w-96'>
          <p className='text-gray-400 text-sm'>{category}</p>
          <h5 className='text-gray-700 font-semibold '>{title}</h5>
          <button className='text-red-600 flex justify-center items-center hover:bg-red-100 p-1'>
            <MdDelete /> <span className='ml-1'>Remove</span>
          </button>
        </div>
      </td>
      <td className='w-20'>
        <Input type='number' value={quantity} onChange={handleQuantityChange} />
      </td>
      <td>${price}</td>
      <td>${price * quantity}</td>
    </tr>
  );
};

export default CartItem;
