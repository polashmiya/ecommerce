import React from "react";
import { categories } from "../data";
import CatagoryItem from "./CatagoryItem";
const Catagories = () => {
  return (
    <section>
      <div className="catagories">
        {categories.map((item) => (
          <CatagoryItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Catagories;
