import { StatusCodes } from 'http-status-codes';

import { listRepository } from '../repositories/ListRepository';
import { IListCreate, IListUpdate } from '../interfaces/listInterface';
import { NotFoundError } from '../errors/NotFoundError';

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
    const listExists = await listRepository.findById(id);

    if (!listExists) {
      throw new NotFoundError('List not found');
    }

    await listRepository.findOneAndUpdate(
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
    const listExists = await listRepository.findById(id);

    if (!listExists) {
      throw new NotFoundError('List not found');
    }

    await listRepository.deleteOne({ _id: id });

    return {
      status: StatusCodes.OK,
      message: 'List deleted successfully',
    };
  }
}
