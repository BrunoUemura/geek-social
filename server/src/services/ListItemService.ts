import { StatusCodes } from 'http-status-codes';

import { listRepository } from '../repositories/ListRepository';
import { IListItemCreate, IListItemUpdate } from '../interfaces/listInterface';
import { NotFoundError } from '../errors/NotFoundError';

export class ListItemService {
  async create(id: string, { title, season, episode }: IListItemCreate) {
    const listExists = await listRepository.findById(id);

    if (!listExists) {
      throw new NotFoundError('List not found');
    }

    await listRepository.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          listItems: {
            title,
            season,
            episode,
          },
        },
      },
    );

    return {
      status: StatusCodes.OK,
      message: 'Item added successfully',
    };
  }

  async update(
    id: string,
    { itemId, title, season, episode }: IListItemUpdate,
  ) {
    const listExists = await listRepository.findById(id);

    if (!listExists) {
      throw new NotFoundError('List not found');
    }

    await listRepository.findByIdAndUpdate(
      { _id: id, 'listItems._id': itemId },
      {
        $set: {
          listItems: {
            title,
            season,
            episode,
          },
        },
      },
    );

    return {
      status: StatusCodes.OK,
      message: 'Item updated successfully',
    };
  }

  async delete(id: string, itemId: string) {
    const listExists = await listRepository.findById(id);

    if (!listExists) {
      throw new NotFoundError('List not found');
    }

    await listRepository.findByIdAndUpdate(
      { _id: id },
      {
        $pull: {
          listItems: {
            _id: itemId,
          },
        },
      },
    );

    return {
      status: StatusCodes.OK,
      message: 'Item deleted successfully',
    };
  }
}
