import React from "react";
import { CategoryButtonProps } from "../interfaces/interfaces";

const CategoryButton: React.FC<CategoryButtonProps> = ({
  Text,
  Icon,
  handleClick,
}) => {
  const addIcon = () => {
    if (!Icon) return "";
    return ` bx bx-${Icon} icon ${Icon}`;
  };
  return (
    <button
      onClick={handleClick && handleClick}
      className={`categoryButton${addIcon()}`}>
      {Text}
    </button>
  );
};

export default CategoryButton;
