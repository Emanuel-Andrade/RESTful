import { getCustomRepository } from 'typeorm';
import AppError from 'src/shared/errors/appError';
import EtherealMail from 'src/config/mail/Ethereal.mail';
import UserRepository from '../typeorm/repositories/UserRepository';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';

class SendForgotPasswordToEmailService {
  public async create(email: string): Promise<void> {
    const customUserRepository = getCustomRepository(UserRepository);
    const customUserTokenRepository = getCustomRepository(UserTokenRepository);

    const user = await customUserRepository.findByEmail(email);
    if (!user) throw new AppError('User does not exists.', 404);

    await customUserTokenRepository.generateToken(user.id);

    EtherealMail.send({
      to: email,
      body: `Email de recuperação de senha. Seu token é:${EtherealMail}`,
    });
  }
}
export default new SendForgotPasswordToEmailService();
