import express from "express";
import { NAME_MODEL } from "../constant/nameModel.js";
import {
  create,
  findAndDelete,
  findAndUpdate,
} from "../services/commandCommon.js";

import { findAll, findOne } from "../services/queryCommon.js";

export const brandController = express();

brandController.post("/", async (req, res) => {
  const data = req.body;
  const created = await create(NAME_MODEL.brand, {
    ...data,
    dateCreated: new Date(),
    dateUpdate: new Date(),
  });
  return res.json({ ...created });
});

brandController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findAndDelete(NAME_MODEL.brand, id);
  return res.json({ ...data });
});

brandController.put("/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = await findAndUpdate(NAME_MODEL.brand, id, {
    ...data,
    dateUpdate: new Date(),
  });
  return res.json({ ...update });
});

brandController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findOne(NAME_MODEL.brand, id);
  return res.json({ ...data });
});

brandController.get("/", async (_req, res) => {
  const data = await findAll(NAME_MODEL.brand);
  return res.json({ ...data });
});
