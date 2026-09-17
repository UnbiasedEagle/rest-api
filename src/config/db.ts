import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {
  try {
    if (!config.mongoConnectionString) {
      throw new Error("MONGO_CONNECTION_STRING is not set");
    }

    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Error connecting to database:", err);
    });

    await mongoose.connect(config.mongoConnectionString);
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
};
