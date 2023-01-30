import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-11/12 xl:w-4/5 h-[350px] m-auto bg-indigo-200 rounded-3xl'>
      <div className='w-full h-full flex justify-center'>
        <div className='w-11/112 xl:w-1/2 p-5 space-y-5'>
          <h1 className='text-6xl  font-logo'>Creations by Leslie</h1>
            <div className='statement'>
            <p className=' text-lg font-semibold'>Stand out from the crowd with our
             <span className='font-logo text-3xl pl-1 font-thin'>unique apparel</span>.</p>
            </div>
            <div className="social-icons flex ">
            <a href="https://www.facebook.com/Sweetss.by.Leslie" target="_blank">
              <div className="icon facebook px-3">
                <FaFacebook fontSize={30}/>
              </div>
            </a>
            <a href="https://www.instagram.com/creationssbylesliee/" target="_blank">
              <div className="icon instagram px-3 ">
                <FaInstagram fontSize={30} />
              </div>
            </a>
            <a href="mailto:leslieytrejo.lt@gmail.com" target="_blank">
              <div className="icon Email px-3">
                <AiOutlineMail fontSize={30} />
              </div>
            </a>
          </div>
        </div>
        
      </div>

     
     
    </div>
  )
}

export default Hero