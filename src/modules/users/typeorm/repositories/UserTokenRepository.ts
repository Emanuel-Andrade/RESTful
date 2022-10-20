import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokenRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const result = await this.findOne({
      where: {
        token,
      },
    });
    return result;
  }

  public async findByUserId(user_id: string): Promise<UserToken[] | undefined> {
    const result = await this.find({
      where: {
        user_id,
      },
    });
    return result;
  }

  public async findById(id: string): Promise<UserToken | undefined> {
    const result = await this.findOne({
      where: {
        id,
      },
    });
    return result;
  }

  public async generateToken(user_id: string): Promise<UserToken | undefined> {
    const result = await this.create({
      user_id,
    });

    this.save(result);
    return result;
  }
}

export default UserTokenRepository;
