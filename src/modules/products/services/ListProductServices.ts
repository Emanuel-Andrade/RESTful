import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/repositories/ProductsRepository';

class ListProducts {
  public async list(): Promise<Product[]> {
    const CProductRepository = getCustomRepository(ProductRepository);
    const products = await CProductRepository.find();
    if (products === undefined) throw new AppError('There is no products');

    return products;
  }
}
export default new ListProducts();
