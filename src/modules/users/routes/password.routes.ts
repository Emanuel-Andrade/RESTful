import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import RecoveryPassword from '../controllers/CreatePasswordTokenController';

const routes = Router();

routes.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  RecoveryPassword.create,
);

routes.post(
  '/recovery',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required().min(6),
      passwordConfirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  RecoveryPassword.create,
);

export default routes;
