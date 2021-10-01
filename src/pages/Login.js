import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
const Login = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="loginContainer">
        <div className="loginWrapper">
          <h1 className="allTitle">Login</h1>
          <form action="">
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <button className="loginBtn">Login</button>
            <a href="">Do Not Remember The Password?</a>
            <Link to="/register">Create A New Account?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
