import express from "express";
import { NAME_MODEL } from "../constant/nameModel.js";
import {
  create,
  findAndDelete,
  findAndUpdate,
} from "../services/commandCommon.js";

import { findOne, findAll } from "../services/queryCommon.js";

export const inventoryController = express();

inventoryController.post("/", async (req, res) => {
  const data = req.body;
  const created = await create(NAME_MODEL.inventory, {
    ...data,
    shopDate: new Date(),
  });
  return res.json({ ...created });
});

inventoryController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findAndDelete(NAME_MODEL.inventory, id);
  return res.json({ ...data });
});

inventoryController.put("/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = await findAndUpdate(NAME_MODEL.inventory, id, {
    ...data,
    dateUpdate: new Date(),
  });
  return res.json({ ...update });
});

inventoryController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findOne(NAME_MODEL.inventory, id);
  return res.json({ ...data });
});

inventoryController.get("/", async (_req, res) => {
  const data = await findAll(NAME_MODEL.inventory);
  return res.json({ ...data });
});
