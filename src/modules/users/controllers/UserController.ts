import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';
import CreateUserService from '../services/CreateUserService';
import ListUsersService from '../services/ListUsersService';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const result = await ListUsersService.list();
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

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await ListUsersService.findById(id);
    return res.json(result);
  }
}

export default new UserController();
