import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("MongoDB is connected", db.connection.name);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
