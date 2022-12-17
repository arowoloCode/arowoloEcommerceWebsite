import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartProvider from "./context";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider reducer={reducer} initialState={initialState}>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
