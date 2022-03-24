import React from "react";
import { ProductProps } from "../interfaces/interfaces";

const Product: React.FC<ProductProps> = ({
  Img,
  Name,
  PriceWas,
  PriceNow,
  Date,
}) => {
  return (
    <div className="product">
      <img src={Img}></img>
      <div className="productBody">
        <a>O{Name}</a>
        <p>
          From ${PriceWas} to <b>${PriceNow}</b>
        </p>
        <p style={{ opacity: "0.7", fontSize: "0.8rem" }}>{Date}</p>
      </div>
    </div>
  );
};

export default Product;
