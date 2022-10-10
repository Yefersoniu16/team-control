export const MODEL_COMMON = {
  name: String,
  state: String,
  dateCreated: Date,
  dateUpdate: Date,
  _inventory: { type: Number, ref: "Inventory" },
};
