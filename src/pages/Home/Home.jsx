import React, { useEffect, useState } from 'react'
import Featured from '../../components/FeaturedProducts/Featured'
import Products from '../Products/Products'
import Hero from '../../components/Hero/Hero'
import {commerce} from '../../lib/commerce.js'

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
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }
  return (
    <div>
      <Hero/>
      {products.length > 0 && <Featured products={products}/>}
      {products.length > 0 && <Products products={products}/>}
    </div>
  )
}

export default Home