import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  static async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const service = new UserService();
      const result = await service.findAll();
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const service = new UserService();
      const result = await service.findById(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { profilePicture, coverPicture, description } = req.body;
      const service = new UserService();
      const result = await service.update(id, {
        profilePicture,
        coverPicture,
        description,
      });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const service = new UserService();
      const result = await service.delete(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
