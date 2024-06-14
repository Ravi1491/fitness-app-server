import mongoose from "mongoose";
import applicationConfig from "../config/index.js";

const dbConnection = async () => {
  try {
    await mongoose.connect(applicationConfig.mongoDBUrl);

    console.log("DB Connected");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
