import React, { useEffect, useState } from "react";
import apiCorebiz from "../../services/apiCorebiz";
import Slider from "react-slick";
import { formatCurrency } from "../../utils/formatCurrency";

import { IproductList } from "./productList.interfaces";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const ProductList: React.FC = () => {
  const [product, setProducts] = useState<IproductList[]>();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
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
      <Slider {...settings}>
        {product?.map(
          (
            { imageUrl, productName, price, listPrice, installments },
            index
          ) => (
            <div key={index} className={"productListContainer"}>
              <div className={"productListWrapper"}>
                <img src={imageUrl} alt="product" />
                <span className={"productListName"}>{productName}</span>
                <span className={"productListPriceList"}>
                  {price < listPrice ? `de ${formatCurrency(listPrice/100)}` : null}
                </span>
                <span className={"productListPrice"}>por R$ {formatCurrency(price/100)}</span>
                <span>
                  {installments.length
                    ? `ou em ${installments[0].quantity}x de R$ ${formatCurrency(installments[0].value/100)}`
                    : null}
                </span>
              </div>
            </div>
          )
        )}
      </Slider>
    </>
  );
};

export default ProductList;
