import express from "express";
import {
  getAccounts,
  addAccounts,
  disconnectAccount,
} from "../controllers/accountController.js";
import { protect } from "../middlewares/authMiddleware.js";

const accountRouter = express.Router();

accountRouter.get("/", protect, getAccounts);
accountRouter.post("/", protect, addAccounts);
accountRouter.delete("/:id", protect, disconnectAccount);

export default accountRouter;
