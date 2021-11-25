import { Router } from 'express';
import { ListController } from '../controllers/ListController';
import { authMiddleware } from '../middlewares/authMiddleware';

const lists = Router();

lists.get('/lists', ListController.findAll);
lists.get('/lists/:id', ListController.findAllByUserId);
lists.get('/list/:id', ListController.findById);
lists.post('/list', authMiddleware, ListController.create);
// lists.put('/list/:id', authMiddleware, ListController.update);
lists.delete('/list/:id', authMiddleware, ListController.delete);

export { lists };
