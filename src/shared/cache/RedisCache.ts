import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from 'src/config/cache';

class RedisCache {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: any): Promise<void> {
    console.log(key);
    console.log(value);
  }

  // public async recover<T>(key: string): Promise<T | null> {}

  // public async invalidate(key: string): Promise<void> {}
}

export default new RedisCache();
