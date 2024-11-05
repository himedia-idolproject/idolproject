import React from "react";
import myImage from "./../images/bts/accessory/1.jpg";
import style from "./swiperItem.module.css";

export default function SwiperItem() {
  return (
    <div className={style.cartItem}>
      <img src={myImage} alt="BTS 키링" />
      <strong>메뉴이름</strong>
      <span>
        <s>원래가격</s>
        <em>할인가격</em>
      </span>
    </div>
  );
}
