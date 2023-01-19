import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import Cart from '../Cart/Cart';
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar h-20 ">
      <div className="wrapper flex  justify-around">
       

        <div className="nav-Logo text-4xl  hover:scale-110 my-3">
            <Link to="/" className='font-logo '>Creations by Leslie</Link> 
        </div>
             

        <div className="right flex items-center gap-[25px] pt-[10px] px-[30px] text-lg ">
            <div className="center  hover:scale-110">
              <Link to="/">Home</Link> 
            </div>
            <div className="center  hover:scale-110">
              <Link to="/About">About</Link> 
            </div>
            <div className="center  hover:scale-110">
              <Link to="/Contact">Contact</Link> 
            </div>


            <div className="icons flex gap-[15px] text-color-icons cursor-pointer ">
                <SearchIcon className=' hover:scale-110'/>
                <PersonOutlineIcon className=' hover:scale-110'/>
                <FavoriteBorderIcon className=' hover:scale-110'/>

                <div className="cartIcon relative flex items-center" onClick={()=>setOpen(true)}>
                 <ShoppingCartIcon className=' hover:scale-110'/>
                  <span className='text-sm w-3 h-5  rounded-[50%] bg-cyan-600 text-white
                   absolute top-[-10px] right-[-10px] flex items-center justify-center'>0</span>
                </div>
            </div>  
        </div>

        </div>
        <Cart openCart={open} closeCart={()=>setOpen(false)}/>
    </div>
  )
}

export default Navbar