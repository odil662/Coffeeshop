import React, { useState, useContext } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { OrderContext } from "./Context";
import { v4 as uuidv4 } from "uuid";

const CoffeeCard = ({ title, prices }) => {
  const [syrop, setSyrop] = useState("Без сиропа");
  const [size, setSize] = useState(300);
  const [sugar, setSugar] = useState(false);
  const {
    syrops,
    orderList,
    setOrderList,
    increaseCount,
    decreaseCount,
    getSum,
  } = useContext(OrderContext);

  const sameCoffee = orderList.find((el) => {
    return (
      el.title === title &&
      el.syrop === syrop &&
      el.size === size &&
      el.sugar === sugar
    );
  });

  const addOrder = () => {
    const newCoffee = {
      id: uuidv4(),
      title,
      syrop,
      size,
      sugar,
      count: 1,
    };
    setOrderList([...orderList, newCoffee]);
  };

  return (
    <>
      <div className="coffeeBox">
        <h3>{`${title} ${getSum(syrop, title, size)} руб`}</h3>
        {syrops.map((el, i) => (
          <button
            key={i}
            className={`syropButton ${syrop === el.title ? "activeBtn" : ""}`}
            onClick={() => setSyrop(el.title)}
          >
            {el.title}
          </button>
        ))}
        <span>
          {prices.map((el, i) => (
            <button
              key={i}
              className={`coffeeSize ${size === el.size ? "activeBtn" : ""}`}
              onClick={() => setSize(el.size)}
            >{`${el.size} ml`}</button>
          ))}
        </span>
        <span className="checkbox">
          <input
            id={title}
            type="checkbox"
            checked={sugar}
            onChange={() => setSugar(!sugar)}
          />
          <label htmlFor={title}>Без сахара</label>
        </span>
        {sameCoffee ? (
          <span className="counter">
            <CiSquarePlus
              name="plus"
              className="plus"
              onClick={() => increaseCount(sameCoffee)}
            />
            <big>{orderList[orderList.indexOf(sameCoffee)].count}</big>
            <CiSquareMinus
              name="minus"
              className="minus"
              onClick={() => decreaseCount(sameCoffee)}
            />
          </span>
        ) : (
          <button className="buttonAdd" onClick={addOrder}>
            Добавить
          </button>
        )}
      </div>
    </>
  );
};

export default CoffeeCard;
