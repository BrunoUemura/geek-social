import { Router } from 'express';
import { ListController } from '../controllers/ListController';
import { ListItemController } from '../controllers/ListItemController';
import { authMiddleware } from '../middlewares/authMiddleware';

const lists = Router();

lists.get('/lists', ListController.findAll);
lists.get('/lists/:id', ListController.findAllByUserId);
lists.get('/list/:id', ListController.findById);
lists.post('/list', authMiddleware, ListController.create);
lists.put('/list/:id', authMiddleware, ListController.update);
lists.delete('/list/:id', authMiddleware, ListController.delete);

lists.post('/list/:id/add', authMiddleware, ListItemController.create);
lists.put(
  '/list/:id/update/:itemId',
  authMiddleware,
  ListItemController.update,
);
lists.delete(
  '/list/:id/delete/:itemId',
  authMiddleware,
  ListItemController.delete,
);

export { lists };
