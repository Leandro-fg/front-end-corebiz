import React from "react";
import Header from "./components/Header";
import HomeCarousel from "./components/Carousel";
import Newsletter from "./components/Newsletter";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import CartProvider from "./context/cartContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeCarousel />
      <CartProvider>
        <ProductList />
      </CartProvider>
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default App;
