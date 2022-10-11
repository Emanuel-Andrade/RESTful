import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/ProductsRepository/ProductsRepository';

class CreateProduct {
  public async show(id: string): Promise<Product> {
    const CProductRepository = getCustomRepository(ProductRepository);
    const product = await CProductRepository.findOne(id);

    if (!product) throw new AppError('There is no product with this id');
    return product;
  }
}
export default new CreateProduct();
