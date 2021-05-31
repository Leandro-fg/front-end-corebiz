import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Cart from "../Cart";
import corebizLogo from "../../assets/logo-corebiz-preto-cinza.svg";
import lupa from "../../assets/lupa.svg";
import cart from "../../assets/cart.svg";
import menu from "../../assets/menu.svg";
import corebizLogoMobile from "../../assets/corebizLogoMobile.svg";
import "./styles.css";

const Header: React.FC = () => {
  const [get] = useCookies(["Cart"]);
  const [open, setOpen] = useState<boolean>(false);

  const product = get;
  
  return (
    <>
      <div className={"headerContainer"}>
        <div className={"headerWrappper"}>
          <div className={"headerIcon"}>
            <a href="/">
              <img src={corebizLogo} alt="corebizLogo" />
            </a>
          </div>
          <div className={"headerSearchInput"}>
            <input type="text" placeholder="O que está procurando?" />
            <img src={lupa} alt="Buscar" />
          </div>
          <div className={"headerMyAccount"}>
            <a href="/login">Minha Conta</a>
          </div>
          <div className={"headerCart"} onClick={() => setOpen(!open)}>
            <img src={cart} alt="Carrinho" />
           {product?.cart ?  <span>{product?.cart.length}</span> : null }
          </div>
        </div>
        <Cart open={open} setOpen={setOpen} />
      </div>
      <div className={"headerContainerMobile"}>
        <div className={"headerWrappper"}>
          <div className={"headerMenu"}>
            <img src={menu} alt="corebizLogo" />
          </div>
          <div className={"headerIcon"}>
            <a href="/">
              <img src={corebizLogoMobile} alt="corebizLogo" />
            </a>
          </div>
          <div className={"headerCart"} onClick={() => setOpen(!open)}>
            <img src={cart} alt="Carrinho" />
          </div>
          <Cart open={open} setOpen={setOpen} />
        </div>
        <div className={"headerSearchInput"}>
          <input type="text" placeholder="O que está procurando?" />
          <img src={lupa} alt="Buscar" />
        </div>
      </div>
    </>
  );
};

export default Header;
