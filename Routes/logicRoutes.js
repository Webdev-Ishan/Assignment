import express from "express";
const logicRouter = express.Router();
import * as logicController from "../Controllers/logic.controller.js";
import { logicUser } from "../Middleware/logic.midlleware.js";

logicRouter.post("/set", logicUser, logicController.set);
logicRouter.post('/cancel/:id',logicController.cancel)
export default logicRouter;
