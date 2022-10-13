import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}
class CreateUser {
  public async create({ name, password, email }: IRequest): Promise<IRequest> {
    const customUserRepository = getCustomRepository(UserRepository);

    const emailExist = await customUserRepository.findByEmail(email);
    if (emailExist) throw new AppError('Email address already registered');
    const product = customUserRepository.create({ name, email, password });
    customUserRepository.save(product);

    return product;
  }
}
export default new CreateUser();
