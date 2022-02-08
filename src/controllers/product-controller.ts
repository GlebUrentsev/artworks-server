/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import { productService } from '../services';

class ProductController {
  async getProducts(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response<any, Record<string, any>>> {
    try {
      const products = await productService.products();
      return res.json(products);
    } catch (e) {
      next(e);
    }
  }
}

const productController = new ProductController();

export { productController };
