import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

import {
  content,
  recentContent,
  playList,
  addPlayList,
  removePlayList,
  media,
} from "../controllers/home";

const home = express.Router();

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads", { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    cb(null, basename + "_" + Date.now() + ext);
  },
});

const uploads = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

home.get("/content", content);
home.get("/recentContent", recentContent);
home.get("/playList", playList);
home.post("/playList", addPlayList);
home.delete("/playList", removePlayList);
home.post("/media", uploads.array("media"), media);

export default home;
