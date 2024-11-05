import React from "react";
import Header from "./Header";
import style from "./layout.module.css";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home";

export default function Layout({ children }) {
  const location = useLocation();
  return location.pathname === "/" ? (
    <Home />
  ) : (
    <div className={style.container}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}
