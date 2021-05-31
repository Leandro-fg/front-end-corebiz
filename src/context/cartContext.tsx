import React, { createContext, useContext, useState } from "react";

interface ICartContext {
  currentCart: any;
  setCurrentCart: Function;
  addToCart: Function;
}

interface ICartItem {
  productId: number;
}

const CartContext = createContext<ICartContext>({
  currentCart: [],
  setCurrentCart: () => {},
  addToCart: () => {},
});

const CartProvider: React.FC<{}> = ({ children }) => {
  const [currentCart, setCurrentCart] = useState([]);

  const addToCart = (item: any) => {
  console.log("🚀 ~ file: cartContext.tsx ~ line 23 ~ addToCart ~ item", item)
    console.log("click");

  };

  return (
    <CartContext.Provider value={{ currentCart, setCurrentCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCartProvider() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "Esse contexto não pode ser usado fora do CartContextProvider"
    );
  }
  return context;
}

export default CartProvider;
