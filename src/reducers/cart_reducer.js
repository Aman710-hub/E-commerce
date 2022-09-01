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
      // if the product is not in the cart
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          console.log("🚀 ~ tempCart ~ cartItem", cartItem);
          // if this product with this color is alredy in the cart then we juct increase amount of this item in the cart
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            // if amoun is biger then what we have in the stock
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        // if the product alredy in the cart
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
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
