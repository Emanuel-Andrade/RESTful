import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

class ListUsers {
  public async list(): Promise<User[]> {
    const customUserRepository = getCustomRepository(UserRepository);
    const users = await customUserRepository.find();

    return users;
  }
}
export default new ListUsers();
