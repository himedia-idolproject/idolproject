import React, { useEffect, useRef, useState } from "react";
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
  const listContainerRef = useRef(null);
  const dispatch = useDispatch();
  const [listContainerHeight, setListContainerHeight] = useState("100%");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth > 1200) {
        setListContainerHeight("100%");
      } else if (isPaymentPage) {
        setListContainerHeight("70%");
      } else {
        setListContainerHeight("100%");
      }
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, [isPaymentPage]);

  useEffect(() => {
    if (isCartOpen && listContainerRef.current) {
      listContainerRef.current.scrollTop = 0;
    }
  }, [isCartOpen]);

  let containerClasses = [style.container];
  if (isCartOpen) {
    containerClasses.push(style.noOverflow);
  }
  if (isPaymentPage && window.innerWidth <= 440) {
    containerClasses.push(style.paymentPage);
  }

  const listContainerStyle = {
    height: listContainerHeight,
  };

  return (
    <div className={containerClasses.join(" ")} ref={listContainerRef}>
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
      <div className={style.listContainer} style={listContainerStyle}>
        <PageTransitionLayout>
          <Outlet />
        </PageTransitionLayout>
      </div>
    </div>
  );
}
