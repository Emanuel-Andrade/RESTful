import AppError from 'src/shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

class ListUsers {
  public async list(): Promise<User[]> {
    const customUserRepository = getCustomRepository(UserRepository);
    const users = await customUserRepository.find();
    if (users === undefined) throw new AppError('There is no products');

    return users;
  }
}
export default new ListUsers();
