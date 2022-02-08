import { Product } from '../models';

class ProductService {
  public async products() {
    const dbProducts = await Product.find({});

    if (!dbProducts) {
      throw new Error('Продукты не найдены');
    }
    return dbProducts;
  }
}
const productService = new ProductService();

export { productService };
