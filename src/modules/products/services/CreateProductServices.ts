import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import ProductRepository from '../typeorm/ProductsRepository/ProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}
class CreateProduct {
  public async create({ name, price, quantity }: IRequest): Promise<IRequest> {
    const hasProduct = await ProductRepository.findByName(name);

    if (hasProduct)
      throw new AppError('There is already an product with this name');
    const product = ProductRepository.create({ name, price, quantity });
    ProductRepository.save(product);

    return product;
  }
}
export default new CreateProduct();
