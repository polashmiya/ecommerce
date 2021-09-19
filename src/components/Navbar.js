import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
const Navbar = () => {
  return (
    <nav className="navContainer">
      <div className="navWrapper">
        <div className="navLeft">
          <span className="language">UN</span>
          <div className="searchContainer">
            <input type="text" />
            <Search className="searchIcon" />
          </div>
        </div>
        <div className="navCenter">
          <h1 className="logo">Polash.</h1>
        </div>
        <div className="navRight">
          <div className="menuItem">Register</div>
          <div className="menuItem">Login</div>
          <div className="menuItem">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
