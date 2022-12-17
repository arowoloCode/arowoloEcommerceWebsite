import React from "react";
import Bounce from "react-reveal/Bounce";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product({ title, imageURL, price, category, id }) {
  return (
    <Bounce>
      <div className='w-52 h-52 border shadow-sm rounded mb-3 mr-3 p-2 text-gray-800 transition-all hover:shadow-md cursor-pointer bg-white'>
        <div className='w-full h-24 '>
          <img
            src={imageURL}
            alt={category}
            className='w-full object-contain h-full cursor-pointer'
          />
        </div>
        <h4
          className='text-xs  my-2'
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h4>
        <p>
          ${price}
          <span className='ml-4 text-xs p-1 bg-yellow-200 text-white rounded-sm'>
            {category}
          </span>
        </p>
        <Link
          to={`/product/${category}/${id}`}
          className='mt-2 p-2 inline-block w-8 bg-yellow-600 rounded text-white'
        >
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </Bounce>
  );
}

export default Product;
