import { useState } from "react";
import style from "./ProductDetail.module.css";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  return (
    <form className={style.containers}>
      <div className={style["imageInfo-section"]}>
        <div className={style["image-section"]}>
          <img src="/default-product-image.png" alt="기본 이미지" />
        </div>
        <div className={style["info-section"]}>
          <h1>메뉴 이름</h1>
          <div>
            <label className={style["quantity"]} htmlFor="quantity"></label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={style["addQuantity"]}
            >
              {[...Array(5).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  수량선택:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <p>
            가격
            <span className={style["price"]}>10,000원</span>
          </p>
        </div>
      </div>
      <div className={style["button-section"]}>
        <button type="submit" className={style["add-button"]}>
          주문담기
        </button>
        <button type="button" className={style["cancel-button"]}>
          취소
        </button>
      </div>
    </form>
  );
}
