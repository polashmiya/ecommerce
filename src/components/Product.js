import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Product = ({ item }) => {
  return (
    <>
      <div className="product">
        <div className="circle"></div>
        <img src={item.img} alt="" />
        <div className="productInfo">
          <div className="icon">
            <ShoppingCartOutlined />
          </div>
          <div className="icon">
            <SearchOutlined />
          </div>
          <div className="icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
      <p>Price: 3200 BDT</p>
    </>
  );
};

export default Product;
