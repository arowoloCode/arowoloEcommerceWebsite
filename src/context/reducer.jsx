export const initialState = {
  cartIndex: 0,
  cartItems: [],
};

export const actionTypes = { SET_CART_ITEM: "SET_CART_ITEM" };

const reducer = (currentState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_CART_ITEM:
      return {
        cartIndex: currentState.cartIndex + 1,
        cartItems: [...currentState.cartItems, action.payload],
      };

    default:
      return currentState;
  }
};

export default reducer;
