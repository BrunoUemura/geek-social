import { NextFunction, Request, Response } from 'express';
import { ListService } from '../services/ListService';

export class ListController {
  static async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const service = new ListService();
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
      const service = new ListService();
      const result = await service.findAllByUserId(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const service = new ListService();
      const result = await service.findById(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, listName, category } = req.body;
      const service = new ListService();
      const result = await service.create({ userId, listName, category });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { listName, category } = req.body;
      const service = new ListService();
      const result = await service.update(id, { listName, category });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const service = new ListService();
      const result = await service.delete(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
