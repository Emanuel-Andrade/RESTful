import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import customerController from '../controllers/CustomersController';
import IsAuthenticated from '../middlewares/IsAuthenticated';

const routes = Router();

routes.get('/', IsAuthenticated.execute, customerController.index);
routes.get('/:id', IsAuthenticated.execute, customerController.findOne);
routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  customerController.create,
);

routes.put(
  '/:id',
  IsAuthenticated.execute,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    },
  }),
  customerController.update,
);

routes.delete(
  '/:id',
  IsAuthenticated.execute,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    },
  }),
  customerController.update,
);

export default routes;
