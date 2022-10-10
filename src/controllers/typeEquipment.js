import express from "express";
import { NAME_MODEL } from "../constant/nameModel.js";
import {
  create,
  findAndDelete,
  findAndUpdate,
} from "../services/commandCommon.js";

import { findAll, findOne } from "../services/queryCommon.js";

export const typeEquipmentController = express();

typeEquipmentController.post("/", async (req, res) => {
  const data = req.body;
  const created = await create(NAME_MODEL.typeEquipment, {
    ...data,
    dateCreated: new Date(),
    dateUpdate: new Date(),
  });
  return res.json({ ...created });
});

typeEquipmentController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findAndDelete(NAME_MODEL.typeEquipment, id);
  return res.json({ ...data });
});

typeEquipmentController.put("/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = await findAndUpdate(NAME_MODEL.typeEquipment, id, {
    ...data,
    dateUpdate: new Date(),
  });
  return res.json({ ...update });
});

typeEquipmentController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findOne(NAME_MODEL.typeEquipment, id);
  return res.json({ ...data });
});

typeEquipmentController.get("/", async (_req, res) => {
  const data = await findAll(NAME_MODEL.typeEquipment);
  return res.json({ ...data });
});
