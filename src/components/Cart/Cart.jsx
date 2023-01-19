import React, {useState} from 'react'
import bhoodie2 from '../assets/bhoodie.jpg'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({openCart, closeCart}) => {
   const data = [
      {
         id:1,
         img:bhoodie2,
         title: 'Black Anime hoodie',
         isNew: true,
         oldPrice: 60,
         price: 50,
      }
   ]

  if(!openCart) return null
  return (

    <div onClick={closeCart} className="overlay flex justify-end z-[1] ">
      <div onClick={(e)=> {
      e.stopPropagation()   
      }} className="cart-container 2xl:w-[600px] 2xl:h-[700px] ">

      <div onClick={closeCart} className=" closeBtn cursor-pointer w-auto mx-10 pt-10 flex justify-between text-xl font-medium ">
         <span className='font-page text-3xl underline' >Products in cart</span>
         <span>X</span>
       </div>
      
      <div className='product  w-auto mx-5 '>
         {/* <h1 className=' text-2xl font-bold '>Products in your cart</h1> */}
         {data?.map(product=>(
            <div className="cart text-center flex   " key={product.id}>
               <img className='w-52 rounded-lg shadow-2xl ' src={product.img} alt="" />
               <div className="product-details mt-10 grid grid-cols-2 mx-auto ">
                  
                  <h1 className='text-2xl font-medium font-page'>{product.title}</h1>
                  <DeleteIcon className='remove-product ml-auto '/>
               
               <div className="price ">
                  <p>1x ${product.price}</p>
               </div>
               </div>
              
            </div>
         ))}
         <div className="total text-center flex justify-end space-x-24">
            <span className='p-1'>SUBTOTAL</span>
            <span className='pr-10'>$Dollar amount $</span>
         </div>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
      Proceed To Checkout
      </button>
         <hr />
         <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-5'>
      Reset Cart
      </button>
      </div>
      </div>
    </div>
  )
}

export default Cart