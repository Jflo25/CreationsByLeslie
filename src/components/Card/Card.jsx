import React from 'react'
import { Link } from 'react-router-dom'
import { commerce } from '../../lib/commerce';





const Card = ({products}) => {

 
return (
   <Link to={'/product/${products.id}'}>
    <div className='card max-w-[90%] max-h-2xl rounded-xl border-slate-200 border-4 overflow-hidden shadow-2xl hover:scale-110 mx-auto'>
      <div className='img-container aspect-[3/2] object-contain'>
        
      <img src={products.image} alt='/' className='mainImg  w-[100%] max-h-80 object-cover ' />
      {/* <img src={item.img2} alt='/' className='mainImg' /> */}
      </div>

    <h2 className='font-page font-black text-2xl h-[65px] text-center object-contain flex items-center justify-center '>{products.name}</h2> 
    <div className="prices text-gray-900 text-lg flex justify-around">
      <h3 className=''>${products.price}</h3>
    </div> 
    <div className="checkout-btn text-center">
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
      Add to cart
      </button>
    </div> 
    </div>
   </Link>
)
}
export default Card
