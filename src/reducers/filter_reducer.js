import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      // importent to spread!!! bs "all_products" and "filtered_products" are pointing to the same place. And so we need to copy that data so we do it with spread operator
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
      };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
