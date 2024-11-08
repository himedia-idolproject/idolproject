import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? style.navLinkActive : style.navLink;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        <Link to="/product/all">
          <img src="/idolmateLogo.png" className={style.logoImage} alt="로고이미지" />
        </Link>
      </div>
      <div className={style.burgerMenu} onClick={toggleMenu}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>
      <div className={`${style.navContainer} ${isMenuOpen ? style.showMenu : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/product/all" className={getLinkStyle("/product/all")}>
                전체
              </Link>
            </li>
            <li>
              <Link to="/product/newjeans" className={getLinkStyle("/product/newjeans")}>
                뉴진스
              </Link>
            </li>
            <li>
              <Link to="/product/seventeen" className={getLinkStyle("/product/seventeen")}>
                세븐틴
              </Link>
            </li>
            <li>
              <Link to="/product/blackpink" className={getLinkStyle("/product/blackpink")}>
                블랙핑크
              </Link>
            </li>
            <li>
              <Link to="/product/bts" className={getLinkStyle("/product/bts")}>
                BTS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
