import React from "react";

import ItemSlider from "../Comps/ItemSlider";
import Categories from "../Comps/Categories";
import Products from "../Comps/Products";
import Footer from "../Comps/Footer";
// import Login from "./Login";

const Home = ({ user }) => {
  return (
    <div>
      <Categories />
      <ItemSlider />
      <Products />
    </div>
  );
};

export default Home;
