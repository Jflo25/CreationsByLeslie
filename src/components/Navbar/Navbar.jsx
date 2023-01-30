import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa';
import Cart from '../Cart/Cart';
import {Link} from 'react-router-dom'
 

const Navbar = () => {
  const [openC, setOpenC] = useState(false)
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };
 
  return (
    <div className='navbar-container pb-20 max-w-[90%] mx-auto'>
    <div className='flex justify-between items-center h-20 px-4 absolute z-10 w-[90%] '>
<div>
  <h1 onClick={handleNav} className={logo ? 'hidden' : 'font-logo'}>Creations by Leslie</h1>
</div>
<ul className='nav-list hidden md:flex font-page  '>
    <Link to='/' smooth={true} duration={500}><li className=''>Home</li></Link>
    <Link to='/Products' smooth={true} duration={500} ><li className=''>Products</li></Link>
    <Link to='/Contact' smooth={true} duration={500}><li>Contact</li></Link>
    <Link to='/About' smooth={true} duration={500}><li>About</li></Link>
</ul>
{/* <div className='hidden md:flex'>
  <BiSearch className='' size={20} />
  <BsPerson size={20} />
</div> */}

{/* SHOPPING CART POP-UP */}
<div className="cart-Icon relative justify-between cursor-pointer" onClick={()=>setOpenC(true)}>
  <ShoppingCartIcon  className=' hover:scale-110 '/>
  <span className='text-sm w-4 h-5  rounded-[50%] bg-cyan-600 text-white absolute top-[-10px] right-[-10px] flex items-center justify-center'>0</span>
</div>
<Cart openCart={openC} closeCart={()=>setOpenC(false)}/>


{/* Hamburger */}
<div onClick={handleNav} className='md:hidden z-10 ml-28 cursor-pointer '>
  {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
</div>

{/* Mobile menu dropdown */}
<div onClick={handleNav} className={nav ? 'absolute text-slate-800 left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
  <ul className='mobile-nav'> 
    <h1 className='font-logo pb-5 md:hidden'> Creations By Leslie</h1>
    <Link to='/' smooth={true} duration={500}><li className=''>Home</li></Link>
    <Link to='/Products' smooth={true} duration={500} ><li>Products</li></Link>
    <Link to='/Contact' smooth={true} duration={500}><li>Contact</li></Link>
    <Link to='/About' smooth={true} duration={500}><li>About</li></Link>
  
    <div className='flex gap-12 my-6'>
      <FaFacebook size={25} className='icon' />
      <FaInstagram size={25} className='icon' />
    </div>
  </ul>
</div>
</div>
    </div>
  )
}

export default Navbar





