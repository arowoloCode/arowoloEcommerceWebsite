import React from "react";
import { CartConsumer } from "../context";
import CartItem from "./CartItem";
import { usePaystackPayment } from "react-paystack";

function Cart() {
  const [state] = CartConsumer();
  const sumTotal = state.cartItems.reduce((a, b) => a + b.price, 0);
  const config = {
    reference: new Date().getTime().toString(),
    email: "adetayoomotomiwa99@gmail.com",
    amount: Math.ceil(sumTotal * 100 * 410.16),
    publicKey: "pk_test_b1b82484108dfaa600331b6d067485ea288c7e82",
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const handlePayment = usePaystackPayment(config);

  return (
    <div className='h-screen'>
      <div className='w-4/5 lg:w-4/6 flex  flex-col  mx-auto  p-3  mb-6'>
        <h3 className='text-gray-800 text-xl mb-3 font-semibold'>
          Cart ({state.cartIndex} Items)
        </h3>

        <table>
          <tr className=' mb-4  flex justify-between text-sm text-gray-600'>
            <th className='flex'> ITEM </th>
            <th>QUANTITY</th>
            <th>UNIT PRICE</th>
            <th>NET PRICE</th>
          </tr>
          {state.cartItems.map((item) => (
            <CartItem
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              price={item.price}
            />
          ))}
        </table>

        {state.cartItems.length > 0 && (
          <div className='flex justify-between items-center mt-3'>
            <button
              className='py-2 px-4 rounded-sm bg-yellow-500 hover:bg-yellow-600 text-gray-50 text-sm'
              onClick={() => handlePayment(onSuccess, onClose)}
            >
              Check Out
            </button>
            <h4 className='text-gray-700'>
              Total: <span className='font-bold'>${sumTotal}</span>
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
