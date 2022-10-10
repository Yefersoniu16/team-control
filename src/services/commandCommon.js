import { createdModel } from "../constant/createdModel.js";

import { findAll } from "./queryCommon.js";

export const create = async (nameModel, data) => {
  const Model = createdModel[nameModel];
  await Model.create({
    ...data,
  });
  return await findAll(nameModel);
};

export const findAndDelete = async (nameModel, id) => {
  const Model = createdModel[nameModel];
  await Model.findOneAndDelete({ id });
  return await findAll(nameModel);
};

export const findAndUpdate = async (nameModel, id, data) => {
  const Model = createdModel[nameModel];
  await Model.findOneAndUpdate({ _id: id }, { ...data });
  return await findAll(nameModel);
};
