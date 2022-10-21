import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import RecoveryPassword from '../controllers/RecoveryPasswordController';

const routes = Router();

routes.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
    },
  }),
  RecoveryPassword.create,
);

routes.post(
  '/recovery',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  RecoveryPassword.create,
);

export default routes;
