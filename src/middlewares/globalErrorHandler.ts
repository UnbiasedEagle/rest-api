import express from "express";
import type { HttpError } from "http-errors";
import { config } from "../config/config.js";

export const globalErrorHandler = (
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
};
