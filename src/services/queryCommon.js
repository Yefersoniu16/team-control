import { createdModel } from "../constant/createdModel.js";

export const findOne = async (nameModel, id) => {
  const Model = createdModel[nameModel];
  const data = await Model.findOne({ id });
  return data["_doc"];
};

export const findAll = async (nameModel) => {
  const Model = createdModel[nameModel];
  const data = await Model.find().exec();
  return Array(data);
};
