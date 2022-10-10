import AppError from 'src/shared/errors/appError';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/ProductsRepository/ProductsRepository';

class CreateProduct {
  public async show(id: string): Promise<Product> {
    const product = await ProductRepository.findOne(id);

    if (!product) throw new AppError('There is no product with this id');

    await ProductRepository.remove(product);
    return product;
  }
}
export default new CreateProduct();
