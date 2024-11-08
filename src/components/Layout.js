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
  const isPaymentPage = location.pathname === "/product/payment";
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCartOpen && containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [isCartOpen]);

  let containerClasses = [style.container];
  if (isPaymentPage) {
    containerClasses.push(style.payment);
  }
  if (isCartOpen) {
    containerClasses.push(style.noOverflow);
  }

  const containerStyle = {
    height: isPaymentPage ? "70%" : "100%",
  };

  return (
    <div className={containerClasses.join(" ")} ref={containerRef} style={containerStyle}>
      <Carts className={style.cartList} />
      {isCartOpen && (
        <div
          className={style.overlay}
          onClick={() => {
            dispatch(toggleCart());
          }}
        ></div>
      )}
      <header className={style.header}>
        <Header />
      </header>
      <PageTransitionLayout>
        <Outlet />
      </PageTransitionLayout>
    </div>
  );
}
