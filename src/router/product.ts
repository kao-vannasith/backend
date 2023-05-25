import express from 'express';

import { getAllProducts, updateProducts, addProduct } from '../controllers/product';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/product', isAuthenticated, getAllProducts);
  router.post('/addproduct', isAuthenticated, addProduct);
  router.put('/product/:id', isAuthenticated, updateProducts);
};
