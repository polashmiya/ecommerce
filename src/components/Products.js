import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";
const Products = () => {
  return (
    <section className="products">
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Products;
