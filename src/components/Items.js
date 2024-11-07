import { Minus, Plus } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../reduxComponents/cartSlice";
import style from "./Items.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Items() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      navigate("/product/all");
    }
  }, [items, navigate]);

  const handleQuantity = (id, num) => {
    const item = items.find((item) => item.id === id);

    if (item) {
      let newQuantity = item.quantity + num;
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={style.box}>
          <div className={style.com}>
            <div className={style.bigBox}>
              <img
                className={style.img_item}
                src={`${process.env.PUBLIC_URL}/${item.image}`}
              />
            </div>
            <p
              style={{
                textAlign: "center",
                maxWidth: "210px",
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
    </>
  );
}
