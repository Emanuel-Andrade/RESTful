import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import UserController from '../controllers/UserController';

const routes = Router();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  UserController.login,
);

export default routes;
