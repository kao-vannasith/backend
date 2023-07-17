import express from 'express';

import { getAllProducts, updateProducts, addProduct } from '../controllers/products';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/products', isAuthenticated, getAllProducts);
  router.post('/addproducts', isAuthenticated, addProduct);
  router.put('/products/:id', isAuthenticated, updateProducts);
};
