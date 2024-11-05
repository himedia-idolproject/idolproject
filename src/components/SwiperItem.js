import React from "react";
import myImage from "./../images/bts/키링/BTS방탄 굿즈 스트랩 키링.jpg";

export default function SwiperItem() {
  return (
    <div>
      <img src={myImage} alt="BTS 키링" />
      <strong>메뉴이름</strong>
      <span>
        <s>원래가격</s>
        <em>할인가격</em>
      </span>
    </div>
  );
}
