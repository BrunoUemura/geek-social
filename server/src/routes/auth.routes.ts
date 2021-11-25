import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controllers/AuthController';

export const auth = Router();

const registrationValidation = [
  body('username').notEmpty(),
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().isLength({ min: 4, max: 20 }),
];

const loginValidation = [
  body('email').isEmail().withMessage('Email must be valid'),
];

const logoutValidation = [body('token').isString()];

auth
  .post('/register', registrationValidation, AuthController.registerUser)
  .post('/login', loginValidation, AuthController.loginUser);
// .post('/auth/logout', logoutValidation, AuthController.logoutUser);
