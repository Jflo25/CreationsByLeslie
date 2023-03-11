import React from 'react'
import { Link } from 'react-router-dom'


const Slider = ({item}) => {


return (
<Link to={`product/${item.id}`}>
    <div className='product-card max-w-[200px] max-h-[300px] rounded-xl border-slate-200 border-4 overflow-hidden shadow-2xl hover:scale-110 mx-auto'>
      <div className='w-[200px] h-[300px]'>
        <div className='img-container aspect-[3/2] object-contain'>
          <img src={item.image.url} alt='/' />
        </div>

        <h2 className='product-name font-page font-black text-2xl h-[65px] text-center object-contain flex items-center justify-center '>
          {item.name}
        </h2> 
        
        <div className="product-price text-gray-900 text-lg flex justify-around">
          <h3 className=''>${item.price.formatted}</h3>
        </div>

        <div className="checkout-btn text-center">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-auto '>
          Add to cart
          </button>
        </div>

      </div>
    </div>
   </Link>
)
}
export default Slider
