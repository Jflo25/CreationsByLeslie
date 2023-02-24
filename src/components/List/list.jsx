import React, { useEffect, useState } from 'react'


const List = ({ products  } ) => {
  return (
    <div className='list grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-6 '>
      {/* {products?.map(item=>(
         <Card products={products} key={item.id}/>
      ))} */}

      {products.map((product) =>{
       return  <h1>{product.name}</h1>
      })}
    </div>


  )
}

export default List
