import express from "express";

import {
  removeList,
  postRemoveList,
  removeRemoveList,
} from "../controllers/remove";
import { isAccessTokenValid } from "../middleware";

const remove = express.Router();

remove.get("/", removeList);
remove.post("/", isAccessTokenValid, postRemoveList);
remove.delete("/", isAccessTokenValid, removeRemoveList);

export default remove;
