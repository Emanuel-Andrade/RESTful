import ProductRepository from '../typeorm/ProductsRepository/ProductsRepository';
import Product from '../typeorm/entities/Product';

class CreateProduct {
  public async create(product: Product): Promise<void> {
    ProductRepository.create(product);
  }
}
export default new CreateProduct();
