import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import style from "./header.module.css";

export default function Header() {
  const [showArrows, setShowArrows] = useState(false);
  const groupName = useParams();

  const handlers = useSwipeable({
    onSwiped: () => {
      setShowArrows(true);
      setTimeout(() => setShowArrows(false), 2000);
    },
  });

  const getLinkStyle = (path) => {
    return groupName === path ? "nav-linkActive" : "nav-link";
  };

  return (
    <div className={style.header_container}>
      <div className={style.logo_container}>
        <Link to="/">
          <img src="/idolmateLogo.png" className={style.logoImage} alt="로고이미지" />
        </Link>
      </div>
      <div {...handlers} className={style.nav_container}>
        <nav>
          <ul>
            <li>
              <Link to="/product/all" className={getLinkStyle("all")}>
                전체
              </Link>
            </li>
            <li>
              <Link to="/product/newjeans" className={getLinkStyle("newjeans")}>
                뉴진스
              </Link>
            </li>
            <li>
              <Link to="/product/seventeen" className={getLinkStyle("seventeen")}>
                세븐틴
              </Link>
            </li>
            <li>
              <Link to="/product/blackpink" className={getLinkStyle("blackpink")}>
                블랙핑크
              </Link>
            </li>
            <li>
              <Link to="/product/bts" className={getLinkStyle("bts")}>
                BTS
              </Link>
            </li>
          </ul>
        </nav>
        {showArrows && (
          <div className="arrows">
            <span className="arrow-left">{"<"}</span>
            <span className="arrow-right">{">"}</span>
          </div>
        )}
      </div>
    </div>
  );
}
