import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const ProductList = () => {
  return (
    <div className="listContainer">
      <Announcement />
      <Navbar />
      <h1 className="allTitle">All Products</h1>
      <div className="filterContainer">
        <div className="filter">
          <span>Filter Products:</span>
          <select name="" id="listSelect">
            <option value="" disabled selected>
              Color
            </option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select name="" id="listSelect">
            <option value="" disabled selected>
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="filter">
          <span>Sort Products:</span>
          <select name="" id="listSelect">
            <option value="" selected>
              Newest
            </option>
            <option value="">Highest Price</option>
            <option value="">Lowest Price</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
