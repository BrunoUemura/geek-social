import { Router } from 'express';
import { PostController } from '../controllers/PostController';
import { authMiddleware } from '../middlewares/authMiddleware';

const posts = Router();

posts.get('/posts', PostController.findAll);
posts.get('/posts/:id', PostController.findAllByUserId);
posts.get('/post/:id', PostController.findById);
posts.post('/post', authMiddleware, PostController.create);
posts.put('/post/:id', authMiddleware, PostController.update);
posts.delete('/post/:id', authMiddleware, PostController.delete);

export { posts };
