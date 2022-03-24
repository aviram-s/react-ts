import React from "react";
import { CATEGORIES } from "../data/mockData";
import CategoryButton from "./CategoryButton";

const HeaderMenu: React.FC = () => {
  return (
    <div className="menuContainer">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        {CATEGORIES.map((cat) => (
          <li key={cat.Id.toString()}>
            <CategoryButton Text={cat.Name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
