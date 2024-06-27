import React, { useState, useContext } from "react";
import CoffeeCard from "./CoffeeCard";
import { OrderContext } from "./Context";

const CoffeeSection = () => {
  const { items } = useContext(OrderContext);
  return (
    <div className="coffeeSection">
      {items.map((el) => (
        <CoffeeCard key={el.id} title={el.title} prices={el.prices} />
      ))}
    </div>
  );
};

export default CoffeeSection;
