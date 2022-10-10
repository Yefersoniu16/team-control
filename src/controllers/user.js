import express from "express";
import { NAME_MODEL } from "../constant/nameModel.js";
import {
  create,
  findAndDelete,
  findAndUpdate,
} from "../services/commandCommon.js";

import { findAll, findOne } from "../services/queryCommon.js";

export const userController = express();

userController.post("/", async (req, res) => {
  const data = req.body;
  const created = await create(NAME_MODEL.user, {
    ...data,
    dateCreated: new Date(),
    dateUpdate: new Date(),
  });
  return res.json({ ...created });
});

userController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findAndDelete(NAME_MODEL.user, id);
  return res.json({ ...data });
});

userController.put("/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = await findAndUpdate(NAME_MODEL.user, id, {
    ...data,
    dateUpdate: new Date(),
  });
  return res.json({ ...update });
});

userController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findOne(NAME_MODEL.user, id);
  return res.json({ ...data });
});

userController.get("/", async (_req, res) => {
  const data = await findAll(NAME_MODEL.user);
  return res.json({ ...data });
});
