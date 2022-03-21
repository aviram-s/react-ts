import React, { useEffect, useRef } from "react";
import { HeaderProps } from "../interfaces/interfaces";

const Header: React.FC<HeaderProps> = ({ onSwitchTheme }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      Header
    </div>
  );
};

export default Header;
