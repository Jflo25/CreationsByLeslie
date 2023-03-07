import React, { useEffect, useState } from 'react'
import Featured from '../../components/FeaturedProducts/Featured'
import Hero from '../../components/Hero/Hero'
import {commerce} from '../../lib/commerce.js'
import ProductsList from '../../components/HomeProducts.jsx/ProductsList'
import Filter from '../../components/HomeProducts.jsx/Filter'

const Home = () => {
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
  }
  return (
    <div>
      <Hero/>
       <Featured products={products}/>
       <div >
        <Filter/>
        <ProductsList products={products}/>
       </div>
    </div>
  )
}

export default Home