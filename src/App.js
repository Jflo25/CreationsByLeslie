
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import {commerce} from './lib/commmece'
import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //
  //   setProducts(data);
  // };
  //
  // useEffect(() => {
  //   fetchProducts();
  //
  // }, []);
  return (
    <div>

    <Router>
    <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/product" element={<Product />} /> 
         {/*<Route path="/products" element={products.length > 0 ? <Products products={products}/> : null} />*/}
         <Route path="/about-us" element={<About />} />
         <Route path="/contact" element={<Contact/>} /> 
      </Routes>
      <Footer/>
    </Router> 
    </div>
  )
}
export default App;
