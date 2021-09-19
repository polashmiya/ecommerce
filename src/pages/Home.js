import React from "react";
import Catagories from "../components/Catagories";
import Products from "../components/Products";
import Announcement from "./../components/Announcement";
import Navbar from "./../components/Navbar";
import Slide from "./../components/Slide";
import Newsletter from "./../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slide />
      <Catagories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
