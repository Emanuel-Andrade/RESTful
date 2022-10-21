import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import UserRepository from '../typeorm/repositories/UserRepository';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';

interface IRequest {
  email: string;
}
class SendForgotPasswordToEmailService {
  public async create({ email }: IRequest): Promise<void> {
    const customUserRepository = getCustomRepository(UserRepository);
    const customUserTokenRepository = getCustomRepository(UserTokenRepository);

    const user = await customUserRepository.findByEmail(email);
    if (!user) throw new AppError('User does not exists.', 404);

    await customUserTokenRepository.generateToken(user.id);
  }
}
export default new SendForgotPasswordToEmailService();
