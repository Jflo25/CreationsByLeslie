import { AddShoppingCart } from '@mui/icons-material'
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {


return (
  //  <Link to={'/product/${item.id}'}>
  //   <div className='card max-w-[90%] max-h-2xl rounded-xl border-slate-200 border-4 overflow-hidden shadow-2xl hover:scale-110'>
  //     <div className='img-container aspect-[3/2] object-contain'>
        
  //     <img src={products.img} alt='/' className='mainImg  w-[100%] max-h-80 object-cover ' />
  //     {/* <img src={item.img2} alt='/' className='mainImg' /> */}
  //     </div>

  //   <h2 className='font-page font-black text-2xl h-[65px] text-center object-contain flex items-center justify-center '>{products.title}</h2> 
  //   <div className="prices text-gray-900 text-lg flex justify-around">
  //     <h3 className='line-through  text-gray-500'>${products.oldPrice}</h3>
  //     <h3 className=''>${products.price}</h3>
  //   </div> 
  //   <div className="checkout-btn text-center">
  //   <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
  //     Add to cart
  //     </button>
  //   </div> 
  //   </div>
  //  </Link>

   <Card >
      <CardMedia image={product.media.source} title={product.name} />
      <CardContent>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="Add to Cart" >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
)
}
export default ProductCard
