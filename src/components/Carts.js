import React, { useEffect, useState } from "react";
import { Trash2, X, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Carts.module.css";
import { clearCart, updateQuantity, toggleCart } from "../reduxComponents/cartSlice";

export default function Carts() {
  const items = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 440);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 440);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleQuantity = (id, num) => {
    const item = items.find((item) => item.id === id);

    if (item) {
      let newQuantity = item.quantity + num;
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const iconSize = isMobile ? 32 : 24;
  const xIconSize = isMobile ? 48 : 30;
  const trashIconSize = isMobile ? 48 : 70;

  return (
    <div className={`${style.largeBox} ${isCartOpen ? style.open : ""}`}>
      <button
        className={style.xbtn}
        onClick={() => {
          dispatch(toggleCart());
        }}
      >
        <X size={xIconSize} className={style.icon_x} />
      </button>
      <div className={style.item_box}>
        {items.map((item) => (
          <div key={item.id} className={style.box}>
            <div className={style.com}>
              <div className={style.bigBox}>
                <img
                  className={style.img_item}
                  src={`${process.env.PUBLIC_URL}/${item.image}`}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: "13.125rem",
                  fontSize: "1.5rem",
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
                      <Plus size={iconSize} className={style.icon} />
                    </button>
                  ) : (
                    <button className={style.moveBtn} onClick={() => handleQuantity(item.id, 1)}>
                      <Plus size={iconSize} className={style.icon} />
                    </button>
                  )}

                  <button className={style.moveBtn} onClick={() => handleQuantity(item.id, -1)}>
                    <Minus size={iconSize} className={style.icon} />
                  </button>
                </div>
                <p className={style.pName}>수량 {item.quantity}개</p>
                <p className={style.pName}>
                  가격 {(item.price * item.quantity * (1 - item.discount)).toLocaleString()}원
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${style.total_box} ${isCartOpen ? style.fixed : ""}`}>
        <p className={style.name}>총 가격 </p>
        <p className={style.total_price}>
          &nbsp;&nbsp;
          {items.reduce((sum, item) => sum + item.price * item.quantity * (1 - item.discount), 0).toLocaleString()}원
        </p>
        <div className={style.btn}>
          <button
            className={style.delete}
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            <Trash2 size={trashIconSize} className={style.trash} />
          </button>
        </div>
      </div>
    </div>
  );
}
