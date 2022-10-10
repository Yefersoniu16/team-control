import mongoose from "mongoose";
const { Schema } = mongoose;

export const inventorySchema = new Schema({
  serial: { type: String, unique: true },
  model: { type: String, unique: true },
  description: String,
  photo: String,
  color: String,
  shopDate: Date,
  price: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  stateEquipment: { type: Schema.Types.ObjectId, ref: "StateEquipment" },
  typeEquipment: { type: Schema.Types.ObjectId, ref: "TypeEquipment" },
});
