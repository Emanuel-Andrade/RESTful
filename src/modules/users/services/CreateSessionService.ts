import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import { compare } from 'bcryptjs';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';

interface IRequest {
  email: string;
  password: string;
}

// interface IResponse {
//   user: User;
// }

class CreateUserSession {
  public async login({ password, email }: IRequest): Promise<User> {
    const customUserRepository = getCustomRepository(UserRepository);

    const user = await customUserRepository.findByEmail(email);
    if (!user) throw new AppError('Email or Password incorrect', 401);

    const isPassword = await compare(password, user.password);
    if (!isPassword) throw new AppError('Email or Password incorrect', 401);
    return user;
  }
}
export default new CreateUserSession();
