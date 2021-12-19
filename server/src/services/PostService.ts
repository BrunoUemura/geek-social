import { StatusCodes } from 'http-status-codes';

import { postRepository } from '../repositories/PostRepository';
import { IPostCreate, IPostUpdate } from '../interfaces/postInterface';
import { NotFoundError } from '../errors/NotFoundError';

export class PostService {
  async findAll() {
    return await postRepository.find();
  }

  async findAllByUserId(id: string) {
    return await postRepository.findOne({ userId: id });
  }

  async findById(id: string) {
    return await postRepository.findById(id);
  }

  async create({ userId, title, description, image }: IPostCreate) {
    await postRepository.create({
      userId,
      title,
      description,
      image,
    });

    return {
      status: StatusCodes.OK,
      message: 'Post created successfully',
    };
  }

  async update(id: string, { title, description, image }: IPostUpdate) {
    const postExists = await postRepository.findById(id);

    if (!postExists) {
      throw new NotFoundError('Post not found');
    }

    await postRepository.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
        image,
      },
    );

    return {
      status: StatusCodes.OK,
      message: 'Post updated successfully',
    };
  }

  async delete(id: string) {
    const postExists = await postRepository.findById(id);

    if (!postExists) {
      throw new NotFoundError('Post not found');
    }

    await postRepository.deleteOne({ _id: id });

    return {
      status: StatusCodes.OK,
      message: 'Post deleted successfully',
    };
  }
}
