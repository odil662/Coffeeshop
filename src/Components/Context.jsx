import React, { useState, createContext, useCallback } from "react";

export const OrderContext = createContext();

const items = [
  {
    id: 1,
    title: "Латте",
    prices: [
      { size: 200, price: 220 },
      { size: 300, price: 250 },
      { size: 400, price: 280 },
    ],
  },
  {
    id: 2,
    title: "Капучино",
    prices: [
      { size: 200, price: 230 },
      { size: 300, price: 260 },
      { size: 400, price: 300 },
    ],
  },
  {
    id: 3,
    title: "Флэт уайт",
    prices: [
      { size: 200, price: 240 },
      { size: 300, price: 270 },
      { size: 400, price: 310 },
    ],
  },
];

const syrops = [
  { title: "Без сиропа", price: 0 },
  { title: "Карамельный", price: 30 },
  { title: "Ореховый", price: 40 },
];

const Context = ({ children }) => {
  const [orderList, setOrderList] = useState([]);

  const increaseCount = (sameCoffee) => {
    setOrderList(
      orderList.map((el) =>
        el.id === sameCoffee.id ? { ...el, count: el.count + 1 } : el
      )
    );
  };

  const decreaseCount = (sameCoffee) => {
    sameCoffee.count > 1
      ? setOrderList(
          orderList.map((el) =>
            el.id === sameCoffee.id ? { ...el, count: el.count - 1 } : el
          )
        )
      : setOrderList(orderList.filter((el) => el.id !== sameCoffee.id));
  };

  const getSum = (syrop, title, size) => {
    const syropPrice = syrops.find((el) => el.title === syrop).price;
    const sizePrice = items
      .find((el) => el.title === title)
      .prices.find((el) => el.size === size).price;
    return syropPrice + sizePrice;
  };

  const value = {
    items,
    syrops,
    orderList,
    setOrderList,
    increaseCount,
    decreaseCount,
    getSum,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default Context;
