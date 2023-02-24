import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { commerce } from "./lib/commerce";
import './index.css';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";

const Layout = ({products }) => {

  return (
    <div className="app bg-slate-400 ">

      
      <Navbar/>
      <Outlet products={ products } /> 
      <Footer/>
      </div>
   
  )
}

const router = createBrowserRouter([
  {
    

    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      }
    ]
  },
 
  ])

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
   const {data} = await commerce.products.list();
   setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  
  return (
    <div >
      <RouterProvider router={router} />
     <Router>
      <Routes>
        <Route path="/" element={<Layout products={products}/>} />

      </Routes>
     </Router>
    </div>
  );
}

export default App;
