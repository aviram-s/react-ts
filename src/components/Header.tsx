import React, { useEffect, useRef } from "react";
import { HeaderProps } from "../interfaces/interfaces";
import CategoryButton from "./CategoryButton";

const Header: React.FC<HeaderProps> = ({ onSwitchTheme, theme }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current?.classList.add("shrink");
    } else {
      headerRef.current?.classList.remove("shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="headerStickyContainer">
      <div ref={headerRef} className="header">
        <div className="headerCategories">
          <CategoryButton Text="USA" />
          <CategoryButton Text="UK" />
          <CategoryButton Text="Canada" />
          <CategoryButton Text="Germany" />
        </div>
        <div className="menuContainer">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <CategoryButton Text="USA" />
            </li>
            <li>
              <CategoryButton Text="UK" />
            </li>
            <li>
              <CategoryButton Text="Canada" />
            </li>
            <li>
              <CategoryButton Text="Germany" />
            </li>
          </ul>
        </div>
        <div className="headerIcons">
          <CategoryButton Icon="search" />
          <CategoryButton
            Icon={theme === "light" ? "moon" : "sun"}
            handleClick={onSwitchTheme}
          />
          <CategoryButton Icon="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
