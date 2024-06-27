import React from "react";
import "./Coffeeshop.css";
import CoffeeSection from "./CoffeeSection";
import Context from "./Context";
import Cart from "./Cart";

const Coffeeshop = () => {
  return (
    <div className="page">
      <Context>
        <CoffeeSection />
        <Cart />
      </Context>
    </div>
  );
};

export default Coffeeshop;
