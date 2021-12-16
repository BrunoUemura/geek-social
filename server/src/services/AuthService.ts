import { userRepository } from '../repositories/UserRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import { UnauthorizedError } from '../errors/UnauthorizedError';
import { NotFoundError } from '../errors/NotFoundError';
import { BadRequestError } from '../errors/BadRequestError';
import { IUserRegister, IUserLogin } from '../interfaces/authInterface';

export class AuthService {
  async registerUser({ username, email, password }: IUserRegister) {
    const userExist = await userRepository.findOne({ email });

    if (userExist) {
      throw new BadRequestError('User already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    return {
      status: StatusCodes.CREATED,
      message: 'User registered successfully',
    };
  }

  async loginUser({ username, password }: IUserLogin) {
    const user = await userRepository.findOne({ username });

    if (!user) {
      throw new NotFoundError('User not registered');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new UnauthorizedError('Authentication Failed');
    }

    const payload = { id: user.id };
    const expiration = { expiresIn: '1h' };

    const token = jwt.sign(payload, String(process.env.JWT_SECRET), expiration);

    return {
      status: StatusCodes.OK,
      message: 'Authentication Successful',
      token,
      user,
    };
  }
}
