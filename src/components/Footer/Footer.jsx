import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import stripeBadge from '../assets/stripeBadge.png'
const Footer = () => {
  return (
    <div className='container h-[500px]'>
    <div className=' w-[90%] h-[450px] mx-auto bg-indigo-200 rounded-3xl flex flex-col mt-10 pb-10'>
                  {/* Links */}
      <div className="footer-top flex mt-10">
        <div className="footer-links  mx-auto ">
          <h1 className='footer-links font-page text-4xl'>Links</h1>
          <div className="center  hover:scale-110">
              <Link to="/CreationsByLeslie" className='font-page text-2xl'>Home</Link> 
            </div>
            <div className="center  hover:scale-110">
              <Link to="/About" className='font-page text-2xl'>About</Link> 
            </div>
            <div className="center  hover:scale-110">
              <Link to="/Contact" className='font-page text-2xl'>Contact</Link> 
            </div>
        </div>
                             {/* logo  */}
        <div className="footer-logo hidden sm:block my-auto  text-6xl">
          <Link to='/' className='font-logo'>Creations By Leslie</Link>
        </div>

        <div className="footer-socials  item-customization">
          <h1 className=' text-4xl font-page'>Socials</h1>
          
            <a href="https://www.facebook.com/Sweetss.by.Leslie" target="/">
              <div className="icon facebook px-3">
                <FaFacebook fontSize={30}/>
              </div>
            </a>
             
            <a href="https://www.instagram.com/creationssbylesliee/" target="/">
              <div className="icon instagram px-3 ">
                <FaInstagram fontSize={30} />
              </div>
            </a>

            <a href="mailto:leslieytrejo.lt@gmail.com" target="/">
              <div className="icon Email px-3">
                <AiOutlineMail fontSize={30} />
              </div>
            </a>
        </div>
      </div>

     
      <div className="footer-bottom h-30% grid grid-cols-1 sm:flex items-center justify-between my-12  ">
        <div className="left-side mx-auto text-center   ">
          <p className='logo font-black font-logo text-3xl mr-2'>Creations by Leslie</p>
          <p className='Copyright font-p mt-1'>@ CopyRight 2023. All Rights Reserved</p>
        </div>

        <div className="right-side ">
          <img className='h-[75%] w-3/4 mx-auto ' src={stripeBadge} alt="/" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer