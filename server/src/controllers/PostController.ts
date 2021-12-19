import { NextFunction, Request, Response } from 'express';
import { PostService } from '../services/PostService';

export class PostController {
  static async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const service = new PostService();
      const result = await service.findAll();
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async findAllByUserId(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const service = new PostService();
      const result = await service.findAllByUserId(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const service = new PostService();
      const result = await service.findById(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, title, description, image } = req.body;
      const service = new PostService();
      const result = await service.create({
        userId,
        title,
        description,
        image,
      });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, description, image } = req.body;
      const service = new PostService();
      const result = await service.update(id, { title, description, image });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const service = new PostService();
      const result = await service.delete(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
