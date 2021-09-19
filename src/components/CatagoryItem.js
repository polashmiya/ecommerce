import React from "react";

const CatagoryItem = ({ item }) => {
  return (
    <div className="category">
      <img src={item.img} alt="" />
      <div className="categoryInfo">
        <h1>{item.title}</h1>
        <button>shop now</button>
      </div>
    </div>
  );
};

export default CatagoryItem;
