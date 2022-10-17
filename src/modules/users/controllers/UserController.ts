import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';
import CreateUserService from '../services/CreateUserService';
import ListUsersService from '../services/ListUsersService';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const result = await ListUsersService.list();
    console.log(result);
    return res.json(result);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const result = await CreateUserService.create(data);
    return res.json(result);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const result = await CreateSessionService.login(data);
    return res.json(result);
  }
}

export default new UserController();
