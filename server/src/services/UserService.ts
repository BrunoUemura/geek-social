import { userRepository } from '../repositories/UserRepository';
import { StatusCodes } from 'http-status-codes';
import { IUserUpdate } from '../interfaces/userInterface';

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
    await userRepository.updateOne(
      { _id: id },
      { profilePicture, coverPicture, description },
    );

    return {
      status: StatusCodes.OK,
      message: 'User updated successfully',
    };
  }

  async delete(id: string) {
    await userRepository.deleteOne({ _id: id });

    return {
      status: StatusCodes.OK,
      message: 'User deleted successfully',
    };
  }
}
