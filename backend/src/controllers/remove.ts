import { Request, Response } from "express";

import removeDatabase from "../database/remove";
import contentDatabase from "../database/content";
import recentContentDatabase from "../database/recentContent";
import playListDatabase from "../database/playList";

export const removeList = (req: Request, res: Response) => {
  res.status(200).json(removeDatabase);
};

export const postRemoveList = (req: Request, res: Response) => {
  const { id } = req.body;

  const data = contentDatabase.find((item) => item.id === id)!;
  const contentRemoveIndex = contentDatabase.findIndex(
    (item) => item.id === id
  );
  const recentContentRemoveIndex = recentContentDatabase.findIndex(
    (item) => item.id === id
  );
  const playListRemoveIndex = playListDatabase.findIndex(
    (item) => item.id === id
  );

  removeDatabase.unshift(data);
  contentDatabase.splice(contentRemoveIndex, 1);
  if (recentContentRemoveIndex > -1) {
    recentContentDatabase.splice(recentContentRemoveIndex, 1);
  }
  if (playListRemoveIndex > -1) {
    playListDatabase.splice(playListRemoveIndex, 1);
  }

  res.status(200).json(data);
};

export const removeRemoveList = (req: Request, res: Response) => {
  const { removeListId } = req.body;

  for (const id of removeListId) {
    const removedIndex = removeDatabase.findIndex((item) => item.id === id);
    removeDatabase.splice(removedIndex, 1);
  }

  res.status(200).json();
};
