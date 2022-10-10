import mongoose from "mongoose";
import { brandSchema } from "../models/brand.js";
import { inventorySchema } from "../models/Inventory.js";
import { stateEquipmentSchema } from "../models/stateEquipment.js";
import { typeEquipmentSchema } from "../models/typeEquipment.js";
import { userSchema } from "../models/user.js";
import { NAME_MODEL } from "./nameModel.js";

export const createdModel = {
  User: mongoose.model(NAME_MODEL.user, userSchema),
  StateEquipment: mongoose.model(
    NAME_MODEL.stateEquipment,
    stateEquipmentSchema
  ),
  TypeEquipment: mongoose.model(NAME_MODEL.typeEquipment, typeEquipmentSchema),
  Brand: mongoose.model(NAME_MODEL.brand, brandSchema),
  Inventory: mongoose.model(NAME_MODEL.inventory, inventorySchema),
};
