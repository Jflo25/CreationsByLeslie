import React, { useEffect, useState } from 'react'
import ProductCard from '../Card/ProductCard'

import bhoodie from '../assets/bhoodie.jpg'
import bhoodie2 from '../assets/bhoodie2.jpg'
import tanhoodie from '../assets/tanhoodie.jpg'
import tanhoodie2 from '../assets/tanhoodie2.jpg'
import tansweater from '../assets/tansweater.jpg'
import greysweater from '../assets/greysweater.jpg'
import { commerce } from '../../lib/commerce'
 
export const products = [
   {
      id:1,
      image:bhoodie2,
      name: 'Black Anime hoodie',
      isNew: true,
      // oldPrice: 60,
      price: 50,
   },
   {
      id:2,
      image:tanhoodie2,
      name:'Tan Naruto hoodie',
      isNew: true,
      // oldPrice: 70,
      price: 50,
   },
   {
      id:3,
      image:greysweater,
      name:'Grey Nike Stitch Sweater',
      isNew: true,
      // oldPrice: 60,
      price: 45,
   },
   {
      id:4,
      image:tansweater,
      name:'Tan Nike Butterfly sweater',
      isNew: true,
      // oldPrice: 60,
      price: 50,
   },
   {
      id:5,
      image:bhoodie,
      name:'Tan Nike Butterfly sweater',
      isNew: true,
      // oldPrice: 60,
      price: 50,
   },
   {
      id:6,
      image:tanhoodie,
      name:'Tan Nike Butterfly sweater',
      isNew: true,
      // oldPrice: 60,
      price: 50,
   }

const List = ({products}) => {
 

  return (
    <div className='list flex flex-wrap justify-between gap-6'>
      {products?.map(item=>(
         <Card item={item} key={item.id}/>
      ))}
    </div>


  )
}

export default List
