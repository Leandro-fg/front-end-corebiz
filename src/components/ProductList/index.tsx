import React, { useEffect, useState } from "react";
import apiCorebiz from "../../services/apiCorebiz";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IproductList } from "./productList.interfaces";

import "./styles.css";

const ProductList: React.FC = () => {
  const [product, setProducts] = useState<IproductList[]>();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
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
      <Slider {...settings} >
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
      </Slider>
    </>
  );
};

export default ProductList;
