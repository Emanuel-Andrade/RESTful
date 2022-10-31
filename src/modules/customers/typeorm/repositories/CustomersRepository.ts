import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/Customers';

@EntityRepository(User)
class CustomersRepository extends Repository<User> {
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

  public async findById(id: string): Promise<User | undefined> {
    const result = await this.findOne({
      where: {
        id,
      },
    });
    return result;
  }
}

export default CustomersRepository;
