import React from "react";
import Header from "./Header";
import style from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={style.container}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}
