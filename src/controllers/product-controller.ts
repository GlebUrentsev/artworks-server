/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
// import { productService } from '../services';

class ProductController {
  async getProducts(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response<any, Record<string, any>>> {
    try {
      const query = req.query;
      // const products = await productService.products();
      console.log(query);
      return res.json('We get some products');
    } catch (e) {
      next(e);
    }
  }
}

const productController = new ProductController();

export { productController };
