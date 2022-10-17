import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import auth from 'src/config/auth';
import AppError from 'src/shared/errors/appError';

class IsAuthenticated {
  execute(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers.authorization;
    if (!token) throw new AppError('JTW Token is missing.', 401);

    try {
      verify(token.split(' ')[1], auth.jwt.secret);

      return next();
    } catch {
      throw new AppError('JWT Token is incorrect', 401);
    }
  }
}

export default new IsAuthenticated();
