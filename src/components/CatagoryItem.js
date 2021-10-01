import React from "react";
import { Link } from "react-router-dom";
const CatagoryItem = ({ item }) => {
  return (
    <div className="category">
      <img src={item.img} alt="" />
      <div className="categoryInfo">
        <h1>{item.title}</h1>
        <Link to="/products" className="links">
          <button>shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default CatagoryItem;
