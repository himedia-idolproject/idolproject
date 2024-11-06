import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./header.module.css";

export default function Header() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? "nav-linkActive" : "nav-link";
  };

  return (
    <div className={style.header_container}>
      <div className={style.logo_container}>
        <Link to="/product/all">
          <img
            src="/idolmateLogo.png"
            className={style.logoImage}
            alt="로고이미지"
          />
        </Link>
      </div>
      <div className={style.nav_container}>
        <nav>
          <ul>
            <li>
              <Link
                to="/product/all"
                className={style[getLinkStyle("/product/all")]}
              >
                전체
              </Link>
            </li>
            <li>
              <Link
                to="/product/newjeans"
                className={style[getLinkStyle("/product/newjeans")]}
              >
                뉴진스
              </Link>
            </li>
            <li>
              <Link
                to="/product/seventeen"
                className={style[getLinkStyle("/product/seventeen")]}
              >
                세븐틴
              </Link>
            </li>
            <li>
              <Link
                to="/product/blackpink"
                className={style[getLinkStyle("/product/blackpink")]}
              >
                블랙핑크
              </Link>
            </li>
            <li>
              <Link
                to="/product/bts"
                className={style[getLinkStyle("/product/bts")]}
              >
                BTS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
