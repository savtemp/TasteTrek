import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ValueSchema } from "../models/Value";
import { WineSchema } from "../models/Wine.js";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);

  Wines = mongoose.model("Wines", WineSchema);
}

export const dbContext = new DbContext();
