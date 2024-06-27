import React, { useContext } from "react";
import { OrderContext } from "./Context";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const Cart = () => {
  const { orderList, getSum, increaseCount, decreaseCount } =
    useContext(OrderContext);

  return (
    <div className="basket">
      <h1 className="basket-title">Корзина</h1>
      {orderList.length ? (
        <div className="orders">
          {orderList.map((el, i) => (
            <div key={i} className="position">
              <span>
                <big>{`${el.title} ${getSum(
                  el.syrop,
                  el.title,
                  el.size
                )} руб`}</big>
                <br />
                {`(${el.sugar ? "Сахар" : "Без сахара"}, ${el.syrop}, ${
                  el.size
                }ml)`}
              </span>
              <span className="counter">
                <CiSquarePlus
                  name="plus"
                  className="plus"
                  onClick={() => increaseCount(el)}
                />
                <big>{orderList[orderList.indexOf(el)].count}</big>
                <CiSquareMinus
                  name="minus"
                  className="minus"
                  onClick={() => decreaseCount(el)}
                />
              </span>
              <big>{`${orderList[orderList.indexOf(el)].count} шт.`}</big>
              <big>{`${
                getSum(el.syrop, el.title, el.size) *
                orderList[orderList.indexOf(el)].count
              } руб`}</big>
            </div>
          ))}
          <big className="invoice-amount">{`Всего: ${orderList.reduce(
            (acc, el) =>
              acc +
              getSum(el.syrop, el.title, el.size) *
                orderList[orderList.indexOf(el)].count,
            0
          )} руб`}</big>
        </div>
      ) : (
        <big className="invoice-amount">{`Всего: ${orderList.reduce(
          (acc, el) =>
            acc +
            getSum(el.syrop, el.title, el.size) *
              orderList[orderList.indexOf(el)].count,
          0
        )} руб`}</big>
      )}
    </div>
  );
};

export default Cart;
