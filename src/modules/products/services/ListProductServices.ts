import AppError from 'src/shared/errors/appError';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/ProductsRepository/ProductsRepository';

class ListProducts {
  public async list(): Promise<Product[]> {
    const products = await ProductRepository.find();
    if (products) throw new AppError('There is no products');

    return products;
  }
}
export default new ListProducts();
