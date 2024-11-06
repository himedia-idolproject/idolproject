import React from "react";
import style from "./swiperItem.module.css";
import { useNavigate } from "react-router-dom";

export default function SwiperItem({ product }) {
  const discountedPrice = product.price - product.price * product.discount;
  const navigate = useNavigate();

  function selectedItem() {
    navigate(`/product/${product.idolGroup}/${product.id}`);
  }

  return (
    <div onClick={selectedItem} className={style.cartItem}>
      <img
        src={`${process.env.PUBLIC_URL}/${product.image}`}
        alt={product.name}
      />
      <strong>{product.name}</strong>
      <span style={{ display: "flex", alignItems: "center" }}>
        {product.discount !== 0 ? (
          <>
            <s className={style["originPrice"]}>
              {product.price.toLocaleString()}
            </s>
            <em className={style["discountPrice"]}>
              {discountedPrice.toLocaleString()} 원
            </em>
          </>
        ) : (
          <s className={style["priceTag"]}>
            {product.price.toLocaleString()} 원
          </s>
        )}
      </span>
    </div>
  );
}
