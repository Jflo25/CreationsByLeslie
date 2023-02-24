import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import './index.css';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";


const Layout = () => {

  return (
    <div className="app bg-slate-400 ">

      
      <Navbar/>
      <Outlet /> 
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
        element: <Products/>
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
  return (
    <div >
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
