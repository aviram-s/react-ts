import React from "react";
import Product from "../components/Product";
import { PRODUCTS } from "../data/mockData";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="catalog">
        {PRODUCTS.map((product) => (
          <Product
            key={product.Id}
            Id={product.Id}
            Img={product.Img}
            Date={product.Date}
            PriceNow={product.PriceNow}
            PriceWas={product.PriceWas}
            Name={product.Name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
