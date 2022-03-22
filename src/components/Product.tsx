import React from "react";
import { ProductProps } from "../interfaces/interfaces";

const Product: React.FC<ProductProps> = ({
  Img,
  Name,
  PriceWas,
  PriceNow,
  Date,
}) => {
  return <div className="product"></div>;
};

export default Product;
