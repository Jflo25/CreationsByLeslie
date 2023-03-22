import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {commerce} from '../../lib/commerce.js';

function Product() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await commerce.products.retrieve(id);
      setItem(product);
    };

    fetchProduct();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
   <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={item.image.url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Creations by Leslie
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {item.name}
            </h1>
            <p className='mt-10'>
              {item.description}
            </p>
          
          </div>
          
          
          
        </div> 
       </div> 
      </section> 
   </div>
  );
}

export default Product;