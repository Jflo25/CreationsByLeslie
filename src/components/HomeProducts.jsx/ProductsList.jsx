import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'


const ProductsList = ({products}) => {

  return (
                  
   <div className='max-w-[100%]'>
      <h2 className='text-center text-5xl font-page my-6'>
      All Products
      </h2>

      <div className='product-list mx-5'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-5 '>
         {products?.map(item=>(
         <Card item={item} key={item.id} />
         ))};
         </div> 
      </div>
    </div>    
  )
}

export default ProductsList