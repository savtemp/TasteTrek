import { winesService } from "../services/WinesService.js";
import BaseController from "../utils/BaseController.js";

export class WinesController extends BaseController {
  constructor() {
    super("/api/wines")
    this.router
      .get('', this.getWines)
      .get('/:wineId', this.getWineById)
      // add in Authorization below so that you can only create, edit, and delete once you are signed into an account
      // .use('')
      .post('', this.createWine)
      .put('/:wineId', this.editWine)
      .delete('/:wineId', this.deleteWine)
  }

  async getWines(req, res, next) {
    try {
      let wines = await winesService.getWines();
      res.send(wines);
    } catch (error) {
      next(error);
    }
  }

  async getWineById(req, res, next) {
    try {
      let wine = await winesService.getWineById(req.params.wineId);
      res.send(wine);
    } catch (error) {
      next(error);
    }
  }

  async createWine(req, res, next){
    try {
      let wineData = req.body
      let wine = await winesService.createWine(wineData)
      res.send(wine)
    } catch (error) {
      next(error)
    }
  }

  async editWine(req, res, next){
    try {
      let wineData = req.body
      let wine = await winesService.editWine(req.params.wineId, wineData)
      res.send(wine)
    } catch (error) {
      next(error)
    }
  }

  async deleteWine(req, res, next){
    try {
      let wine = await winesService.deleteWine(req.params.wineId)
      res.send(wine)
    } catch (error) {
      next(error)
    }
  }
}
