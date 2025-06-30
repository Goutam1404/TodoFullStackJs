import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import db from "./utils/db.js";
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/note.route.js";

const port = process.env.PORT || 8000;
const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials:true
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded());
app.listen(port, (req, res) => {
  console.log(`app is listening on ${port}`);
});
db();

app.get("/", (req, res) => {
  res.send("At the home page");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/note",notesRouter);