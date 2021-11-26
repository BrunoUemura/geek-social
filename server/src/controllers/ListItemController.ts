import { NextFunction, Request, Response } from 'express';
import { ListItemService } from '../services/ListItemService';

export class ListItemController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, season, episode } = req.body;
      const service = new ListItemService();
      const result = await service.create(id, { title, season, episode });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, itemId } = req.params;
      const { title, season, episode } = req.body;
      const service = new ListItemService();
      const result = await service.update(id, {
        itemId,
        title,
        season,
        episode,
      });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, itemId } = req.params;
      const service = new ListItemService();
      const result = await service.delete(id, itemId);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
