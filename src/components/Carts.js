import React from "react";
import { Trash2, X, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Carts.module.css";
import { clearCart, updateQuantity } from "../reduxComponents/cartSlice";

export default function Carts() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantity = (id, num) => {
    const item = items.find((item) => item.id === id);

    if (item) {
      let newQuantity = item.quantity + num;
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className={style.largeBox}>
      <button className={style.xbtn}>
        <X className={style.icon_x} />
      </button>
      <div className={style.item_box}>
        {items.map((item) => (
          <div key={item.id} className={style.box}>
            <div className={style.com}>
              <div className={style.bigBox}>
                <img
                  className={style.img_item}
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.name}
              </p>
              <div>
                <div className={style.btn}>
                  {item.quantity === 5 ? (
                    <button disabled className={style.moveBtn}>
                      <Plus className={style.icon} />
                    </button>
                  ) : (
                    <button
                      className={style.moveBtn}
                      onClick={() => handleQuantity(item.id, 1)}
                    >
                      <Plus className={style.icon} />
                    </button>
                  )}

                  <button
                    className={style.moveBtn}
                    onClick={() => handleQuantity(item.id, -1)}
                  >
                    <Minus className={style.icon} />
                  </button>
                </div>
                <p className={style.pName}>수량 {item.quantity}개</p>
                <p className={style.pName}>
                  가격{" "}
                  {(
                    item.price *
                    item.quantity *
                    (1 - item.discount)
                  ).toLocaleString()}
                  원
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.total_box}>
        <p className={style.name}>총 가격 </p>
        <p className={style.total_price}>
          &nbsp;&nbsp;
          {items
            .reduce(
              (sum, item) =>
                sum + item.price * item.quantity * (1 - item.discount),
              0
            )
            .toLocaleString()}
          원
        </p>
        <div className={style.btn}>
          <button
            className={style.delete}
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            <Trash2 className={style.trash} />
          </button>
        </div>
      </div>
    </div>
  );
}
