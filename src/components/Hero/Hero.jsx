import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='max-w-[85%]  m-auto bg-indigo-200 rounded-3xl'>
      <div className='w-[85%] h-full flex justify-center mx-auto'>
        <div className='w-11/112 xl:w-1/2 p-5 space-y-5'>
          <div className=''>
          <h1 className='font-hero '>Creations by Leslie</h1>
          </div>
            <div className='statement'>
            <p className='font-page text-lg   '>Stand out from the crowd with our
             <span className='font-logo2 pl-2 text-2xl font-semibold'>unique apparel</span>.</p>
            </div>
            <div className="social-icons flex ">
            <a href="https://www.facebook.com/Sweetss.by.Leslie" target="_blank">
              <div className="icon facebook px-3">
                <FaFacebook fontSize={25}/>
              </div>
            </a>
            <a href="https://www.instagram.com/creationssbylesliee/" target="_blank">
              <div className="icon instagram px-3 ">
                <FaInstagram fontSize={25} />
              </div>
            </a>
            <a href="mailto:creationsbyleslie1@gmail.com" target="_blank">
              <div className="icon Email px-3">
                <AiOutlineMail fontSize={25} />
              </div>
            </a>
          </div>
        </div>
        
      </div>

     
     
    </div>
  )
}

export default Hero