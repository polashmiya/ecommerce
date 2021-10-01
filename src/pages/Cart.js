import React from "react";
import Navbar from "./../components/Navbar";
import Announcement from "./../components/Announcement";
import Footer from "./../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="cartContainer">
      <Announcement />
      <Navbar />
      <div className="cartWrapper">
        <h1>Your Cart </h1>
        <div className="cartTop">
          <Link to="/products" className="links">
            <button className="shoppingBtn">Continue Shopping</button>
          </Link>
          <div className="topTexts">
            <span className="topText">Shopping Cart (3)</span>
            <span className="topText">Your Wishlist (0)</span>
          </div>
          <button className="checkOutBtn">Check Out</button>
        </div>
        <div className="cartBottom">
          <div className="cartInfo">
            <div className="cartProduct">
              <div className="cartProductDetail">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="cartDetails">
                  <span className="cartProductName">
                    <b>Product : </b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cartProductId">
                    <b>ID : </b> JESSIE THUNDER SHOES
                  </span>
                  <div className="cartProductColor">
                    <b>Color</b> : Black
                  </div>
                  <span className="cartProductSize">
                    <b>SIze :</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cartPriceDetail">
                <div className="cartAmountContainer">
                  <Add />
                  <div className="cartAmount">2</div>
                  <Remove />
                </div>
                <div className="cartPrice">BDT 200</div>
              </div>
            </div>
            <hr />
            <div className="cartProduct">
              <div className="cartProductDetail">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="cartDetails">
                  <span className="cartProductName">
                    <b>Product : </b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cartProductId">
                    <b>ID : </b> JESSIE THUNDER SHOES
                  </span>
                  <div className="cartProductColor">
                    <b>Color</b> : Gray
                  </div>
                  <span className="cartProductSize">
                    <b>SIze :</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cartPriceDetail">
                <div className="cartAmountContainer">
                  <Add />
                  <div className="cartAmount">2</div>
                  <Remove />
                </div>
                <div className="cartPrice">BDT 200</div>
              </div>
            </div>
          </div>
          <div className="cartSummary">
            <h1>ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">SubTotal</span>
              <span className="summaryItemPrice">BDT 2500</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Estimated Shipping</span>
              <span className="summaryItemPrice">BDT 2500</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">BDT 2500</span>
            </div>
            <div className="summaryItem total ">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">BDT 2500</span>
            </div>
            <div className="lastBtn">Check Out Now</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
