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
    case REMOVE_CART_ITEM:
      return { ...state, cart: action.payload };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case TOGGLE_CART_ITEM_AMOUNT:
      const { id1, value } = action.payload;
      const tempItem1 = state.cart.map((item) => {
        if (item.id === id1) {
          if (value === "inc") {
            let newAmount1 = item.amount + 1;
            if (newAmount1 > item.max) {
              newAmount1 = item.max;
            }
            return { ...item, amount: newAmount1 };
          }
          if (value === "dec") {
            let newAmount1 = item.amount - 1;
            if (newAmount1 < 1) {
              newAmount1 = 1;
            }
            return { ...item, amount: newAmount1 };
          }
        } else {
          return item;
        }
      });

      return { ...state, cart: tempItem1 };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;

// const { id1, value } = action.payload;
// const tempItem1 = state.cart.map((item) => {
//   if (item.id === id1) {
//     if (value === "inc") {
//       let newAmount = item.amount + 1;
//       console.log("🚀 ~ tempItem1 ~ newAmount", newAmount);
//       if (newAmount > item.max) {
//         newAmount = item.max;
//       }
//       return { ...state, amount: newAmount };
//     }
//     if (value === "dec") {
//       let newAmount = item.amount - 1;
//       if (newAmount < 1) {
//         newAmount = 1;
//       }
//       return { ...state, amount: newAmount };
//     }
//   } else {
//     return item;
//   }
//   return { ...state, cart: tempItem1 };
// });
