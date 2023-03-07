import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Card from '../../components/Card/Card'
import {commerce} from '../../lib/commerce.js'
import Filter from '../../components/HomeProducts.jsx/Filter'
const Products = () => {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

 
 const fetchProducts = async () => {
     try {
       const { data } = await commerce.products.list();
       setProducts(data);
       setIsLoading(false);
     } catch (error) {
       console.log("Error fetching products:", error);
       setError(error);
       setIsLoading(false);
     }
   };
 
   useEffect(() => {
     fetchProducts();
   }, []);
 
   if (isLoading) {
     return <p className='font-page text-4xl text-center'>Loading products...</p>;
   }
 
   if (error) {
     return <p>Error fetching products: {error.message}</p>;
   };


   

  return (
                                 //filter section 

    <div className="FilterAndProducts max-w-full mx-auto"> 
         <Filter/>

                  {/* actual products list  */}

      <div className="right flex-[6]  ">
         <h2 className='text-center text-5xl font-page my-6'>All Products</h2>

         {/* <img src="" alt="" /> */}
         <div className='product-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 '>
         {products?.map(item=>(
         <Card item={item} key={item.id}/>
         ))}
         </div>
      </div>
    </div>
  )
}

export default Products