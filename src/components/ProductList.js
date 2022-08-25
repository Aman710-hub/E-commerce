import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();

  // NO PRODUCT
  if (filtered_products < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  // LIST VIEW
  if (grid_view === false) {
    return <ListView filtered_products={filtered_products} />;
  }
  return <GridView filtered_products={filtered_products}>fffff</GridView>;
};

export default ProductList;
