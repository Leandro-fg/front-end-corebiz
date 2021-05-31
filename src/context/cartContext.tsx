import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
interface ICartContext {
  currentCart: any;
  setCurrentCart: Function;
  addToCart: Function;
}

const CartContext = createContext<ICartContext>({
  currentCart: [],
  setCurrentCart: () => {},
  addToCart: () => {},
});

const CartProvider: React.FC<{}> = ({ children }) => {
  const [currentCart, setCurrentCart] = useState<any>([]);
  const [cookies, setCookie] = useCookies([]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: cartContext.tsx ~ line 27 ~ addToCart ~ currentCart",
      currentCart
    );
    console.log("🚀 ~ file: cartContext.tsx ~ line 18 ~ cookies", cookies);
  }, [currentCart, cookies]);

  const addToCart = (item: any) => {
    setCurrentCart((currentCart: any) => [...currentCart, item]);
    console.log(
      "🚀 ~ file: cartContext.tsx ~ line 23 ~ addToCart ~ item",
      item
    );
    setCookie("Cart", currentCart);
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
