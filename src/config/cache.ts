import { load } from 'ts-dotenv/index';
import { RedisOptions } from 'ioredis';

interface ICacheOptions {
  config: {
    redis: RedisOptions;
  };
  driver: string;
}

const env = load({
  REDIS_HOST: String,
  REDIS_PASS: String,
  REDIS_PORT: Number || undefined,
});

export default {
  config: {
    redis: {
      host: env.REDIS_HOST,
      password: env.REDIS_PASS,
      port: env.REDIS_PORT,
    },
  },
  driver: 'redis',
} as ICacheOptions;
