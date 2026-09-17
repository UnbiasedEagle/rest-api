import express from "express";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to elib apis",
  });
});

export default app;
