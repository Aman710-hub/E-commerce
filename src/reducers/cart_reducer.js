import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, single_product, color, amount } = action.payload;
      const tempItem = state.cart.find((item) => item.id === id + color);
      if (tempItem) {
      }
      const newItem = {
        // this is unick id
        id: id + color,
        name: single_product.name,
        color: color,
        amount: amount,
        image: single_product.images[0].url,
        price: single_product.price,
        max: single_product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
