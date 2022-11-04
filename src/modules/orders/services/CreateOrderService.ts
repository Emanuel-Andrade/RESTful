import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import CustomerRepository from 'src/modules/customers/typeorm/repositories/CustomersRepository';
import ProductRepository from 'src/modules/products/typeorm/repositories/ProductsRepository';
import Order from '../typeorm/entities/Order';
import OrderRepository from '../typeorm/repositories/OrderRepository';

interface IProducts {
  id_product: string;
  quantity: number;
}

interface IRequest {
  id_customer: string;
  products: IProducts[];
}
class CreateOrderService {
  public async create({ id_customer, products }: IRequest): Promise<Order> {
    const customOrderRepository = getCustomRepository(OrderRepository);
    const customCustomerRepository = getCustomRepository(CustomerRepository);
    const customProductRepository = getCustomRepository(ProductRepository);

    const customerExist = await customCustomerRepository.findById(id_customer);
    if (!customerExist) throw new AppError('Customer does not exists.');

    const productsExists = await customProductRepository.findAllByIds(products);
    if (!productsExists) throw new AppError('product does not exists.');
    const productsExistsIds = productsExists.map((product) => product.id);
    const checkInexistentProducts = products.filter(
      (product) => !productsExistsIds.includes(product.id_product),
    );
    if (checkInexistentProducts)
      throw new AppError(
        `could not find product: ${checkInexistentProducts[0].id_product}`,
      );

    const checkUnavailableQuantity = productsExists.filter((product) =>
      products.filter(
        (p) => p.id_product === product.id && p.quantity > product.quantity,
      ),
    );
    if (checkUnavailableQuantity)
      throw new AppError(
        `Ordered quantity for the product: ${checkUnavailableQuantity[0].name} is greater than the in-stock quantity`,
      );
    const serializedProducts = products.map((product) => ({
      product_id: product.id_product,
      quantity: product.quantity,
      price: productsExists.filter((p) => p.id === product.id_product)[0].price,
    }));

    const order = customOrderRepository.createOrder({
      customer: customerExist,
      products: serializedProducts,
    });
  }
}
export default new CreateOrderService();
