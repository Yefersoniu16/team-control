import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

import { db } from "./config/database.js";
import { brandController } from "./controllers/brand.js";
import { stateEquipmentController } from "./controllers/stateEquipment.js";
import { typeEquipmentController } from "./controllers/typeEquipment.js";
import { userController } from "./controllers/user.js";
import { inventoryController } from "./controllers/inventory.js";

export const server = express();

server
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  .use(compression())
  .use(morgan("tiny"));

server.use("/brand", brandController);
server.use("/stateEquipment", stateEquipmentController);
server.use("/typeEquipment", typeEquipmentController);
server.use("/user", userController);
server.use("/inventory", inventoryController);

db().catch((err) => console.log(err));
