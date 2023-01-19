import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/list'
const Products = () => {

   const catId = parseInt(useParams().id)
   const [maxPrice, setMaxPrice] = useState(100)
   const [sort, setSort] = useState(null)

  return (
                                 //filter section 

    <div className="FilterAndProducts flex w-[90%]"> 

      <div className="left flex-[1] sticky h-[100%] my-auto mx-10">
         <div className="filter-Item mb-8">
            <h2 className='text-4xl font-page '>Product Categories</h2>
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
         <div className="filter-Item">
            <h2 className='text-4xl font-page'>Filter by Price</h2>
               <div className="inputItem">
                  <input type="range" min={0} max={100} onChange={(e)=>setMaxPrice(e.target.value)}/>
                  <span>{maxPrice}</span>
               </div>
         </div>
         <div className="filter-Item">
            <h2 className='text-4xl my-2 font-page'>Sort By</h2>
               <div className="inputItem">
                  <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
                  <label htmlFor="asc" className='product-items'>Price (Lowest first)</label>
               </div>
               <div className="inputItem">
                  <input type="radio" id='desc' value='desc' name='price' onChange={e=>setSort('desc')}/>
                  <label htmlFor="desc" className='product-items'>Price (Highest first)</label>
               </div>
         </div>
      </div>
                  {/* actual products list  */}

      <div className="right flex-[6]  ">
         <h2 className='text-center text-5xl font-page my-6'>All Products</h2>

         {/* <img src="" alt="" /> */}
         <List catId={catId} maxPrice={maxPrice} />
      </div>
    </div>
  )
}

export default Products