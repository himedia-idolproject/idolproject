import React from "react";
import Header from "./Header";
import style from "./layout.module.css";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Carts from "./Carts";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const location = useLocation();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const isPaymentPage = location.pathname === "/payment";

  const containerClass = `${style.container} ${isPaymentPage || isCartOpen ? style.noOverflow : style.overflowY}`;

  return location.pathname === "/" ? (
    <Home />
  ) : (
    <div className={containerClass}>
      <Carts className={style.cartList} />
      <header className={style.header}>
        <Header />
      </header>

      <main>{children}</main>
    </div>
  );
}
