import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/', UserController.index);
routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  UserController.create,
);

export default routes;
