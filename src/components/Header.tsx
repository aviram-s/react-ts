import React, { useEffect, useRef } from "react";
import { HeaderProps } from "../interfaces/interfaces";

const Header: React.FC<HeaderProps> = ({ onSwitchTheme }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: Event) => {
    console.log(e);
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
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
    <div className="header" ref={headerRef}>
      Header
    </div>
  );
};

export default Header;
