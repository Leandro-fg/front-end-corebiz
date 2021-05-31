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
  const [cookies, setCookie] = useCookies(["cart"]);

  console.log(
    "🚀 ~ file: cartContext.tsx cookieProducts = co ~ line 18 ~ cookies",
    cookies
  );

  let cookieProducts = [];

  console.log("currentCart", currentCart);
  useEffect(() => {
    if (Object.keys(cookies).length === 0) {
      console.log("cookie criado");
      setCookie("cart", currentCart);
    }
  });

  const addToCart = (item: any) => {
    const quantityValidation = currentCart.find(
      (currentItem: any) => currentItem.productId === item.productId
    );
    console.log(
      "🚀 ~ file: cartContext.tsx ~ line 35 ~ addToCart ~ quantityValidation",
      quantityValidation
    );
    if (quantityValidation) {
      setCurrentCart(
        currentCart.map((cartItem: any) =>
          cartItem.productId === item.productId
            ? {
                ...quantityValidation,
                quantity: quantityValidation.quantity + 1,
              }
            : cartItem
        )
      );
  
      cookieProducts = currentCart?.concat(cookies?.cart);
      console.log("cookieProducts", cookieProducts)
      setCookie('cart', cookieProducts)
    } else {
      setCurrentCart([...currentCart, { ...item, quantity: 1 }]);
      cookieProducts = currentCart?.concat(cookies?.cart);
      setCookie('cart', cookieProducts)
    }

    console.log("item", item);
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
    throw new Error("Esse contexto não pode ser usado fora do CartProvider");
  }
  return context;
}

export default CartProvider;
