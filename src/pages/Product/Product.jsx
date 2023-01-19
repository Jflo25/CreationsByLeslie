import React, {useState} from 'react'
import tanhoodie2 from '../.././components/assets/tanhoodie.jpg'
import tansweater from '../.././components/assets/tansweater.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const images = [
    tanhoodie2,
    tansweater
  ]

  return (
                      //individual product section when clicked upon
    <div className="product py-5 px-14 flex gap-14">
      <div className="left flex-[1] flex gap-5">
        <div className="images flex-[1] w-60">
          <img className='product-mini' src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
          <img className='product-mini' src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
        </div>
        <div className="mainImg flex-[5] h-[800px] m-5 ">
          <img className='w-[100%] h-[100%] ' src={images[selectedImg]} alt="" />
        </div>
      </div> 


      <div className="right flex flex-col flex-[1] gap-7">
        <h1 className='text-2xl'>Product Title</h1>
        <span className='text-xl font-medium'>$60</span>
        <p className='text-lg font-light text-justify'>Products Description</p>
        <div className="quantity flex items-center gap-3">
          <button className='text-xl quantity-button font-extrabold mr-2' onClick={()=>setQuantity((prev)=> (prev === 0 ? 0 : prev-1))}>-</button>
            {quantity}
          <button className='text-xl quantity-button font-extrabold ml-2' onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add bg-[#2879fe] text-center rounded-2xl w-80 p-3 text-white mx-auto flex gap-5 cursor-pointer'>
          <AddShoppingCartIcon className=' '/> ADD TO CART
          </button>
         <div className="links flex gap-5">
          <div className="item items-center flex gap-3 text-[#2879fe] ">
            <FavoriteBorderIcon/> ADD TO FAVORITES
          </div>
         </div> 
         <hr className='w-[100%] bg-slate-900 h-1' />
         <div className='product-info flex flex-col gap-3 text-[#2879fe] text-base mt-5'>
        <span >Material: cotton 90%, Polyester 10%</span>
        <span>Product Type: hoodie</span>
        <span>Related Tags: anime</span>
      </div>

      </div>
    </div>
  )
}
export default Product