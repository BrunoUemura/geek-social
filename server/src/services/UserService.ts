import { StatusCodes } from 'http-status-codes';

import { userRepository } from '../repositories/UserRepository';
import { IUserUpdate } from '../interfaces/userInterface';
import { NotFoundError } from '../errors/NotFoundError';

export class UserService {
  async findAll() {
    return await userRepository.find();
  }

  async findById(id: string) {
    return await userRepository.findById(id);
  }

  async update(
    id: string,
    { profilePicture, coverPicture, description }: IUserUpdate,
  ) {
    const userExists = await userRepository.findById(id);

    if (!userExists) {
      throw new NotFoundError('User not found');
    }

    await userRepository.findOneAndUpdate(
      { _id: id },
      { profilePicture, coverPicture, description },
      {
        new: true,
      },
    );

    return {
      status: StatusCodes.OK,
      message: 'User updated successfully',
    };
  }

  async delete(id: string) {
    const userExists = await userRepository.findById(id);

    if (!userExists) {
      throw new NotFoundError('User not found');
    }

    await userRepository.deleteOne({ _id: id });

    return {
      status: StatusCodes.OK,
      message: 'User deleted successfully',
    };
  }
}
