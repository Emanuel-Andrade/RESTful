import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import UserRepository from '../typeorm/repositories/UserRepository';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';

class SendForgotPasswordToEmailService {
  public async create(email: string): Promise<void> {
    const customUserRepository = getCustomRepository(UserRepository);
    const customUserTokenRepository = getCustomRepository(UserTokenRepository);

    const user = await customUserRepository.findByEmail(email);
    if (!user) throw new AppError('User does not exists.', 404);

    const token = await customUserTokenRepository.generateToken(user.id);
    console.log(token);
  }
}
export default new SendForgotPasswordToEmailService();