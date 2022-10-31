import AppError from 'src/shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customers';
import CustomerRepository from '../typeorm/repositories/CustomersRepository';

class ListCustomers {
  public async list(): Promise<Customer[]> {
    const customCustomerRepository = getCustomRepository(CustomerRepository);
    const users = await customCustomerRepository.find();
    if (users === undefined) throw new AppError('There is no users');

    return users;
  }

  public async findById(id: string): Promise<Customer> {
    const customCustomerRepository = getCustomRepository(CustomerRepository);
    const user = await customCustomerRepository.findById(id);
    if (user === undefined) throw new AppError('There is no user');

    return user;
  }
}
export default new ListCustomers();
