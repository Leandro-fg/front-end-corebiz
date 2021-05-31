import React from "react";
import { ICart, IproductListCart } from "./cart.interfaces";
import "./styles.css";
import { useCookies } from "react-cookie";
import { formatCurrency } from "../../utils/formatCurrency";

const Cart: React.FC<ICart> = ({ open, setOpen }) => {
  const [get] = useCookies(["cart"]);

  const product = get;
  
  return (
    <>
      {open ? (
        <div className="cartContainer">
          <div className="cartTitleWrapper">
            <span className="cartTitle">Meu carrinho</span>
            <span className="cartCloseButton" onClick={() => setOpen(false)}>
              X
            </span>
          </div>
          <div className="cartItemWrapper"></div>
          {product?.cart.map((product: IproductListCart, index: number) => (
            <div key={index} className={"productListContainer"}>
              <div className={"productListWrapper"}>
                <img src={product.imageUrl} alt="product" />
                <div className={"productListInfo"}>
                  <span className={"productListName"}>
                    {product.productName}
                  </span>
                  <span className={"productListPriceList"}>
                    {product.price < product.listPrice
                      ? `de ${formatCurrency(product.listPrice / 100)}`
                      : null}
                  </span>
                  <span className={"productListPrice"}>
                    por {formatCurrency(product.price / 100)}
                  </span>
                  <span className={"productListInstallments"}>
                    {product.installments.length
                      ? `ou em ${
                          product.installments[0].quantity
                        }x de ${formatCurrency(
                          product.installments[0].value / 100
                        )}`
                      : null}
                  </span>
                  <span>{product.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Cart;
