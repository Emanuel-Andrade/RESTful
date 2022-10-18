import { Request, Response } from 'express';
import UploadUserAvatarService from '../services/UploadUserAvatarService';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { filename } = req.body;
    const user = UploadUserAvatarService.execute({
      userId: req.user.id,
      avatarFileName: filename,
    });
    return res.json(user);
  }
}

export default new UserController();
