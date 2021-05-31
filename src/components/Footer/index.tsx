import React from "react";

import vtex from "../../assets/vtex.svg";
import email from "../../assets/email.svg";
import mic from "../../assets/mic.svg";
import footerLogo from "../../assets/footerLogo.svg";

import "./styles.css";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerAdress">
          <span>Localização</span>
          <span>Avenina Andôme, 2000, Bloco 6 e 8</span>
          <span>Alphavile SP </span>
          <span>brasil@corebiz.ag</span>
          <span>+55 11 3090 1039</span>
        </div>
        <div className="footerContact">
          <a href="/">
            <img src={email} alt="" /> Entre em contanto
          </a>
          <a href="/">
            <img src={mic} alt="" />
            Fale com o nosso consultor online
          </a>
        </div>
        <div className="footerLogo">
          <a href="/">
            Created by
            <img src={footerLogo} alt="" />
          </a>
          <a href="/">
            <img src={vtex} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
