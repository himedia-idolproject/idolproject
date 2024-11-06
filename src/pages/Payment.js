import React from "react";
import style from "./Payment.module.css";
import { Trash2 } from "lucide-react";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../reduxComponents/cartSlice";

export default function Payment() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total_discount = items.reduce((sum, item) => sum + item.price * item.quantity * item.discount, 0);

  return (
    <div className={style.container}>
      <div className={style.item_box}>
        <Items />
      </div>
      <div className={style.box}>
        <div className={style.first}>
          <h1 className={style.sub}>상품금액</h1>
          <div className={style.price}>
            <div className={style.total}>
              <p>총 상품금액</p>
              <p>{total.toLocaleString()}원</p>
            </div>
            <div className={style.total}>
              <p>총 할인금액</p>
              <p style={{ color: "#FF2626" }}>-{total_discount.toLocaleString()}원</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.total}>
          <h2>결제예상금액</h2>
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>{(total - total_discount).toLocaleString()}원</p>
        </div>
        <ul>
          <li>• 교환 및 반품은 수령 후 7일 이내로 접수하셔야합니다.</li>
          <li>• 세트 상품의 경우 부분 교환 및 부분 환불이 불가합니다.</li>
          <li>• 고객님의 단순 변심에 의한 교환/반품일 경우, 환불 불가능합 &nbsp;&nbsp;니다.</li>
          <li>
            • 고객님에 의한 상품,라벨, 택 등이 훼손되었을 경우와 상품의 &nbsp;&nbsp;사용 후에는 교환 및 환불이
            불가능합니다.
          </li>
        </ul>
        <div className={style.btn}>
          <button className={style.pay}>결제</button>
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
