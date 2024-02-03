import { Request, Response } from "express";

import contentDatabase from "../database/content";
import recentContentDatabase from "../database/recentContent";
import playListDatabase from "../database/playList";
import path from "path";

export const content = (req: Request, res: Response) => {
  res.status(200).json(contentDatabase);
};

export const recentContent = (req: Request, res: Response) => {
  res.status(200).json(recentContentDatabase);
};

export const playList = (req: Request, res: Response) => {
  res.status(200).json(playListDatabase);
};

export const addPlayList = (req: Request, res: Response) => {
  const { id } = req.body;
  let data;

  data = contentDatabase.find((item) => item.id === id);
  if (!data) {
    data = recentContentDatabase.find((item) => item.id === id);
  }

  playListDatabase.unshift(data!);

  res.status(200).json(data);
};

export const removePlayList = (req: Request, res: Response) => {
  const { id } = req.body;

  const removedIndex = playListDatabase.findIndex((item) => item.id === id);
  const removedData = playListDatabase.find((item) => item.id === id)!;

  playListDatabase.splice(removedIndex, 1);
  contentDatabase.push(removedData);

  res.status(200).json();
};

export const media = (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];

  for (const file of files) {
    const id = Math.floor(Date.now() * Math.random()) + "";
    const ext = path.extname(file.originalname);
    const title = path.basename(file.originalname, ext);
    const src = file.path;
    const type = file.mimetype.includes("video") ? "Video" : "Image";
    const size = `${Math.round(file.size / 1024)}KB`;
    const time = file.mimetype.includes("video") ? "10:00" : "None";

    contentDatabase.unshift({ id, src, title, type, size, time });
  }

  res.status(200).json();
};
