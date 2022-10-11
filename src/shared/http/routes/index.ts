import { Router } from 'express';
import ProductRouter from 'src/modules/products/routes/product.routes';

const routes = Router();

routes.use('/products', ProductRouter);

export default routes;
