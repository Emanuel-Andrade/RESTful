import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import UserController from '../controllers/UserController';
import IsAuthenticated from '../middlewares/IsAuthenticated';

const routes = Router();

routes.get('/', IsAuthenticated.execute, UserController.index);
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
