import express from "express";
import { NAME_MODEL } from "../constant/nameModel.js";
import {
  create,
  findAndDelete,
  findAndUpdate,
} from "../services/commandCommon.js";

import { findAll, findOne } from "../services/queryCommon.js";

export const stateEquipmentController = express();

stateEquipmentController.post("/", async (req, res) => {
  const data = req.body;
  const created = await create(NAME_MODEL.stateEquipment, {
    ...data,
    dateCreated: new Date(),
    dateUpdate: new Date(),
  });
  return res.json({ ...created });
});

stateEquipmentController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findAndDelete(NAME_MODEL.stateEquipment, id);
  return res.json({ ...data });
});

stateEquipmentController.put("/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = await findAndUpdate(NAME_MODEL.stateEquipment, id, {
    ...data,
    dateUpdate: new Date(),
  });
  return res.json({ ...update });
});

stateEquipmentController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await findOne(NAME_MODEL.stateEquipment, id);
  return res.json({ ...data });
});

stateEquipmentController.get("/", async (_req, res) => {
  const data = await findAll(NAME_MODEL.stateEquipment);
  return res.json({ ...data });
});
