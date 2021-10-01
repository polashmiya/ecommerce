import { Remove, Add } from "@material-ui/icons";
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
const ProductDetail = () => {
  return (
    <div className="productContainer">
      <Announcement />
      <Navbar />
      <div className="productWrapper">
        <div className="imgContainer">
          <img
            className="productImg"
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
          />
        </div>
        <div className="productInfoContainer">
          <h1>Denim Jumpsuit</h1>
          <p className="productDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span> 20 BDT </span>
          <div className="productFilterContainer">
            <div className="productFilter">
              <span>Color</span>
              <div
                className="filterColor"
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className="filterColor"
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className="filterColor"
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>
            <div className="productFilter">
              <span>Size</span>
              <select name="" id="filterSize">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </div>
          <div className="addContainer">
            <div className="amountContainer">
              <Remove className="minus" />
              <span className="amount">1</span>
              <Add className="plus" />
            </div>
            <div className="btnContainer">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetail;
