import express from 'express';
import { auth } from './auth.routes';
import { users } from './users.routes';
import { lists } from './lists.routes';

export const routes = express();
routes.use('/api/v1', auth, users, lists);
