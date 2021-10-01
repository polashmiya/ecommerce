import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
const Register = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="registerContainer">
        <div className="registerWrapper">
          <h1 className="allTitle">Create An Account</h1>
          <form action="">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <span className="agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY.</b> Already SignUp?
              <Link to="/login" className="links" style={{ color: "teal" }}>
                Login
              </Link>
            </span>
            <button className="createBtn">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
