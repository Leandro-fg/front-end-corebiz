import React, { useEffect, useState } from "react";
import apiCorebiz from "../../services/apiCorebiz";
import Slider from "react-slick";
import StarRatingComponent from "react-star-rating-component";

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
      <div className={"productListTitleContainer"}>
        <h3>Mais Vendidos</h3>
      </div>
      <Slider {...settings}>
        {product?.map(
          (
            { imageUrl, productName, price, listPrice, installments, stars },
            index
          ) => (
            <div key={index} className={"productListContainer"}>
              <div className={"productListWrapper"}>
                <img src={imageUrl} alt="product" />
                <div className={"productListInfo"}>
                  <span className={"productListName"}>{productName}</span>
                  <StarRatingComponent
                    name="Stars"
                    starCount={5}
                    value={stars}
                    starColor="#F8475F"
                    emptyStarColor="#c4c4c4"
                  />
                  <span className={"productListPriceList"}>
                    {price < listPrice
                      ? `de ${formatCurrency(listPrice / 100)}`
                      : null}
                  </span>
                  <span className={"productListPrice"}>
                    por R$ {formatCurrency(price / 100)}
                  </span>
                  <span className={"productListInstallments"}>
                    {installments.length
                      ? `ou em ${
                          installments[0].quantity
                        }x de R$ ${formatCurrency(installments[0].value / 100)}`
                      : null}
                  </span>
                  <button className={"productListAddToCart"}>Comprar</button>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
    </>
  );
};

export default ProductList;
