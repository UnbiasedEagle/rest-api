import express from "express";
import type { HttpError } from "http-errors";
import { config } from "./config/config.js";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to elib apis",
  });
});

// Global Error Handler
app.use(
  (
    err: HttpError,
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- required so Express recognizes this as error-handling middleware
    next: express.NextFunction,
  ) => {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal Server Error";

    res.status(statusCode).json({
      message: errorMessage,
      errorStack: config.env === "development" ? err.stack : undefined,
    });
  },
);

export default app;
