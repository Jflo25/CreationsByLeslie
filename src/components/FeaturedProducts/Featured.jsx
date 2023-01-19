import React from 'react'
import Slider from './Slider';
import  { data }  from '../List/list';


const Featured = () => {
  
 return (
    <div className='container mx-auto mt-10 '>
     
      <div className='header w-full'>
          <h1 className='text-5xl text-center font-page mb-6'>Featured products</h1>
      </div>
      
                  {/* //Marquee slider component  */}

       <div className="marquee  bottom gap-14 flex animate-marquee2 w-auto hover:pause max-h">
          {data.map(item=>(
             <Slider item={item} 
             key={item._id}/>
          ))}
       </div>

    </div>
    
  )
}


export default Featured