import { Send } from "@material-ui/icons";
import React from "react";

const Newsletter = () => {
  return (
    <div className="newSletter">
      <h1>Newsletter</h1>
      <div className="desc">Get timely updats from your favorite products</div>
      <div className="inputContainer">
        <input type="email" placeholder="Your Email" />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
