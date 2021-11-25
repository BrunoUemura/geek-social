import { listRepository } from '../repositories/ListRepository';
import { StatusCodes } from 'http-status-codes';
import { UserUpdate } from '../config/interfaces/userInterface';

export class ListService {
  async findAll() {
    return await listRepository.find();
  }

  async findAllByUserId(id: string) {
    return await listRepository.findOne({ userId: id });
  }

  async findById(id: string) {
    return await listRepository.findById(id);
  }

  async create({ userId, listName, category }: any) {
    await listRepository.create({
      userId,
      listName,
      category,
    });

    return {
      status: StatusCodes.OK,
      message: 'List created successfully',
    };
  }

  // async update(id: string, { listName, category }: any) {
  //   await listRepository.update({
  //     where: { id },
  //     data: {
  //       list_name: listName,
  //       category,
  //     },
  //   });

  //   return {
  //     status: StatusCodes.OK,
  //     message: 'User updated successfully',
  //   };
  // }

  async delete(id: string) {
    await listRepository.deleteOne({ _id: id });

    return {
      status: StatusCodes.OK,
      message: 'User deleted successfully',
    };
  }
}
