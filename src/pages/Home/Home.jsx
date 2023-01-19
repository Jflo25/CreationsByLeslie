import React from 'react'
import Featured from '../../components/FeaturedProducts/Featured'
import Products from '../Products/Products'
import Hero from '../../components/Hero/Hero'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured />
      <Products/>
    </div>
  )
}

export default Home