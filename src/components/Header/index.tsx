import React, { useState } from "react";
import Cart from "../Cart";
import corebizLogo from "../../assets/logo-corebiz-preto-cinza.svg";
import lupa from "../../assets/lupa.svg";
import cart from "../../assets/cart.svg";
import "./styles.css";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
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
        </div>
      </div>
      <Cart open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Header;
