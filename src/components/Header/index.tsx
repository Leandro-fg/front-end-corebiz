import React from "react";
import corebizLogo from "../../assets/logo-corebiz-preto-cinza.svg";
import lupa from "../../assets/lupa.svg";
import cart from "../../assets/cart.svg";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <div className={"headerContainer"}>
      <div className={"headerWrappper"}>
        <div className={"headerIcon"}>
          <img src={corebizLogo} alt="corebizLogo" />
        </div>
        <div className={"headerSearchInput"}>
          <input type="text" placeholder="O que está procurando?" />
          <img src={lupa} alt="Buscar" />
        </div>
        <div className={"headerMyAccount"}>
          <a href="/login">Minha Conta</a>
        </div>
        <div className={"headerCart"}>
          <img src={cart} alt="Carrinho" />
        </div>
      </div>
    </div>
  );
};

export default Header;
