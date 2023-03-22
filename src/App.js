import React, { useState, useEffect } from 'react';
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


function App() {
  



  

  return (
    <div className="app bg-slate-200 ">

    <Router>
    <Navbar/>
      <Routes>
         <Route path="/CreationsByLeslie" element={<Home/>} />
         <Route path="/product/:id" element={<Product />} /> 
         <Route path="/products" element={<Products />} />
         <Route path="/about-us" element={<About />} />
         <Route path="/contact" element={<Contact/>} /> 
      </Routes>
      <Footer/>
    </Router> 
    </div>
  )
}
export default App;
