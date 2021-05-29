import React from "react";
import corebizLogo from "../../assets/logo-corebiz-preto-cinza.svg";
import lupa from "../../assets/lupa.svg";
import cart from "../../assets/cart.svg";

import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrappper}>
        <div className={styles.headerIcon}>
          <img src={corebizLogo} alt="corebizLogo" />
        </div>
        <div className={styles.headerSearchInput}>
          <input type="text" placeholder="O que está procurando?" />
          <img src={lupa} alt="Buscar" />
        </div>
        <div className={styles.headerMyAccount}>
          <button>Minha Conta</button>
        </div>
        <div className={styles.headerCart}>
          <img src={cart} alt="Carrinho" />
        </div>
      </div>
    </div>
  );
};

export default Header;
