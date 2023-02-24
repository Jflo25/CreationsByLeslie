import React from 'react'
import Card from '../Card/Card'

import bhoodie from '../assets/bhoodie.jpg'
import bhoodie2 from '../assets/bhoodie2.jpg'
import tanhoodie from '../assets/tanhoodie.jpg'
import tanhoodie2 from '../assets/tanhoodie2.jpg'
import tansweater from '../assets/tansweater.jpg'
import greysweater from '../assets/greysweater.jpg'
 
export const data = [
   {
      id:1,
      img:bhoodie2,
      title: 'Black Anime hoodie',
      isNew: true,
      oldPrice: 60,
      price: 50,
   },
   {
      id:2,
      img:tanhoodie2,
      title:'Tan Naruto hoodie',
      isNew: true,
      oldPrice: 70,
      price: 50,
   },
   {
      id:3,
      img:greysweater,
      title:'Grey Nike Stitch Sweater',
      isNew: true,
      oldPrice: 60,
      price: 45,
   },
   {
      id:4,
      img:tansweater,
      title:'Tan Nike Butterfly sweater',
      isNew: true,
      oldPrice: 60,
      price: 50,
   },
   {
      id:5,
      img:bhoodie,
      title:'Tan Nike Butterfly sweater',
      isNew: true,
      oldPrice: 60,
      price: 50,
   },
   {
      id:6,
      img:tanhoodie,
      title:'Tan Nike Butterfly sweater',
      isNew: true,
      oldPrice: 60,
      price: 50,
   }

]

const List = () => {
 
  return (
    <div className='list grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-6 '>
      {data?.map(item=>(
         <Card item={item} key={item.id}/>
      ))}
    </div>


  )
}

export default List
