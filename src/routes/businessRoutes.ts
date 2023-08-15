import express from "express";
import { BusinessController } from "../controllers";
import { container } from "../ioc";
import { CONST } from "../utils";

export const businessRoutes = express.Router();

let businessController = container.get<BusinessController>(CONST.BUSINESS_CONTROLLER);

businessRoutes.use('/business/:id', businessController.getBusiness);