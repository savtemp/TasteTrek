import { winesService } from "../services/WinesService.js";
import BaseController from "../utils/BaseController.js";

export class WinesController extends BaseController {
  constructor() {
    super(`/api/wines`);
    this.router;
    // .get('', this.getWines)
  }

  async getWines(req, res, next) {
    try {
      let wines = await winesService.getWines();
      res.send(wines);
    } catch (error) {
      next(error);
    }
  }
}
