import React from "react";
import { ProductProps } from "../interfaces/interfaces";

const Product: React.FC<ProductProps> = ({
  Img,
  Name,
  PriceWas,
  PriceNow,
  Date,
  Link,
}) => {
  return (
    <div className="product">
      <a href={Link} target="_blank">
        <img src={Img}></img>
      </a>
      <div className="productBody">
        <a href={Link} target="_blank">
          {Name}
        </a>
        <p>
          From ${PriceWas} to <b>${PriceNow}</b>
        </p>
        <p style={{ opacity: "0.7", fontSize: "0.8rem" }}>{Date}</p>
      </div>
    </div>
  );
};

export default Product;
