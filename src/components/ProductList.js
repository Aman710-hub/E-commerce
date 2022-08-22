import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products } = useFilterContext();
  console.log("🚀 ~ ProductList ~ filtered_products", filtered_products);
  return <GridView filtered_products={filtered_products}>fffff</GridView>;
};

export default ProductList;
