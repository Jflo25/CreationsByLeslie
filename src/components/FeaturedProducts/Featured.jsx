import React, { useEffect, useState } from 'react'
import Slider from './Slider';
import { commerce } from '../../lib/commerce';


const Featured = () => {
   const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    
  }, []);
  
 return (
    <div className='container mx-auto mt-10 '>
     
      <div className='header w-full'>
          <h1 className='text-5xl text-center font-page mb-6'>Featured products</h1>
      </div>
      
                  {/* //Marquee slider component  */}

       <div className="marquee  bottom gap-14 flex animate-marquee2 w-auto hover:pause max-h">
          {products.map(item=>(
             <Slider products={products}
             key={products.item}/>
          ))}
       </div>

    </div>
    
  )
}


export default Featured