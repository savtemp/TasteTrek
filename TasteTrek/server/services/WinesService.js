import { dbContext } from "../db/DbContext.js";

class WinesService {
  async getWines() {
    const wines = await dbContext.Wines.find();
    return wines;
  }
}

export const winesService = new WinesService();
