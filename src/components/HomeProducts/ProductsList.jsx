import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '../../pages/Product/Product'
import Card from '../Card/Card'


const ProductsList = ({products}) => {

  return (
                  
   <div className='max-w-[100%]'>
      <h2 className='text-center text-5xl font-page my-6'>
      All Products
      </h2>

      <div className='product-list mx-5'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3  gap-5 '>
         {products?.map(item=>(
         <Link to={`/product/${item.id}`}  element={<Product/>}  key={item.id} >  
         <Card item={item}/>
         </Link>
         ))};

         </div> 
      </div>
    </div>    
  )
}

export default ProductsList