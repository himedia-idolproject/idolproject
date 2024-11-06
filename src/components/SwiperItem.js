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
      <span>
        {product.discount !== 0 ? (
          <>
            <s className={style["priceTag"]}>
              {product.price.toLocaleString()}
            </s>
            <em>{discountedPrice.toLocaleString()}</em>
          </>
        ) : (
          <s>{product.price.toLocaleString()}</s>
        )}
      </span>
    </div>
  );
}
