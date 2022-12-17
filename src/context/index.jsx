import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const CartProvider = ({ reducer, initialState, children }) => (
  <CartContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CartContext.Provider>
);

export const CartConsumer = () => useContext(CartContext);

export default CartProvider;
