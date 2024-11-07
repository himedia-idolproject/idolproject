import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Carts from "./Carts";
import Header from "./Header";
import style from "./layout.module.css";
import { toggleCart } from "../reduxComponents/cartSlice";

export default function Layout({ children }) {
  const location = useLocation();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const isPaymentPage = location.pathname === "/payment";
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCartOpen && containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [isCartOpen]);

  const containerClass = `${style.container} ${
    isPaymentPage || isCartOpen ? style.noOverflow : style.overflowY
  }`;

  return location.pathname === "/" ? (
    <Home />
  ) : (
    <div className={containerClass} ref={containerRef}>
      <Carts className={style.cartList} />
      {isCartOpen && <div className={style.overlay} onClick={() => {}}></div>}
      <header className={style.header}>
        <Header />
      </header>

      <main>{children}</main>
    </div>
  );
}
