import { act } from "react-dom/test-utils";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case GET_PRODUCTS_SUCCESS:
      // The filter() method creates a new array filled with elements that pass a test provided by a function.
      const feat_products = action.payload.filter((product) => {
        return product.featured === true;
      });
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products: feat_products,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: true, products_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
