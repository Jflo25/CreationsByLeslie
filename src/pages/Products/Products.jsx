import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Card from '../../components/Card/Card'
import {commerce} from '../../lib/commerce.js'

const Products = () => {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   const catId = parseInt(useParams().id);
   const [maxPrice, setMaxPrice] = useState(100);
   const [sort, setSort] = useState(null);

 
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

    <div className="FilterAndProducts flex w-[90%]  mx-auto"> 

      <div className="left grid grid-cols- sm:flex-[1] sticky h-[100%] my-auto ">
         <div className="filter-Item mb-8 ">
            <h2 className='text-4xl font-page '>Product Categories</h2>
               <div className='filter-categories '>

                  <div className="inputItem">
                     <input type="checkbox" id='1' value={1} />
                     <label htmlFor="1" className='product-items '>Sweater</label>
                  </div>
                  <div className="inputItem">
                     <input type="checkbox" id='2' value={2} />
                     <label htmlFor="1" className='product-items'>Hoodie</label>
                  </div>
                  <div className="inputItem">
                     <input type="checkbox" id='3' value={3} />
                     <label htmlFor="1" className='product-items'>Shirts</label>
                  </div>
               </div>
         </div>
         <div className="filter-Item">
            <h2 className='text-4xl font-page'>Filter by Price</h2>
               <div className="inputItem">
                  <input type="range" min={0} max={100} onChange={(e)=>setMaxPrice(e.target.value)}/>
                  <span>{maxPrice}</span>
               </div>
         </div>
         <div className="filter-Item">
            <h2 className='text-4xl my-2 font-page'>Sort By</h2>
            <div className="filter-categories">
               <div className="inputItem">
                  <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
                  <label htmlFor="asc" className='product-items'>Price (Lowest)</label>
               </div>
               <div className="inputItem">
                  <input type="radio" id='desc' value='desc' name='price' onChange={e=>setSort('desc')}/>
                  <label htmlFor="desc" className='product-items'>Price (Highest)</label>
               </div>
            </div>
         </div>
      </div>
                  {/* actual products list  */}

      <div className="right flex-[6]  ">
         <h2 className='text-center text-5xl font-page my-6'>All Products</h2>

         {/* <img src="" alt="" /> */}
         <div className='product-list flex flex-wrap justify-between gap-6'>
         {products?.map(item=>(
         <Card item={item} key={item.id}/>
         ))}
         </div>
      </div>
    </div>
  )
}

export default Products