import express from "express";
import { businessRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use('/poynt', businessRoutes);

app.listen(6000);