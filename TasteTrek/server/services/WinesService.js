import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";

class WinesService {
  async getWines() {
    const wines = await dbContext.Wines.find();
    return wines;
  }

  async getWineById(wineId) {
    let wine = await dbContext.Wines.findById(wineId);
    if (!wine) {
      throw new BadRequest("Invalid Wine Id");
    }
    return wine;
  }

  async createWine(wineData){
    let wine = await dbContext.Wines.create(wineData)
    return wine
  }

  async editWine(wineId, wineData){
    let wine = await this.getWineById(wineId)

    wine.name = wineData.name || wine.name
    wine.color = wineData.color || wine.color
    wine.producer_name = wineData.producer_name || wine.producer_name
    wine.producer_region = wineData.producer_region || wine.producer_region
    wine.description = wineData.description || wine.description
    wine.imgUrl = wineData.imgUrl || wine.imgUrl
    wine.price = wineData.price || wine.price

    await wine.save()
    return wine
  }

  async deleteWine(wineId){
    let wine = await this.getWineById(wineId)
    await wine.remove()
    return wine
  }
}

export const winesService = new WinesService();
