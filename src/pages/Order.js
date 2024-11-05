import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../reduxComponents/cartSlice";

const Order = () => {
  const cartItems = useSelector((state) => state.cart.cartItemList);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p>{item.price}원</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
