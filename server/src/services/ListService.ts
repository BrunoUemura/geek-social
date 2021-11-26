import { listRepository } from '../repositories/ListRepository';
import { StatusCodes } from 'http-status-codes';
import { IUserUpdate } from '../interfaces/userInterface';
import { IListCreate, IListUpdate } from '../interfaces/listInterface';

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

  async create({ userId, listName, category }: IListCreate) {
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

  async update(id: string, { listName, category }: IListUpdate) {
    await listRepository.updateOne(
      { _id: id },
      {
        listName,
        category,
      },
    );

    return {
      status: StatusCodes.OK,
      message: 'List updated successfully',
    };
  }

  async delete(id: string) {
    await listRepository.deleteOne({ _id: id });

    return {
      status: StatusCodes.OK,
      message: 'List deleted successfully',
    };
  }
}
