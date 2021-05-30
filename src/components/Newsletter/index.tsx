import React from "react";

import "./styles.css";

const Newsletter: React.FC = () => {
  return (
    <div className="newsletterContainer">
      <div className="newsletterTitleContainer">
        <h4>Participe de nossas news com promoções e novidades!</h4>
      </div>
      <div className="newsletterWrapper">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email"
        />
        <button onClick={() => console.log("click!")}>Eu quero!</button>
      </div>
    </div>
  );
};

export default Newsletter;
