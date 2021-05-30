import React from 'react';
import Header from './components/Header'
import HomeCarousel from './components/Carousel'
import Newsletter from './components/Newsletter'
import ProductList from './components/ProductList'

import './App.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <HomeCarousel/>
        <ProductList/>
        <Newsletter/>
    </div>
  );
}

export default App;
