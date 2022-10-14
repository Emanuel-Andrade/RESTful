import { Router } from 'express';
import ProductRouter from 'src/modules/products/routes/product.routes';
import UserRoutes from 'src/modules/users/routes/product.routes';

const routes = Router();

routes.use('/products', ProductRouter);
routes.use('/users', UserRoutes);

export default routes;
