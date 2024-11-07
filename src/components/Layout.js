import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { toggleCart } from "../reduxComponents/cartSlice";
import Carts from "./Carts";
import Header from "./Header";
import style from "./layout.module.css";
import PageTransitionLayout from "./PageTransitionLayout";

export default function Layout() {
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

  return (
    <div className={containerClass} ref={containerRef}>
      <Carts className={style.cartList} />
      {isCartOpen && <div className={style.overlay} onClick={() => {}}></div>}
      <header className={style.header}>
        <Header />
      </header>
      <PageTransitionLayout>
        <Outlet />
      </PageTransitionLayout>
    </div>
  );
}
