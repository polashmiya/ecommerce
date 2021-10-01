import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navContainer">
      <div className="navWrapper">
        <div className="navLeft">
          <Link to="/" className="links">
            <h1 className="logo">Polash.</h1>
          </Link>
          {/* <span className="language">UN</span> */}
          <div className="searchContainer">
            <input type="text" placeholder="Search" />
            <Search className="searchIcon" />
          </div>
        </div>
        <div className="navCenter"></div>
        <div className="navRight">
          <Link to="/products" className="links">
            <div className="menuItem">Products</div>
          </Link>
          <Link to="/register" className="links">
            <div className="menuItem">Register</div>
          </Link>
          <Link to="/login" className="links">
            <div className="menuItem">Login</div>
          </Link>
          <Link to="/cart" className="links">
            <div className="menuItem">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
