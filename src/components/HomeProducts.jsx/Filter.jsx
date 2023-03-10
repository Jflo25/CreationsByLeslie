import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Filter = () => {
   const catId = parseInt(useParams().id);
   const [maxPrice, setMaxPrice] = useState(100);
   const [sort, setSort] = useState(null);

  return (
   <div className="FilterAndProducts flex w-[90%]  mx-auto my-10"> 

   <div className="left flex-[1] sticky h-[100%] text-center mx-auto  ">
      <div className="filter-Item mb-8 ">
         <h2 className='text-4xl  font-page '>Product Categories</h2>
            <div className='filter-categories '>

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
      </div>

      <div className="filter-Item">
         <h2 className='text-4xl my-2 font-page'>Sort By</h2>
         <div className="filter-categories">
            <div className="inputItem">
               <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
               <label htmlFor="asc" className='product-items'>Price (Lowest)</label>
            </div>
            <div className="inputItem">
               <input type="radio" id='desc' value='desc' name='price' onChange={e=>setSort('desc')}/>
               <label htmlFor="desc" className='product-items'>Price (Highest)</label>
            </div>
         </div>
      </div>

      <div className="filter-Item">
         <h2 className='text-4xl font-page'>Filter by Price</h2>
            <div className="inputItem">
               <input type="range" min={0} max={100} onChange={(e)=>setMaxPrice(e.target.value)}/>
               <span>{maxPrice}</span>
            </div>
      </div>

   </div>
   </div>
  )
}

export default Filter