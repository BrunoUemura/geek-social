import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';

const users = Router();

users.get('/users', UserController.findAll);
users.get('/users/:id', UserController.findById);
// users.put('/users/:id', authMiddleware, UserController.update);
users.delete('/users/:id', authMiddleware, UserController.delete);

export { users };
