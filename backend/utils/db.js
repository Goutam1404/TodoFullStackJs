import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const db = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((e) => {
      console.log("Error in connecting the db");
      console.log(e);
    });
};

export default db;
