import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import Spinner from "./Spinner";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HalfRating from "./Rating";
import Products from "./Products";
import { CartConsumer } from "../context";
import { actionTypes } from "../context/reducer";
import CartAlert from "./CartAlert";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [loader2, setLoader2] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [open, setOpen] = useState({
    status: false,
    severity: "success",
    message: "",
  });

  const { id, category } = useParams();
  const { pathname } = useLocation();
  const [state, dispatch] = CartConsumer();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    const currentCart = state.cartItems.find((item) => item.id === product.id);

    if (currentCart) {
      setOpen({
        status: true,
        message: `${product.title} already in cart`,
        severity: "error",
      });
      return;
    }

    dispatch({
      type: actionTypes.SET_CART_ITEM,
      payload: product,
    });

    setOpen({
      ...open,
      status: true,
      message: `${product.title} added to cart`,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err.message));
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setSimilarProducts(res.data);
        setLoader2(false);
      })
      .catch((err) => console.error(err.message));
  }, [category]);

  return (
    <div className='mt-10'>
      <CartAlert open={open} handleClose={handleClose} />
      <div className='w-4/5 lg:w-3/5 flex justify-center flex-col md:flex-row mx-auto bg-white p-3 rounded-md shadow mb-6'>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className='w-72 h-72 mb-8 md:mb-0'>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-full object-contain cursor-pointer '
              />
            </div>
            <div className='md:ml-14 w-full md:w-3/6'>
              <h2 className='font-bold mb-3 text-2xl'>{product.title}</h2>
              <p className='text-sm mb-2'>{product.description}</p>
              <HalfRating defaultValue={product.rating.rate} />
              <p className='mt-2 font-bold text-xl'>${product.price}</p>
              <button
                className='mt-4 py-2 px-3 flex justify-between items-center text-white rounded w-full bg-yellow-600 hover:bg-yellow-700'
                onClick={handleClick}
              >
                <AiOutlineShoppingCart />{" "}
                <span className='flex-1 text-sm font-semibold'>
                  ADD TO CART
                </span>
              </button>
            </div>
          </>
        )}
      </div>
      <div className='w-4/5 lg:w-3/5 flex  flex-col  mx-auto p-3'>
        <h3 className='font-semibold text-xl px-4 '>Similar Products</h3>
        <Products
          skeletonLength={4}
          products={similarProducts}
          loading={loader2}
          id={id}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
