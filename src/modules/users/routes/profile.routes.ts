import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import IsAuthenticated from '../middlewares/IsAuthenticated';
import ProfileController from '../controllers/ProfileController';

const routes = Router();

routes.get('/', IsAuthenticated.execute, ProfileController.show);
routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      old_password: Joi.string().min(6),
      password: Joi.string().min(6).optional(),
      password_confirmation: Joi.string()
        .valid(Joi.ref('password'))
        .when('password', {
          is: Joi.exist(),
          then: Joi.required(),
        }),
    },
  }),
  ProfileController.update,
);

export default routes;
