import { NAME_MODEL } from "../constant/nameModel.js";
import { brandSchema } from "../models/brand.js";
import { inventorySchema } from "../models/inventory.js";
import { stateEquipmentSchema } from "../models/stateEquipment.js";
import { typeEquipmentSchema } from "../models/typeEquipment.js";
import { userSchema } from "../models/user.js";

export const factorySchema = (nameModel) => {
  switch (nameModel) {
    case NAME_MODEL.brand:
      return brandSchema;
    case NAME_MODEL.user:
      return userSchema;
    case NAME_MODEL.inventory:
      return inventorySchema;
    case NAME_MODEL.typeEquipment:
      return stateEquipmentSchema;
    default:
      return typeEquipmentSchema;
  }
};
