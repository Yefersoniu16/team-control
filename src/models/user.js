import mongoose from "mongoose";
import { MODEL_COMMON } from "../constant/modelCommon.js";
const { Schema } = mongoose;
export const userSchema = new Schema({ ...MODEL_COMMON, email: String });
