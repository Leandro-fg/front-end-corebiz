import React, { useEffect, useState } from "react";
import apiCorebiz from "../../services/apiCorebiz";
import { Carousel } from "react-responsive-carousel";

import { IproductList } from "./productList.interfaces";

import "./styles.css";

const ProductList: React.FC = () => {
  const [product, setProducts] = useState<IproductList[]>();

  useEffect(() => {
    apiCorebiz
      .get("/products")
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("product fora", product);
  return (
    <>
      <Carousel>
        {product?.map(({ imageUrl, productName, price, listPrice }, index) => (
          <div key={index} className={"productListContainer"}>
            <div>
              <img src={imageUrl} alt="" />
              <span>{productName}</span>
              <span>{price < listPrice ? listPrice : null}</span>
              <span>{price}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductList;
