import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import router from "./routes/index.js";
import dbConnection from "../database/index.js";
import applicationConfig from "../config/index.js";

dotenv.config();

const app = express();
const PORT = applicationConfig.port;

dbConnection();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Welcome to fitness app server!");
});

app.listen(PORT, () => {
  console.log("Server running of port " + PORT);
});
