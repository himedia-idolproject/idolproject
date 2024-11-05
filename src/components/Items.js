import React from "react";
import { Plus, Minus } from "lucide-react";
import style from "./Items.module.css";

export default function Items() {
  return (
    <div className={style.box}>
      <div className={style.com}>
        <div className={style.bigBox}></div>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          메뉴 이름
        </p>
        <div>
          <div className={style.btn}>
            <button className={style.moveBtn}>
              <Plus />
            </button>
            <button className={style.moveBtn}>
              <Minus />
            </button>
          </div>
          <p className={style.pName}>수량 1개</p>
          <p className={style.pName}>가격 0원</p>
        </div>
      </div>
    </div>
  );
}
