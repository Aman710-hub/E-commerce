import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

// GET LOCALSTORAGE
const getLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 488,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ADD TO CART
  const addToCart = (id, color, amount, single_product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color, amount, single_product },
    });
  };

  // remove items
  const removeItem = (id) => {};
  // toggle amount
  const toggleAmount = (id, value) => {};
  // clear cart
  const clearCart = () => {};

  // LOCAL STORAGE
  useEffect(() => {
    // The JSON.stringify() method converts JavaScript objects into strings.
    // When sending data to a web server the data has to be a string.
    localStorage.setItem("cart", JSON.stringify(state.cart));
  });
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
