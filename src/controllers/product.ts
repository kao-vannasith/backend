import express from 'express';

import { getProducts, getProductsById, createProduct } from '../db/product';

export const addProduct = async (req: express.Request, res: express.Response) => {
    try {
      const { detail, status } = req.body;
  
      if (!detail || !status) {
        return res.sendStatus(400);
      }

      const product = await createProduct({
        detail,
        status,
        
      });
  
      return res.status(200).json(product).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

export const getAllProducts = async (req: express.Request, res: express.Response) => {
  try {
    const product = await getProducts();

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateProducts = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { detail } = req.body;

    if (!detail) {
      return res.sendStatus(400);
    }

    const product = await getProductsById(id);
    
    product.detail = detail;
    await product.save();

    return res.status(200).json(product).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}