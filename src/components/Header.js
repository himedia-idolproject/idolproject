import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

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
    <div className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img src="/idolmateLogo.png" className="logoImage" alt="로고이미지" />
        </Link>
      </div>
      <div {...handlers} className="nav-container">
        <nav>
          <ul>
            <li>
              <Link to="/products/all" className={getLinkStyle("all")}>
                전체
              </Link>
            </li>
            <li>
              <Link
                to="/products/newjeans"
                className={getLinkStyle("newjeans")}
              >
                뉴진스
              </Link>
            </li>
            <li>
              <Link
                to="/products/seventeen"
                className={getLinkStyle("seventeen")}
              >
                세븐틴
              </Link>
            </li>
            <li>
              <Link
                to="/products/blackpink"
                className={getLinkStyle("blackpink")}
              >
                블랙핑크
              </Link>
            </li>
            <li>
              <Link to="/products/bts" className={getLinkStyle("bts")}>
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
