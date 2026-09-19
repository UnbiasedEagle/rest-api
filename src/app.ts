import express from "express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.js";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to elib apis",
  });
});

app.use(globalErrorHandler);

export default app;
