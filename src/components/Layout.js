import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}
