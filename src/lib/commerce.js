// Import the Commerce module
import Commerce from '@chec/commerce.js';

// Create a Commerce instance
export const commerce = new Commerce('pk_498894f399dabb6d5a11ca2b9361d1dd316ee9382f068',true);

//list products
commerce.products.list().then((product) => console.log(product));



