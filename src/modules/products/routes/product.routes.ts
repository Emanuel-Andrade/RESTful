import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const ProductRouter = Router();

ProductRouter.get('/', ProductController.index);
ProductRouter.get('/:id', ProductController.show);
ProductRouter.post('/', ProductController.create);
ProductRouter.put('/', ProductController.update);
ProductRouter.delete('/:id', ProductController.delete);

export default ProductRouter;
