import { Router } from 'express';
import ProductRouter from 'src/modules/products/routes/product.routes';
import UserRoutes from 'src/modules/users/routes/users.routes';
import LoginRoutes from 'src/modules/users/routes/login.routes';
import passwordRoutes from 'src/modules/users/routes/password.routes';
import ProfileRoutes from 'src/modules/users/routes/profile.routes';

const routes = Router();

routes.use('/products', ProductRouter);
routes.use('/users', UserRoutes);
routes.use('/login', LoginRoutes);
routes.use('/password', passwordRoutes);
routes.use('/profile', ProfileRoutes);

export default routes;
