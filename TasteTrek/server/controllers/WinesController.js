import BaseController from "../utils/BaseController.js";

export class WinesController extends BaseController {
  constructor() {
    super(`/api/wines`);
    this.router;
  }
}
