import React, {useEffect, useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {commerce} from '../../lib/commerce.js'
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card.jsx';

const Product = ({item}) => {
   const { id } = useParams();
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

 
const fetchProducts = async () => {
     try {
       const { data } = await commerce.products.retrieve(id);
       setProducts(data);
       setIsLoading(false);
     } catch (error) {
       console.log("Error fetching product id id: ${id}:", error);
       setError(error);
       setIsLoading(false);
     }
   };

   

 
   useEffect(() => {
     fetchProducts();
   }, []);
 
   if (isLoading) {
     return <p className='font-page text-4xl text-center'>Loading product...</p>;
   }
 
   if (error) {
     return <p>Error fetching products: {error.message}</p>;
   };


   

  return (
   <div className='container mx-auto mt-8'>
   <Card item={item} key={item.id} showAddToCart={false} />
 </div>
);

}
export default Product