import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByName(name: string): Promise<User[] | undefined> {
    const result = await this.find({
      where: {
        name,
      },
    });
    return result;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const result = await this.findOne({
      where: {
        email,
      },
    });
    return result;
  }
}

export default UserRepository;
