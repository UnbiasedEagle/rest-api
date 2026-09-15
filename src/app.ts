import express from "express";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.status(200).send("OK");
});

export default app;
