import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider';
import Product from '../../pages/Product/Product';

const Featured = ({products}) => {
  
 return (
    <div className='container mx-auto mt-10 '>
     
      <div className='header w-full'>
          <h1 className='text-5xl text-center font-page mb-6'>Featured products</h1>
      </div>
      
                  {/* //Marquee slider component  */}

       <div className="marquee  bottom gap-14 flex animate-marquee2 w-auto hover:pause max-h">
          {products.map(item=>(
            <Link to={`/product/${item.id}`} element={<Product/>}  key={item.id}>
               <Slider item={item}/>
            </Link> 
          ))}
       </div>

    </div>
    
  )
}


export default Featured