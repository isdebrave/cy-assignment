import express from "express";

import {
  removeList,
  postRemoveList,
  removeRemoveList,
} from "../controllers/remove";

const remove = express.Router();

remove.get("/", removeList);
remove.post("/", postRemoveList);
remove.delete("/", removeRemoveList);

export default remove;
