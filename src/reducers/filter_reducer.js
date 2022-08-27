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
      console.table(action.payload);
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      console.log(state);
      // importent to spread!!! bs "all_products" and "filtered_products" are pointing to the same place. And so we need to copy that data so we do it with spread operator
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { filtered_products, sort } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((current, next) => {
          return current.price - next.price;
        });
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((current, next) => {
          return next.price - current.price;
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((current, next) => {
          return next.name.localeCompare(current.name);
        });
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((current, next) => {
          return current.name.localeCompare(next.name);
        });
      }

      return { ...state, filtered_products: tempProducts };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
