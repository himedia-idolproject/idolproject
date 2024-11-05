import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? "nav-linkActive" : "nav-link";
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img src="/idolmateLogo.png" className="logoImage" alt="로고이미지" />
        </Link>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <Link
                to="/products/all"
                className={style[getLinkStyle("/products/all")]}
              >
                전체
              </Link>
            </li>
            <li>
              <Link
                to="/products/newjeans"
                className={style[getLinkStyle("/products/newjeans")]}
              >
                뉴진스
              </Link>
            </li>
            <li>
              <Link
                to="/products/seventeen"
                className={style[getLinkStyle("/products/seventeen")]}
              >
                세븐틴
              </Link>
            </li>
            <li>
              <Link
                to="/products/blackpink"
                className={style[getLinkStyle("/products/blackpink")]}
              >
                블랙핑크
              </Link>
            </li>
            <li>
              <Link
                to="/products/bts"
                className={style[getLinkStyle("/products/bts")]}
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
