import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { load } from 'ts-dotenv/index';
import AppError from '../errors/appError';
import routes from './routes';
import '../typeorm';

const app = express();
const env = load({
  PORT: String,
  DATABASE_USERNAME: String,
  DATABASE_PASSWORD: String,
  DATABASE_DATABASE: String,
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response
      .json({
        status: 'error',
        message: error.message,
      })
      .status(400);
  }
  return response
    .json({
      status: 'error',
      message: 'Internal server error',
    })
    .status(500);
});
app.listen(env.PORT, () => {
  console.log(`server is running on ${env.PORT}`);
});
