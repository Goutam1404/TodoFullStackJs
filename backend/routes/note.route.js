import express from "express";
import {
  createNote,
  deleteNote,
  getUserNote,
  updateNote,
} from "../controllers/notes.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
const notesRouter = express.Router();

notesRouter.post("/create-note", isLoggedIn, createNote);
notesRouter.get("/view-note", isLoggedIn, getUserNote);
notesRouter.put("/update-note/:id", isLoggedIn, updateNote);
notesRouter.delete("/delete-note/:id", isLoggedIn, deleteNote);
export default notesRouter;
