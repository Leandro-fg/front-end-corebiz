import React, { useEffect, useState } from "react";
import apiCorebiz from "../../services/apiCorebiz";
import flag from "../../assets/flag.svg";
import { useCartProvider } from "../../context/cartContext";

import Slider from "react-slick";
import StarRatingComponent from "react-star-rating-component";

import { formatCurrency } from "../../utils/formatCurrency";

import { IproductList } from "./productList.interfaces";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const ProductList: React.FC = () => {
  const [product, setProducts] = useState<IproductList[]>();
  const { addToCart } = useCartProvider();

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
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                {price < listPrice ? (
                  <img src={flag} alt="off" className="productListFlag" />
                ) : null}
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
                    por {formatCurrency(price / 100)}
                  </span>
                  <span className={"productListInstallments"}>
                    {installments.length
                      ? `ou em ${installments[0].quantity}x de ${formatCurrency(
                          installments[0].value / 100
                        )}`
                      : null}
                  </span>
                  <button
                    className={"productListAddToCart"}
                    onClick={() => addToCart(product[index])}
                  >
                    Comprar
                  </button>
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
